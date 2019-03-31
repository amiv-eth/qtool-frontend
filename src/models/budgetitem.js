const m = require('mithril');
const api = require('./api_config');

const BudgetItem = {
  items: [],
  pageContent: {},
  meta: {},
  page: 1,
  fetchPage() {
    return m
      .request({
        method: 'GET',
        url: `${api.address()}/Budget/item?sort=budgetitem_code.asc&page=${BudgetItem.page}`,
        headers: {
          'X-AMIV-API-TOKEN': 'quaestor',
          Accept: 'application/json',
        },
      })
      .then(result => {
        BudgetItem.pageContent[result.meta.page] = result.items;
        BudgetItem.meta = result.meta;
      });
  },
  fetch() {
    BudgetItem.fetchPage().then(() => {
      const requests = [];
      for (
        BudgetItem.page = 2;
        BudgetItem.page <= BudgetItem.meta.last_page;
        BudgetItem.page += 1
      ) {
        requests.push(BudgetItem.fetchPage());
      }
      Promise.all(requests).then(() => {
        for (let i = 1; i <= BudgetItem.meta.last_page; i += 1) {
          BudgetItem.items = BudgetItem.items.concat(BudgetItem.pageContent[i]);
        }
      });
    });
  },
};

module.exports = BudgetItem;
