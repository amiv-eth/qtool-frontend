import m from 'mithril';
import Stream from 'mithril/stream';
import generateTable from '../models/pdf_table';

export default class TableController {
  constructor(Endpoint) {
    this.stateCounter = Stream(0);
    this.endpoint = new Endpoint();
    // keep track of the total number of pages
    this.totalPages = null;
    this.search = '';
    this.sort = this.endpoint.sort;
    this.selected = [];
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
    this.endpoint.page = pageNum;
    return this.endpoint.fetch().then(() => {
      this.totalPages = this.endpoint.meta.last_page;
      return this.endpoint.items;
    });
  }

  setSearch(search) {
    this.search = search;
    if (this.endpoint.setGeneralSearch(this.search)) {
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
    this.endpoint.setSort(this.sort);
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

  unselectAll() {
    this.selected = [];
  }

  getFullList() {
    return new Promise(resolve => {
      this.getPageData(1).then(firstPage => {
        const pages = { 1: firstPage };
        const { totalPages } = this;

        if (totalPages <= 1) {
          resolve(firstPage);
        } else {
          // now fetch all the missing pages
          Array.from(new Array(totalPages - 1), (x, i) => i + 2).forEach(pageNum => {
            this.getPageData(pageNum).then(newPage => {
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

  getSelected() {
    return new Promise(resolve => {
      this.endpoint.constructor.fetchId(this.selected[0]).then(firstSelected => {
        const selectedList = { 1: firstSelected };

        if (this.selected.length <= 1) {
          resolve([firstSelected]);
        } else {
          // now fetch all the missing pages
          Array.from(new Array(this.selected.length - 1), (x, i) => i + 2).forEach(id => {
            this.endpoint.constructor.fetchId(this.selected[id - 1]).then(newId => {
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
      const result = await this.getFullList();
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
    if (this.selected.length <= 0) {
      window.alert('Please selecte at least one Entry');
    } else {
      this.getSelected().then(result => {
        generateTable(
          header_info.map(entry => ({ header: entry.text, dataKey: entry.key })),
          result,
          filename,
          title
        );
      });
    }
  }
}
