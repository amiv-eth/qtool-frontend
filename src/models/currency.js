const m = require('mithril');
const api = require('./api_config');

const Currency = {
  items: [],
  fetch() {
    return m
      .request({
        method: 'GET',
        url: `${api.address()}/utility/currency`,
        headers: {
          'X-AMIV-API-TOKEN': 'quaestor',
          Accept: 'application/json',
        },
      })
      .then(result => {
        Currency.items = result.items;
      });
  },
};

module.exports = Currency;
