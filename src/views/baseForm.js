import m from 'mithril';
import FormView from './formView';
import { i18n } from '../models/language';

/**
 * Base of a Form which can be inherited
 * It takes an array of all inputfields and one of all buttons and generates all the different tables
 * for view and controller.
 */
export default class BaseForm {
  constructor(FormController, inputFields, buttons) {
    this.buttons = buttons.map(button => ({
      label_key: i18n(button.label_key), // Probably there needs to be done much more in future
    }));

    this.fields_view_data = []; // Data for the view containing all the info to display
    this.fields_ctrl_data = []; // Data for the controller used to make the request.

    inputFields.forEach(pos => {
      // Adding all the data to the different arrays.
      this.fields_ctrl_data.push({
        endpoint: pos.endpoint,
        attr_key: pos.attr_key,
        value_key: pos.value_key,
        text_key: pos.text_key,
        value: pos.value,
      });
      this.fields_view_data.push({
        label_key: pos.label_key,
        type: pos.type,
        attr_key: pos.attr_key,
      });
    });

    this.ctrl = new FormController(this.fields_ctrl_data); // Setting up the Controller
  }

  /**
   * View Function
   * @returns {{dom, domSize, instance, children, _state, skip, tag, text, state, key, events, attrs}}
   */
  view() {
    return m(FormView, {
      controller: this.ctrl,
      fields: this.fields_view_data,
      buttons: this.buttons,
    });
  }
}
