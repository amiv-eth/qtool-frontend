// import m from 'mithril';
import Stream from 'mithril/stream';
import Transaction from '../models/transaction';
import jsPDF from 'jspdf';
import 'jspdf-autotable';

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
    this.refresh();
    /* this.debouncedSearch = debounce((search) => {
      this.setSearch(search);
      this.refresh();
      m.redraw();
    }, 100); */
    // keep track of the total number of pages
    this.totalPages = null;
  }

  /** Refresh the whole list */
  refresh() {
    this.stateCounter(this.stateCounter() + 1);
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
    // for some reason this is called before the object is instantiated.
    // check this and return nothing
    return Transaction.fetchInfinite(pageNum).then(result => {
      this.totalPages = result.meta.last_page;
      return result.items;
    });
    /* return Transaction.fetch()
    .then(() =>{
        console.log(Transaction.items);
        return Transaction.items;});
        */
  }

  setSearch(search) {
    this.search = search;
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

  setQuery(query) {
    this.query = Object.assign({}, query);
    this.refresh();
  }

  setSort(sort) {
    this.sort = sort;
    this.refresh();
  }

  print_all(header_info){
    const title = 'All Transactions'
    const filename = 'all_transactions.pdf'
    Transaction.fetchInfinite(1).then(result => {
      var doc = new jsPDF({
        orientation: 'landscape',
      });

      doc.text(title, 14, 20)

      doc.autoTable({
        startY: 22,
        body: result.items,
        columns: header_info.map((entry) => { return {header: entry.text, dataKey: entry.key}}),
        tableLineColor: 0, //Outline
        tableLineWidth: 1,
        styles: {
            lineColor: 0,
            lineWidth: .3
        },
        headStyles: {
            fillColor: [232,70,43]
        },
        bodyStyles: {
            fillColor: 255,
        },
        alternateRowStyles: {
            fillColor: 255
        },
      });
      doc.save(filename);
    }); 
  }
}
