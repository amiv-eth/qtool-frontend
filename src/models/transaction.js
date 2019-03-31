const m = require('mithril');
const api = require('./api_config');

const Transaction = {
  items: [],
  sort: 'id.asc',
  page: 1,
  meta: {},
  where: '',

  fetch() {
    let searchString = '';
    if (Transaction.where !== '') {
      searchString = `&where=${Transaction.where}`;
    }
    return m
      .request({
        method: 'GET',
        url: `${api.address()}/Transaction/transaction?sort=${Transaction.sort}&page=${
          Transaction.page
        }${searchString}`,
        headers: {
          'X-AMIV-API-TOKEN': 'quaestor',
          Accept: 'application/json',
        },
      })
      .then(result => {
        Transaction.items = result.items;
        Transaction.meta = result.meta;
      });
  },

  fetchId(id) {
    return m
      .request({
        method: 'GET',
        url: `${api.address()}/Transaction/transaction/${id}`,
        headers: {
          'X-AMIV-API-TOKEN': 'quaestor',
          Accept: 'application/json',
        },
      })
      .then(result => result);
  },

  submit(data) {
    return m.request({
      method: 'POST',
      url: `${api.address()}/Transaction/transaction`,
      data,
      headers: {
        'X-AMIV-API-TOKEN': 'quaestor',
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    });
  },
};

module.exports = Transaction;
