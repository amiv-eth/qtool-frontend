import m from 'mithril';
import TableView from '../views/tableView';
// import TransactionController from './transactionController';
import TestTransactionController from './testTransactionController';

/* Table of all studydocuments */
export default class TransactionTableView {
  constructor() {
    // this.ctrl = new TransactionController((query, search) => this.handler.get({ search, ...query }));
    this.ctrl = new TestTransactionController();
    console.log('transactionTable');
  }

  getItemData(data) {
    /*return [
      m('td', data.id),
      m('td', data.description),
      m('td', data.type_id),
      m('td', data.category_id),
      m('td', data.budgetitem_id),
      m('td', data.account_id),
      m('td', data.currency_id),
      m('td', data.amount),
      m('td', data.amount_in_chf),
      m('td', data.is_valid),
      m('td', data.financial_year),
      m('td', data.date),
    ];*/
    
    return [
      m('td', { style: { width: 'calc(100% - 36em)' } }, data.id),
      m('td', { style: { width: '8em' } }, data.description),
      m('td', { style: { width: '4em' } }, data.type_id),
      m('td', { style: { width: '4em' } }, data.category_id),
      m('td', { style: { width: '10em' } }, data.budgetitem_id),
      m('td', { style: { width: '10em' } }, data.account_id),
      m('td', { style: { width: '10em' } }, data.currency_id),
      m('td', { style: { width: '10em' } }, data.amount),
      m('td', { style: { width: '10em' } }, data.amount_in_chf),
      m('td', { style: { width: '10em' } }, data.is_valid),
      m('td', { style: { width: '10em' } }, data.financial_year),
      m('td', { style: { width: '10em' } }, data.date),
    ];
    
  }

  view() {
    return m(TableView, {
      controller: this.ctrl,
      keys: ['title', 'author', 'course_year', 'semester', 'lecture'], //Only needed if data was not tilecontent was not defined
      tileContent: this.getItemData,
      /*titles: [
        { text: 'ID'},
        { text: 'Beschreibung'},
        { text: 'Type'},
        { text: 'Category'},
        { text: 'Budgetposten'},
        { text: 'Account'},
        { text: 'Währung'},
        { text: 'Betrag'},
        { text: 'Betrag CHF'},
        { text: 'Valid'},
        { text: 'Geschäftsjahr'},
        { text: 'Date'}
      ],
      */
      titles: [
        { text: 'ID', width: 'calc(100% - 36em)' },
        { text: 'Beschreibung', width: '8em' },
        { text: 'Type', width: '4em' },
        { text: 'Category', width: '4em' },
        { text: 'Budgetposten', width: '10em' },
        { text: 'Account', width: '10em' },
        { text: 'Währung', width: '10em' },
        { text: 'Betrag', width: '10em' },
        { text: 'Betrag CHF', width: '10em' },
        { text: 'Valid', width: '10em' },
        { text: 'Geschäftsjahr', width: '10em' },
        { text: 'Date', width: '10em' }
      ],
      
    });
  }
}
