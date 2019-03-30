var m = require('mithril');
var api = require('./api_config');

var Transaction = {
  items: [],
  sort: 'id.asc',
  page: 1,
  meta: {},
  where: '',

  fetch: function() {
    let searchString = '';
    if (Transaction.where != '') {
      searchString = '&where=' + Transaction.where;
    }
    return m
      .request({
        method: 'GET',
        url:
          api.address() +
          '/Transaction/transaction?sort=' +
          Transaction.sort +
          '&page=' +
          Transaction.page +
          searchString,
        headers: {
          'X-AMIV-API-TOKEN': 'quaestor',
          Accept: 'application/json',
        },
      })
      .then(function(result) {
        Transaction.items = result.items;
        Transaction.meta = result.meta;
      });
  },

  fetchId: function(id) {
    return m
      .request({
        method: 'GET',
        url: api.address() + '/Transaction/transaction/${id}',
        headers: {
          'X-AMIV-API-TOKEN': 'quaestor',
          Accept: 'application/json',
        },
      })
      .then(function(result) {
        return result;
      });
  },

  submit: function(data) {
    return m.request({
      method: 'POST',
      url: api.address() + '/Transaction/transaction',
      data: data,
      headers: {
        'X-AMIV-API-TOKEN': 'quaestor',
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    });
  },
};

module.exports = Transaction;
