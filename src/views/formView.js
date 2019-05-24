import m from 'mithril';
import 'polythene-css';
import { Toolbar, Button } from 'polythene-mithril';

// import { icons } from './elements';

/**
 * Since Javascript doesn't know enums
 */
const INPUT_TYPES = { static: 0, plain: 1, number: 2, drop: 3 /* radio: 3, check: 4 */ };

// TODO: Patches need to be included

/**
 * Handles the whole viewstuff for a Form
 */
export default class FormView {
  constructor({ attrs: { controller, fields = false, buttons = false } }) {
    this.controller = controller;
    this.fields = fields;
    this.buttons = buttons;
    this.result = new Map();
  }

  /**
   * Prepare the Dropdown Data and fill all
   */
  async oninit(/* vnode */) {
    const dropDowns = this.fields.filter(field => field.type === INPUT_TYPES.drop);
    dropDowns.forEach(dropDown => {
      this.result.set(dropDown.attr_key, []);
    });
    const requests = [];
    dropDowns.forEach(dropDown => {
      requests.push(
        this.controller.getDropDownData(dropDown.attr_key).then(res => {
          this.result.set(dropDown.attr_key, res);
        })
      );
    });
    await Promise.all(requests); // Redraw as soon as all dropdowns are loaded since otherwise the view doesn't handle the display in time
    m.redraw();
  }

  /**
   * Returns a TextInputField
   * @param attr_key: key where in the controller to put the data
   * @param type: type of the textfield plaintext or number.
   * @returns {{dom, domSize, instance, children, _state, skip, tag, text, state, key, events, attrs}}
   */
  getTextField(attr_key, type) {
    let type_string = '';
    if (type === INPUT_TYPES.plain) {
      type_string = 'text';
    } else if (type_string === INPUT_TYPES.number) {
      type_string = 'number';
    }
    return m(`input.form-control[type=${type_string}]`, {
      oninput: m.withAttr('value', value => {
        this.controller.setData(attr_key, value);
      }),
      value: this.controller.getData(attr_key),
      // TODO: helptext
    });
  }

  /**
   * Returns a DropdownMenu
   * @param attr_key: key where in the controller to put the data
   * @returns {{dom, domSize, instance, children, _state, skip, tag, text, state, key, events, attrs}}
   */
  getDropDown(attr_key) {
    return m(
      'select',
      {
        onchange: m.withAttr('value', key => {
          this.controller.setData(attr_key, key);
        }),
      },
      this.result
        .get(attr_key)
        .map(option =>
          m(
            m('option', { value: option.key, style: option.style ? option.style : '' }, option.text)
          )
        )
    );
  }

  /**
   * Returns a rredefined inputfield
   * @param type: type of the inputfield as int (See the "enum")
   * @param attr_key: key where in the controller to put the data
   * @returns {{dom, domSize, instance, children, _state, skip, tag, text, state, key, events, attrs}|string}
   */
  getInputField(type, attr_key) {
    if (type === INPUT_TYPES.plain || type === INPUT_TYPES.number) {
      return this.getTextField(attr_key, type);
    }
    if (type === INPUT_TYPES.drop) {
      return this.getDropDown(attr_key);
    }
    if (type === INPUT_TYPES.static) {
      return '';
    }
    console.log('no correct Type for that field given');
    return m('div', 'no correct type for that field given');
  }

  /**
   * Returns all buttons to be added to the form.
   * @returns {string} Array of all buttons
   */
  getButtons() {
    return this.buttons
      ? this.buttons.map(button =>
          m(Button, {
            className: 'blue-button',
            border: true,
            label: button.label,
            events: {
              onclick: () => {
                button.onclick();
              },
            },
          })
        )
      : '';
  }

  /**
   * View Function
   * @returns {{dom, domSize, instance, children, _state, skip, tag, text, state, key, events, attrs}}
   */
  view() {
    return m(
      'div.formtool',
      {
        style: {
          height: '100%',
          'background-color': 'white',
        },
      },
      [
        m(Toolbar, {
          className: 'toolbar',
          compact: true,
          content: [this.getButtons()],
        }),
        m(
          'div.form',
          this.fields
            ? this.fields.map(field =>
                m('div.field', [
                  m('div.field.desc', field.label),
                  this.getInputField(field.type, field.attr_key),
                ])
              )
            : 'Please reconsider using a form'
        ),
      ]
    );
  }
}

export { INPUT_TYPES };
