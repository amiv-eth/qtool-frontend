import m from 'mithril';
import Stream from 'mithril/stream';
import { Dialog, Button } from 'polythene-mithril';
import generateTable from '../models/pdf_table';

export default class TableController {
  constructor(endpoint) {
    this.stateCounter = Stream(0);
    this.endpoint = endpoint;
    // keep track of the total number of pages
    this.totalPages = null;
    this.selected = [];
    this.query = { sort: 'default', search: '' };
  }

  /** Refresh the whole list */
  refresh() {
    this.stateCounter(this.stateCounter() + 1);
    m.redraw();
  }

  infiniteScrollParams(item) {
    return {
      item,
      pageData: pageNum => this.getPageData(pageNum), // pageNum => this.getPageData(pageNum),
      pageKey: pageNum => `${pageNum}-${this.stateCounter()}`,
      maxPages: this.totalPages ? this.totalPages : undefined,
    };
  }

  getPageData(pageNum) {
    this.query.page = pageNum;
    return this.endpoint.get(this.query).then(result => {
      this.totalPages = result.meta.last_page;
      return result.items;
    });
  }

  setSearch(search) {
    // TODO: Splitting spaces for search patterns
    if (search.length >= 3 || this.query.search !== '') {
      if (search.length >= 3) {
        this.query.search = search.split(' ');
      } else {
        this.query.search = '';
      }
      this.refresh();
    }
  }

  setFilter(filter) {
    this.filter = filter;
    this.refresh();
  }

  setSort(sort) {
    if (this.sort === `${sort}.asc`) {
      this.sort = `${sort}.desc`;
    } else {
      this.sort = `${sort}.asc`;
    }
    this.query.sort = this.sort;
    this.refresh();
  }

  select(id) {
    if (this.selected.includes(id)) {
      const index = this.selected.indexOf(id);
      if (index !== -1) this.selected.splice(index, 1);
    } else {
      this.selected.push(id);
    }
  }

  getSort() {
    return this.endpoint.getSort(this.query);
  }

  unselectAll() {
    this.selected = [];
  }

  getSelected() {
    return new Promise(resolve => {
      this.endpoint.getId(this.selected[0]).then(firstSelected => {
        const selectedList = { 1: firstSelected };

        if (this.selected.length <= 1) {
          resolve([firstSelected]);
        } else {
          // now fetch all the missing pages
          Array.from(new Array(this.selected.length - 1), (x, i) => i + 2).forEach(id => {
            this.endpoint.getId(this.selected[id - 1]).then(newId => {
              selectedList[id] = newId;
              // look if all pages were collected
              const missingId = Array.from(new Array(this.selected.length), (x, i) => i + 1).filter(
                i => !(i in selectedList)
              );
              if (missingId.length === 0) {
                resolve(
                  [].concat(
                    ...Object.keys(selectedList)
                      .sort()
                      .map(key => selectedList[key])
                  )
                );
              }
            });
          });
        }
      });
    });
  }

  async printAll(header_info, title = 'Table', filename = 'table.pdf') {
    try {
      const result = await this.endpoint.getFullList(this.query);
      generateTable(
        header_info.map(entry => ({ header: entry.text, dataKey: entry.key })),
        result,
        filename,
        title
      );
    } catch {
      // Wenns schief geht
    }
  }

  printSelected(header_info, title = 'Table', filename = 'table.pdf') {
    this.endpoint.page = 1;
    if (this.selected.length > 0) {
      this.getSelected().then(result => {
        generateTable(
          header_info.map(entry => ({ header: entry.text, dataKey: entry.key })),
          result,
          filename,
          title
        );
      });
    } else {
      Dialog.show({
        body: 'Please select at least one Item',
        backdrop: true,
        modal: true,
        footerButtons: [
          m(Button, {
            label: 'OK',
            events: { onclick: () => Dialog.hide() },
          }),
        ],
      });
    }
  }
}
