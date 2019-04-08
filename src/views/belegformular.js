import m from 'mithril';
import Transaction from '../models/transaction';
import Category from '../models/category';
import Account from '../models/account';
import Type from '../models/type';
import Currency from '../models/currency';
import BudgetItem from '../models/budgetitem';

let TransactionData = {
  financial_year: 2018,
  date: new Date(),
  type_id: 0,
  description: '',
  category_id: 0,
  budgetitem_id: 0,
  account_id: 0,
  is_valid: true,
  amount: 0,
  currency_id: 0,
  user_id: 50,
  comment: '',
  amount_in_chf: 0,
};

function populateDropDown(Endpoint, belegformularAttrName, valueKey, textKeys) {
  if (Endpoint.items.length === 0) {
    return m('option', 'None');
  }
  const firstItem = Endpoint.items[0];
  const firstValue = firstItem[valueKey];
  TransactionData[belegformularAttrName] = firstItem[valueKey];
  return Endpoint.items.map(item => {
    let text = '';
    Object.values(textKeys).forEach(key => {
      text = `${text + item[key]} `;
    });
    if (item[valueKey] === firstValue) {
      return m('option', { selected: 'selected', value: item[valueKey] }, text);
    }
    return m('option', { value: item[valueKey] }, text);
  });
}

function dropDownMenu(Endpoint, belegformularAttrName, valueKey, textKeys) {
  return m(
    'select.form-control',
    {
      oninit: Endpoint.fetch,
      onchange: m.withAttr('value', value => {
        TransactionData[belegformularAttrName] = value;
      }),
    },
    populateDropDown(Endpoint, belegformularAttrName, valueKey, textKeys)
  );
}

export default class Belegformular {
  view(vnode) {
    return m(
      'form.col-md-8.col-md-offset-2',
      {
        oninit() {
          if (vnode.attrs.id) {
            Transaction.fetchId(vnode.attrs.id).then(result => {
              TransactionData = result;
            });
          }
        },
        onsubmit(e) {
          e.preventDefault();
          Transaction.submit(TransactionData);
        },
      },
      [
        m('div.alert', 'Bitte für jede Quittung ein Belegformular ausfüllen!'),
        m('label.control-label', 'Beschreibung'),
        m('input.form-control[type=text]', {
          oninput: m.withAttr('value', value => {
            TransactionData.description = value;
          }),
          value: TransactionData.description,
        }),
        m('label.control-label', 'Kategorie'),
        dropDownMenu(Category, 'category_id', 'category', ['category_name']),
        m('label.control-label', 'Budgetposten'),
        dropDownMenu(BudgetItem, 'budgetitem_id', 'budgetitem_id', [
          'budgetitem_code',
          'budgetitem_name',
        ]),
        m('label.control-label', 'Zahlungsart'),
        dropDownMenu(Type, 'type_id', 'type_id', ['type_name']),
        m('label.control-label', 'Konto'),
        dropDownMenu(Account, 'account_id', 'account', ['account_name']),
        m('label.control-label', 'Betrag'),
        dropDownMenu(Currency, 'currency_id', 'currency_id', ['currency_shortcut']),
        m('input.form-control[type=number]', {
          oninput: m.withAttr('value', value => {
            TransactionData.amount = value;
          }),
          value: TransactionData.amount,
        }),
        m('label.control-label', 'Kommentare'),
        m('input.form-control[type=text]', {
          oninput: m.withAttr('value', value => {
            TransactionData.comment = value;
          }),
          value: TransactionData.comment,
        }),
        m('button.button[type=submit]', 'Submit'),
      ]
    );
  }
}
