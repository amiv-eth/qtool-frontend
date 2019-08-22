import TransactionTableController from './transactionTableController';
import BaseTable from '../views/baseTable';
import { amountFormatter } from '../models/language';
import { log } from '../utils';

/**
 * Setup of the transaction Table
 * @type {*[]}
 */
const table_setup = [
  { key: 'id', title_key: 'transaction.id', style: { width: '4em' } },
  { key: 'user.name', sort: 'user_id', title_key: 'transaction.name', style: { width: '12em' } },
  {
    key: 'description',
    title_key: 'transaction.desc',
    style: { width: '100%', display: 'flex' },
  },
  {
    key: 'category.category_name',
    sort: 'category_id',
    title_key: 'transaction.category',
    style: { width: '20em' },
  },
  {
    key: 'budgetitem.budgetitem_name',
    text_keys: ['budgetitem.budgetitem_code'],
    sort: 'budgetitem_id',
    title_key: 'transaction.budget_post',
    style: { width: '20em' },
  },
  {
    key: 'amount',
    text_keys: ['currency.currency_shortcut'],
    title_key: 'transaction.amount',
    style: { width: '8em' },
    formatting: item => amountFormatter(item),
  },
  {
    key: 'amount_in_chf',
    title_key: 'transaction.amount_chf',
    style: { width: '8em' },
    formatting: item => amountFormatter(item),
  },
  {
    key: 'type.type_name',
    sort: 'type_id',
    title_key: 'transaction.payment_method',
    style: { width: '20em' },
  },
  { key: 'is_valid', title_key: 'transaction.valid', style: { width: '10em' } },
  { key: 'ezag', title_key: 'transaction.ezag', style: { width: '10em' } },
];
/**
 * Collection of all buttons function must be added in the inherited constructor
 * @type {*[]}
 */
const buttons = [
  {
    label_key: 'button.print_all',
  },
  {
    label_key: 'button.print_selected',
  },
  {
    label_key: 'button.unselect_all',
  },
];

export default class TransactionTableView extends BaseTable {
  constructor() {
    log.debug(`Constructing new TransactionTableView`);

    super(TransactionTableController, table_setup, buttons);
    // Defintion of all table attributes
    this.selectable = true;
    this.sortable = true;
    this.searchable = true;
  }

  oninit() {
    super.oninit();

    // Approved by Sandro
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
