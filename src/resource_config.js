export default {
  transaction: {
    path: `Transaction/transaction`,
    search_keys: ['financial_year', 'date', 'description', 'amount', 'amount_in_chf', 'comment'],
    default_sort: 'id.asc',
  },
  transaction_budgetitem: {
    path: `Budget/item`,
    default_sort: 'budgetitem_code.asc',
  },
  transaction_category: {
    path: `utility/category`,
  },
  transaction_type: {
    path: `utility/type`,
  },
  transaction_account: {
    path: `utility/account`,
  },
  transaction_currency: {
    path: `utility/currency`,
  },
};
