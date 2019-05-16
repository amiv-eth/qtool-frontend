/**
 * Resource configuration
 */
export default {
  transaction: {
    path: `Transaction/transaction`,
    search_keys: [
      'financial_year',
      'date',
      'description',
      'amount',
      'amount_in_chf',
      'user.name',
      'type.type_name',
      'category.category_name',
    ],
    default_sort: 'id.asc',
    embedded: ['user', 'category', 'budgetitem', 'type', 'currency'],
  },
  transaction_budgetitem: {
    path: `Budget/item`,
    default_sort: 'budgetitem_code.asc',
    unique_id: 'budgetitem_id',
    search_keys: ['budgetitem_code', 'budgetitem_name'],
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
