import { INPUT_TYPES } from '../views/formView';
import BelegFormController from './belegFormController';
import Category from '../models/category';
import Type from '../models/type';
import BaseForm from '../views/baseForm';

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

export default class BelegFormView extends BaseForm {
  constructor() {
    super(BelegFormController, inputFields, buttons);
  }
}
