import network_config from './network_config';

export default {
  budgetitem: {
    url: `${network_config.address()}/Budget/item`,
    default_sort: 'budgetitem_code.asc',
  },
  category: {
    url: `${network_config.address()}/utility/category`,
  },
};
