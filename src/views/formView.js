import m from 'mithril';
import 'polythene-css';
import { Toolbar, Button } from 'polythene-mithril';

// import { icons } from './elements';

// Since Javascript doesn't know enums
const INPUT_TYPES = { static: 0, plain: 1, number: 2, drop: 3 /* radio: 3, check: 4 */ };

// Patches need to be included
export default class FormView {
  constructor({ attrs: { controller, fields = false, buttons = false } }) {
    this.controller = controller;
    this.fields = fields;
    this.buttons = buttons;
    this.result = new Map();
  }

  oninit(/* vnode */) {
    const dropDowns = this.fields.filter(field => field.type === INPUT_TYPES.drop);
    dropDowns.forEach(dropDown => {
      this.result.set(dropDown.attr_key, []);
    });
    dropDowns.forEach(dropDown => {
      this.controller.getDropDownData(dropDown.attr_key).then(res => {
        this.result.set(dropDown.attr_key, res);
      });
    });
  }

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

  getDropDown(attr_key) {
    return m(
      'select',
      {
        onchange: m.withAttr('value', key => {
          this.controller.setData(attr_key, key);
        }),
      },
      this.result.get(attr_key).map(option => m('option', { value: option.key }, option.text))
    );
  }

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

export { FormView, INPUT_TYPES };
