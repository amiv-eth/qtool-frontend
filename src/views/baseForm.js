import m from 'mithril';
import { FormView } from './formView';

export default class BaseForm {
  constructor(FormController, inputfields, buttons) {
    this.inputFields = inputfields;
    this.buttons = buttons;

    this.fields_view_data = [];
    this.fields_ctrl_data = [];

    this.inputFields.forEach(pos => {
      this.fields_ctrl_data.push({
        endpoint: pos.endpoint,
        attr_key: pos.attr_key,
        value_key: pos.value_key,
        text_key: pos.text_key,
        value: pos.value,
      });
      this.fields_view_data.push({
        label: pos.label,
        type: pos.type,
        attr_key: pos.attr_key,
      });
    });

    this.ctrl = new FormController(this.fields_ctrl_data);
  }

  view() {
    return m(FormView, {
      controller: this.ctrl,
      fields: this.fields_view_data,
      buttons: this.buttons,
    });
  }
}
