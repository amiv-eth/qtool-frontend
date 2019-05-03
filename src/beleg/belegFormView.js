import { INPUT_TYPES } from '../views/formView';
import BelegFormController from './belegFormController';
import Category from '../models/category';
import Account from '../models/account';
import Type from '../models/type';
import Currency from '../models/currency';
import BudgetItem from '../models/budgetitem';
import ResourceHandler from '../auth';

import BaseForm from '../views/baseForm';

// Several Text-Keys needed
const inputFields = [
  {
    label: 'Description',
    type: INPUT_TYPES.plain,
    attr_key: 'description',
  },/*
  {
    label: 'Category',
    type: INPUT_TYPES.drop,
    endpoint: new ResorceHandler('category'),
    attr_key: 'category_id',
    value_key: 'category',
    text_key: 'category_name',
  },*/
  {
    label: 'Budgetposten',
    type: INPUT_TYPES.drop,
    endpoint: new ResourceHandler('budgetitem'),
    attr_key: 'budgetitem_id',
    value_key: 'budgetitem',
    text_key: 'budgetitem_name',
  },/*
  {
    label: 'Zahlungsart',
    type: INPUT_TYPES.drop,
    endpoint: new Type(),
    attr_key: 'type_id',
    value_key: 'type_id',
    text_key: 'type_name',
  },
  {
    label: 'Account',
    type: INPUT_TYPES.drop,
    endpoint: new Account(),
    attr_key: 'account_id',
    value_key: 'account',
    text_key: 'account_name',
  },
  {
    label: 'Currency',
    type: INPUT_TYPES.drop,
    endpoint: new Currency(),
    attr_key: 'currency_id',
    value_key: 'currency_id',
    text_key: 'currency_name',
  },*/
  {
    label: 'Amount',
    type: INPUT_TYPES.number,
    attr_key: 'amount',
  },
  {
    label: 'Kommentar',
    type: INPUT_TYPES.plain,
    attr_key: 'comment',
  },
  {
    type: INPUT_TYPES.static,
    attr_key: 'financial_year',
    value: 2019,
  },
  {
    type: INPUT_TYPES.static,
    attr_key: 'date',
    value: new Date(),
  },
  {
    type: INPUT_TYPES.static,
    attr_key: 'is_valid',
    value: true,
  },
  {
    type: INPUT_TYPES.static,
    attr_key: 'user_id',
    value: 789,
  },
  {
    type: INPUT_TYPES.static,
    attr_key: 'amount_in_chf',
    value: 4242,
  },
];

const buttons = [
  {
    label: 'Confirm',
    onclick: () => {
      console.log('Missing function definition');
    },
  },
];

export default class BelegFormView extends BaseForm {
  constructor() {
    super(BelegFormController, inputFields, buttons);
    this.buttons[0].onclick = () => this.ctrl.submit(); // Sandro fragen
  }
}
