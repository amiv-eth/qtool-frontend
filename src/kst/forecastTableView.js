import m from 'mithril';
import ForecastController from './forecastController';
import BaseTable from '../views/baseTable';

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
  },
  {
    key: 'expenditure_calculated',
    title: 'Ausgaben berechnet',
    style: { width: '6em', textAlign: 'right' },
    conditional_tags: item =>
      item.expenditure_calculated < item.expenditure_budgeted ? 'red' : 'green',
  },
  {
    key: 'revenue_budgeted',
    title: 'Ertrag budgetiert',
    style: { width: '6em', textAlign: 'right' },
  },
  {
    key: 'revenue_calculated',
    title: 'Ertrag berechnet',
    style: { width: '6em', textAlign: 'right' },
    conditional_tags: item =>
      item.revenue_calculated < item.revenue_budgeted ? 'red' : 'green',
  },
  {
    key: 'difference_budgeted',
    title: 'Differenz budgetiert',
    style: { width: '6em', textAlign: 'right' },
  },
  {
    key: 'difference_calculated',
    title: 'Differenz berechnet',
    style: { width: '6em', textAlign: 'right' },
    conditional_tags: item =>
      item.difference_budgeted > item.difference_calculated ? 'red' : 'green',
  },
];

const buttons = [
  {
    label: 'Print all shown',
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

  /**
   * Overrides original function to accomodate the conditional Background.
   * @param data a table item
   * @returns {Array} one row of the table
   */
  getItemData(data) {
    const row = [];
    this.title_arr.forEach(pos => {
      row.push(
        m(
          `div.tableItem.${pos.conditional_tags(data)}`,
          {
            style: pos.style,
          },
          data[pos.key]
        )
      );
    });
    return row;
  }
}
