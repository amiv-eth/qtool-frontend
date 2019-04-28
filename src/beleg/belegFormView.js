import m from 'mithril';
import { FormView, INPUT_TYPES } from '../views/formView';
import BelegFromController from './belegFormController';
import Category from '../models/category';
import Type from '../models/type';

const inputFields = [
  {
    label: 'Description',
    type: INPUT_TYPES.plain,
    attr_key: 'description',
  },
  {
    label: 'Category',
    type: INPUT_TYPES.drop,
    endpoint: new Category(),
    attr_key: 'category_id',
    value_key: 'category',
    text_key: 'category_name',
  },
  {
    label: 'Zahlungsart',
    type: INPUT_TYPES.drop,
    endpoint: new Type(),
    attr_key: 'type_id',
    value_key: 'type_id',
    text_key: 'type_name',
  },
];

const buttons = [
  {
    label: 'Confirm',
    onclick: () => {
      console.log('Yayy');
    },
  },
];

export default class BelegFromView {
  constructor() {
    this.fields_view_data = [];
    this.fields_ctrl_data = [];

    inputFields.forEach(pos => {
      this.fields_ctrl_data.push({
        endpoint: pos.endpoint,
        attr_key: pos.attr_key,
        value_key: pos.value_key,
        text_key: pos.text_key,
      });
      this.fields_view_data.push({
        label: pos.label,
        type: pos.type,
        attr_key: pos.attr_key,
      });
    });

    this.ctrl = new BelegFromController(this.fields_ctrl_data);
  }

  view() {
    return m(FormView, {
      controller: this.ctrl,
      fields: this.fields_view_data,
      buttons,
    });
  }
}
