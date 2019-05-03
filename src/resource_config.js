import network_config from './network_config';

export default {
  transaction_budgetitem: {
    url: `${network_config.address()}/Budget/item`,
    default_sort: 'budgetitem_code.asc',
  },
  transaction_category: {
    url: `${network_config.address()}/utility/category`,
  },
  transaction_type: {
    url: `${network_config.address()}/utility/type`,
  },
  transaction_account: {
    url: `${network_config.address()}/utility/account`,
  },
  transaction_currency: {
    url: `${network_config.address()}/utility/currency`,
  },
};
