import m from 'mithril';
import api from '../network_config';

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

  getFullList() {
    this.fetchPage().then(() => {
      const requests = [];
      for (this.page = 2; this.page <= this.meta.last_page; this.page += 1) {
        requests.push(this.fetchPage());
      }
      Promise.all(requests).then(() => {
        for (let i = 1; i <= this.meta.last_page; i += 1) {
          this.items = this.items.concat(this.pageContent[i]);
        }
        console.log(this.items);
      });
    });
  }

  fetch() {
    this.page = 1;
    this.meta = {};
    this.items = [];
    return new Promise(resolve => {
      this.fetchPage().then(firstPage => {
        const pages = { 1: firstPage };
        const totalPages = this.meta.last_page;

        if (totalPages <= 1) {
          resolve(firstPage);
        } else {
          // now fetch all the missing pages
          Array.from(new Array(totalPages - 1), (x, i) => i + 2).forEach(pageNum => {
            this.page = pageNum;
            this.fetchPage().then(newPage => {
              pages[pageNum] = newPage;
              // look if all pages were collected
              const missingPages = Array.from(new Array(totalPages), (x, i) => i + 1).filter(
                i => !(i in pages)
              );
              if (missingPages.length === 0) {
                resolve(
                  [].concat(
                    ...Object.keys(pages)
                      .sort()
                      .map(key => pages[key])
                  )
                );
              }
            });
          });
        }
      });
    });
  }
}
