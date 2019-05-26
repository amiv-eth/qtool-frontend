import ForecastController from './forecastController';
import BaseTable from '../views/baseTable';
import { amountFormatter } from '../models/language';

/**
 * Collection of all Displayed fields.
 * @type {*[]}
 */
const table_setup = [
  { key: 'budgetitem_code', title_key: 'transaction.code', style: { width: '4em' } },
  {
    key: 'budgetitem_name',
    title_key: 'transaction.desc',
    style: { width: 'calc(100% - 80em)', minWidth: '10em' },
  },
  { key: 'budgetgroup', title_key: 'transaction.group', style: { width: '8em' } },
  {
    key: 'expenditure_budgeted',
    title_key: 'transaction.expenditure_budgeted',
    style: { width: '6em', textAlign: 'right' },
    formatting: item => amountFormatter(item),
  },
  {
    key: 'expenditure_confirmed',
    title_key: 'transaction.expenditure_confirmed',
    style: { width: '6em', textAlign: 'right' },
    conditional_tags: item =>
      item.expenditure_confirmed > item.expenditure_budgeted ? 'red' : 'green',
    formatting: item => amountFormatter(item),
  },
  {
    key: 'revenue_budgeted',
    title_key: 'transaction.revenue_budgeted',
    style: { width: '6em', textAlign: 'right' },
    formatting: item => amountFormatter(item),
  },
  {
    key: 'revenue_confirmed',
    title_key: 'transaction.revenue_confirmed',
    style: { width: '6em', textAlign: 'right' },
    conditional_tags: item => (item.revenue_confirmed < item.revenue_budgeted ? 'red' : 'green'),
    formatting: item => amountFormatter(item),
  },
  {
    key: 'difference_budgeted',
    title_key: 'transaction.difference_budgeted',
    style: { width: '6em', textAlign: 'right' },
    formatting: item => amountFormatter(item),
  },
  {
    key: 'difference_confirmed',
    title_key: 'transaction.difference_confirmed',
    style: { width: '6em', textAlign: 'right' },
    conditional_tags: item =>
      item.difference_budgeted <= item.difference_confirmed ? 'green' : 'red',
    formatting: item => amountFormatter(item),
  },
];

const buttons = [
  {
    label_key: 'button.print_all',
  },
];

export default class ForecastTableView extends BaseTable {
  constructor() {
    super(ForecastController, table_setup, buttons);
    this.searchable = true;

    // Setting button onclick function since ctrl isn't defined yet.
    buttons[0].onclick = () => {
      this.ctrl.printAll(this.print_table_info);
    };
  }
}
