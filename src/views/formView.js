import m from 'mithril';
import 'polythene-css';
import { Toolbar, Button } from 'polythene-mithril';
// import { icons } from './elements';

// Since Javascript doesn't know enums
const INPUT_TYPES = { plain: 1, drop: 2 /* radio: 3, check: 4 */ };

export default class FormView {
  constructor({ attrs: { controller, fields = false, buttons = false } }) {
    this.controller = controller;
    this.fields = fields;
    this.buttons = buttons;

    this.formData = {};
    this.fields.forEach(field => {
      this.formData[field.key] = '';
    });
  }

  getPlainField(key) {
    return m('input.form-control[type=text]', {
      oninput: m.withAttr('value', value => {
        this.formData[key] = value;
      }),
      value: this.formData[key],
    });
  }

  getDropDown(key) {
    return m(
      'select.form-control',
      {
        // oninit: model.fetch,
        onchange: m.withAttr('value', value => {
          this.formData[key] = value;
        }),
      }
      // this.controller //populateDropDown(model, belegformularAttrName, valueKey, textKeys)
    );
  }

  getInputField(type, key) {
    if (type === INPUT_TYPES.plain) {
      return this.getPlainField(key);
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
        // please beare with this code, it is the only way possible to track the selection
        // status of all the filters of the same group and make sure that they are really
        // mutually exclusive (that way when you click on one filter in the group, the other
        // ones in this group will be deselected)
        m(
          'div.form',
          this.fields
            ? this.fields.map(field =>
                m('div.fied', [
                  m('div.field.desc', field.label),
                  this.getInputField(field.type, field.key),
                ])
              )
            : ''
        ),
      ]
    );
  }
}

export { FormView, INPUT_TYPES };
