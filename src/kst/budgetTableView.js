import ForecastController from './forecastController';
import BaseTable from '../views/baseTable';
import { amountFormatter } from '../models/language';

/**
 * Collection of all Displayed fields.
 * @type {*[]}
 */
const table_setup = [
  { key: 'budgetitem_code', title: 'Code', style: { width: '4em' } },
  {
    key: 'budgetitem_name',
    title: 'Beschreibung',
    style: { width: 'calc(100% - 80em)', minWidth: '10em' },
  },
  { key: 'budgetgroup', title: 'Gruppe', style: { width: '8em' } },
  {
    key: 'expenditure_budgeted',
    title: 'Ausgaben budgetiert',
    style: { width: '6em', textAlign: 'right' },
    formatting: item => amountFormatter(item),
  },
  {
    key: 'expenditure_calculated',
    title: 'Ausgaben berechnet',
    style: { width: '6em', textAlign: 'right' },
    conditional_tags: item =>
      item.expenditure_calculated > item.expenditure_budgeted ? 'red' : 'green',
    formatting: item => amountFormatter(item),
  },
  {
    key: 'revenue_budgeted',
    title: 'Ertrag budgetiert',
    style: { width: '6em', textAlign: 'right' },
    formatting: item => amountFormatter(item),
  },
  {
    key: 'revenue_calculated',
    title: 'Ertrag berechnet',
    style: { width: '6em', textAlign: 'right' },
    conditional_tags: item => (item.revenue_calculated < item.revenue_budgeted ? 'red' : 'green'),
    formatting: item => amountFormatter(item),
  },
  {
    key: 'difference_budgeted',
    title: 'Differenz budgetiert',
    style: { width: '6em', textAlign: 'right' },
    formatting: item => amountFormatter(item),
  },
  {
    key: 'difference_calculated',
    title: 'Differenz berechnet',
    style: { width: '6em', textAlign: 'right' },
    conditional_tags: item =>
      item.difference_budgeted <= item.difference_calculated ? 'green' : 'red',
    formatting: item => amountFormatter(item),
  },
];

const buttons = [
  {
    label: 'Print all shown',
  },
];

export default class ConfirmedTableView extends BaseTable {
  constructor() {
    super(ForecastController, table_setup, buttons);
    this.searchable = true;

    // Setting button onclick function since ctrl isn't defined yet.
    buttons[0].onclick = () => {
      this.ctrl.printAll(this.print_table_info);
    };
  }
}
