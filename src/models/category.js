const m = require('mithril');
const api = require('./api_config');

const Category = {
  items: [],
  fetch() {
    return m
      .request({
        method: 'GET',
        url: `${api.address()}/utility/category`,
        headers: {
          'X-AMIV-API-TOKEN': 'quaestor',
          Accept: 'application/json',
        },
      })
      .then(result => {
        Category.items = result.items;
      });
  },
};

module.exports = Category;
