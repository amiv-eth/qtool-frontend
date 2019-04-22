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

  fetchInfinite(pageNum) {
    return m.request({
      method: 'GET',
      url: `${api.address()}/Transaction/transaction?page=${pageNum}`,
      headers: {
        'X-AMIV-API-TOKEN': 'quaestor',
        Accept: 'application/json',
      },
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

  setGeneralSearch(string){ //Returns whether there happened a change
    if (string.length < 3) {
      if (Transaction.where === '') {
        return false;
      }
      Transaction.where = '';
      Transaction.page = 1;
      Transaction.fetch();
      return true;
    }
    const fields = ['financial_year', 'date', 'description', 'amount', 'amount_in_chf', 'comment'];
    let search = "{'or': [";
    Object.values(fields).forEach(field => {
      search = `${search}{'${field}.in': '${string}'}, `;
    });
    search += ']}';
    Transaction.page = 1;
    Transaction.where = search;
    return true;
  },
}

module.exports = Transaction;
