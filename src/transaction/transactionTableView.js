import TransactionTableController from './transactionTableController';
import BaseTable from '../views/baseTable';
import { amountFormatter } from '../models/language';

/**
 * Setup of the transaction Table
 * @type {*[]}
 */
const table_setup = [
  { key: 'id', title: 'ID', style: { width: '4em' } },
  { key: 'user.name', sort: 'user_id', title: 'Name', style: { width: '12em' } },
  {
    key: 'description',
    title: 'Beschreibung',
    style: { width: '100%', display: 'flex' },
  },
  {
    key: 'category.category_name',
    sort: 'category_id',
    title: 'Kategorie',
    style: { width: '20em' },
  },
  {
    key: 'budgetitem.budgetitem_name',
    sort: 'budgetitem_id',
    title: 'Budgetposten',
    style: { width: '20em' },
  },
  {
    key: 'amount',
    text_keys: '',
    title: 'Betrag',
    style: { width: '8em' },
    formatting: item => amountFormatter(item),
  },
  {
    key: 'amount_in_chf',
    title: 'Betrag CHF',
    style: { width: '8em' },
    formatting: item => amountFormatter(item),
  },
  { key: 'type.type_name', sort: 'type_id', title: 'Zahlungsmethode', style: { width: '20em' } },
  { key: 'is_valid', title: 'Gültig', style: { width: '10em' } },
  { key: 'ezag', title: 'EZAG', style: { width: '10em' } },
];
/**
 * Collection of all buttons function must be added in the inherited constructor
 * @type {*[]}
 */
const buttons = [
  {
    label: 'Print all shown',
  },
  {
    label: 'Print selected',
  },
  {
    label: 'Unselect all',
  },
];

export default class TransactionTableView extends BaseTable {
  constructor() {
    super(TransactionTableController, table_setup, buttons);
    // Defintion of all table attributes
    this.selectable = true;
    this.sortable = true;
    this.searchable = true;

    // Adding Button functionality
    buttons[0].onclick = () => {
      this.ctrl.printAll(this.print_table_info, 'Transaction_Table', 'All Transactions');
    };

    buttons[1].onclick = () => {
      this.ctrl.printSelected(this.print_table_info, 'Transaction_Table', 'Selected Transactions');
    };

    buttons[2].onclick = () => {
      this.ctrl.unselectAll();
    };
  }
}
