import m from 'mithril';
import api from './api_config';

export default class BudgetItem {
  constructor() {
    this.items = [];
    this.pageContent = {};
    this.meta = {};
    this.page = 1;
  }

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
        this.pageContent[result.meta.page] = result.items;
        this.meta = result.meta;
      });
  }

  fetch() {
    this.fetchPage().then(() => {
      const requests = [];
      for (this.page = 2; this.page <= this.meta.last_page; this.page += 1) {
        requests.push(this.fetchPage());
      }
      Promise.all(requests).then(() => {
        for (let i = 1; i <= this.meta.last_page; i += 1) {
          this.items = this.items.concat(this.pageContent[i]);
        }
      });
    });
  }
}
