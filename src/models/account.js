const m = require('mithril');
const api = require('./api_config');

const Account = {
  items: [],
  fetch() {
    return m
      .request({
        method: 'GET',
        url: `${api.address()}/utility/account`,
        headers: {
          'X-AMIV-API-TOKEN': 'quaestor',
          Accept: 'application/json',
        },
      })
      .then(result => {
        Account.items = result.items;
      });
  },
};

module.exports = Account;
