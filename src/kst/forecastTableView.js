import ForecastController from './forecastController';
import BaseTable from '../views/baseTable';

const table_setup = [
  { key: 'budgetitem_code', title: 'ID', style: { width: '4em' } },
  {
    key: 'budgetitem_name',
    title: 'Beschreibung',
    style: { width: 'calc(100% - 80em)', minWidth: '10em' },
  },
  { key: 'budgetgroup', title: 'Category', style: { width: '8em' } },
  { key: 'expenditure_budgeted', title: 'Budgetposten', style: { width: '10em' } },
  { key: 'expenditure_calculated', title: 'Account', style: { width: '4em' } },
  { key: 'expenditure_confirmed', title: 'Währung', style: { width: '4em' } },
  { key: 'revenue_budgeted', title: 'Betrag', style: { width: '4em' } },
  { key: 'revenue_calculated', title: 'Betrag CHF', style: { width: '4em' } },
  { key: 'revenue_confirmed', title: 'Valid', style: { width: '4em' } },
];

export default class ForecastTableView extends BaseTable {
  constructor() {
    super(ForecastController, table_setup);
    this.selectable = true;
    this.sortable = true;
    this.searchable = true;
  }
}
