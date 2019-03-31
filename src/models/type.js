const m = require('mithril');
const api = require('./api_config');

const Type = {
  items: [],
  fetch() {
    return m
      .request({
        method: 'GET',
        url: `${api.address()}/utility/type`,
        headers: {
          'X-AMIV-API-TOKEN': 'quaestor',
          Accept: 'application/json',
        },
      })
      .then(result => {
        Type.items = result.items;
      });
  },
};

module.exports = Type;
