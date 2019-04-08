import m from 'mithril';
import TableView from '../views/tableView';
import TestTransactionController from './testTransactionController';

const table_setup = [
  { key: 'id', title: 'ID', style: { width: '4em' } },
  {
    key: 'description',
    title: 'Beschreibung',
    style: { width: 'calc(100% - 56em)', minWidth: '10em' },
  },
  { key: 'type_id', title: 'Type', style: { width: '4em' } },
  { key: 'category_id', title: 'Category', style: { width: '4em' } },
  { key: 'budgetitem_id', title: 'Budgetposten', style: { width: '10em' } },
  { key: 'account_id', title: 'Account', style: { width: '4em' } },
  { key: 'currency_id', title: 'Währung', style: { width: '4em' } },
  { key: 'amount', title: 'Betrag', style: { width: '4em' } },
  { key: 'amount_in_chf', title: 'Betrag CHF', style: { width: '4em' } },
  { key: 'is_valid', title: 'Valid', style: { width: '4em' } },
  { key: 'financial_year', title: 'Geschäftsjahr', style: { width: '10em' } },
  { key: 'date', title: 'Date', style: { width: '4em' } },
];

/* Table of all studydocuments */
export default class TransactionTableView {
  constructor() {
    this.ctrl = new TestTransactionController();
  }

  getItemData(data) {
    const row = [];
    this.setup.forEach(pos => {
      row.push(m('div', { style: pos.style }, data[pos.key]));
    });
    return row;
  }

  view() {
    const title_arr = [];
    const keys_arr = [];

    setup.forEach(pos => {
      title_arr.push({
        text: pos.title,
        style: pos.style,
      });
      keys_arr.push(pos.key);
    });
    return m(TableView, {
      controller: this.ctrl,
      keys: keys_arr, // Only needed if data was not tilecontent was not defined properly
      tileContent: this.getItemData,
      titles: title_arr,
    });
  }
}
