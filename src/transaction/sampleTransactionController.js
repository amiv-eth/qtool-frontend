import m from 'mithril';
import Stream from 'mithril/stream';
import Transaction from '../models/transaction';
import generateTable from '../models/pdf_table';

/** Controller for a list of data from a python-eve REST-API. */
export default class SampleTransactionController {
  /**
   * @param {function} get   function(query, search),
   *   performs a get request to some resource with the given query and search. Search is a
   *   simple string that has to be defined by the get-function to perform any kind of
   *   string-matching that makes sense for the represented data
   * @param {object} query   any initial query
   */
  constructor(/* get, query = {} */) {
    this.stateCounter = Stream(0);
    this.transaction = new Transaction();
    // keep track of the total number of pages
    this.totalPages = null;
    this.search = '';
    this.sort = this.transaction.sort;
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

  /**
   * Return the data of a specific page.
   *
   * @param      {int}   pageNum - The page number
   * @return     {Promise}  The page data as a list.
   */
  getPageData(pageNum) {
    this.transaction.page = pageNum;
    return this.transaction.fetch().then(() => {
      this.totalPages = this.transaction.meta.last_page;
      return this.transaction.items;
    });
  }

  setSearch(search) {
    this.search = search;
    if (this.transaction.setGeneralSearch(this.search)) {
      this.refresh();
    }
  }

  select(id) {
    if (this.selected.includes(id)) {
      const index = this.selected.indexOf(id);
      if (index !== -1) this.selected.splice(index, 1);
    } else {
      this.selected.push(id);
    }
    console.log(this.selected);
  }

  /**
   *  Set Filters applied to the query.
   *  Filters a part of the 'where'-query that can be set independently from the standard where
   *  query. The main usecase are filters on the list-items that can be quickly turned on and
   *  off without affecting the general query settings.
   * @param {Object} filters - filters object, in the python-eve format of a where-query.
   */
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
    this.transaction.setSort(this.sort);
    this.refresh();
  }

  print_all(header_info) {
    const title = 'All Transactions';
    const filename = 'all_transactions.pdf';
    this.transaction.page = 1;
    this.transaction.fetch().then(() => {
      generateTable(
        header_info.map(entry => ({ header: entry.text, dataKey: entry.key })),
        this.transaction.items,
        filename,
        title
      );
    });
  }
}
