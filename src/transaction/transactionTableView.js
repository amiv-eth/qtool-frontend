import TransactionController from './transactionController';
import BaseTable from '../views/baseTable';

const table_setup = [
  { key: 'id', title: 'ID', style: { width: '4em' } },
  {
    key: 'description',
    title: 'Beschreibung',
    style: { width: 'calc(100% - 80em)', minWidth: '10em' },
  },
  { key: 'type_id', title: 'Type', style: { width: '4em' } },
  { key: 'category_id', title: 'Category', style: { width: '8em' } },
  { key: 'budgetitem_id', title: 'Budgetposten', style: { width: '10em' } },
  { key: 'account_id', title: 'Account', style: { width: '4em' } },
  { key: 'currency_id', title: 'Währung', style: { width: '4em' } },
  { key: 'amount', title: 'Betrag', style: { width: '4em' } },
  { key: 'amount_in_chf', title: 'Betrag CHF', style: { width: '4em' } },
  { key: 'is_valid', title: 'Valid', style: { width: '4em' } },
  { key: 'financial_year', title: 'Geschäftsjahr', style: { width: '10em' } },
  { key: 'date', title: 'Date', style: { width: '24em' } },
];

export default class TransactionTableView extends BaseTable {
  constructor() {
    super(TransactionController, table_setup);
    this.selectable = true;
    this.sortable = true;
    this.searchable = true;
  }
}
