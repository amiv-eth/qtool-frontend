import m from 'mithril';
import 'polythene-css';
import { Toolbar, Button } from 'polythene-mithril';

// import { icons } from './elements';

// Since Javascript doesn't know enums
const INPUT_TYPES = { plain: 1, drop: 2 /* radio: 3, check: 4 */ };

// Patches need to be included
export default class FormView {
  constructor({ attrs: { controller, fields = false, buttons = false } }) {
    this.controller = controller;
    this.fields = fields;
    this.buttons = buttons;
    this.result = new Map();
  }

  oninit(vnode) {
    const dropDowns = this.fields.filter(field => field.type === INPUT_TYPES.drop);
    dropDowns.forEach(dropDown => {
      this.result.set(dropDown.attr_key, [])
    });
    dropDowns.forEach(dropDown => {
      this.controller.getDropDownData(dropDown.attr_key).then(res => {
        this.result.set(dropDown.attr_key, res);
        console.log(this.result)
      });
    });
  }

  getPlainField(attr_key) {
    return m('input.form-control[type=text]', {
      oninput: m.withAttr('value', value => {
        this.controller.setData(attr_key, value);
      }),
      value: this.controller.getData(attr_key),
    });
  }

  getDropDown(attr_key) {
    console.log(this.result)
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
    if (type === INPUT_TYPES.plain) {
      return this.getPlainField(attr_key);
    }
    if (type === INPUT_TYPES.drop) {
      return this.getDropDown(attr_key);
    }
    console.log('no correct Type given');
    return m('div', 'no correct type for that field given');
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
          content: [
            this.buttons
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
              : '',
          ],
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
