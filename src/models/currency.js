var m = require('mithril');
var api = require('./api_config');

var Currency = {
  items: [],
  fetch: function() {
    return m
      .request({
        method: 'GET',
        url: api.address() + '/utility/currency',
        headers: {
          'X-AMIV-API-TOKEN': 'quaestor',
          Accept: 'application/json',
        },
      })
      .then(function(result) {
        Currency.items = result.items;
      });
  },
};

module.exports = Currency;
