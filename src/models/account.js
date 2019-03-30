var m = require('mithril');
var api = require('./api_config');

var Account = {
  items: [],
  fetch: function() {
    return m
      .request({
        method: 'GET',
        url: api.address() + '/utility/account',
        headers: {
          'X-AMIV-API-TOKEN': 'quaestor',
          Accept: 'application/json',
        },
      })
      .then(function(result) {
        Account.items = result.items;
      });
  },
};

module.exports = Account;
