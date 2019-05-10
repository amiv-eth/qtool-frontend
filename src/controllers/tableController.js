import m from 'mithril';
import Stream from 'mithril/stream';
import { Dialog, Button } from 'polythene-mithril';
import generateTable from '../models/pdf_table';

/**
 * Generic Controller for a table, it provides Printing function and prepares
 */
export default class TableController {
  /**
   * Constructor of a new Table Controller, doing all important setups
   * @param endpoint a controller which supports the methods getItems() and getFullList()
   */
  constructor(endpoint) {
    this.stateCounter = Stream(0);
    this.endpoint = endpoint;
    // keep track of the total number of pages
    this.totalPages = null;
    this.selected = [];
    this.query = { sort: 'default', search: '' };
  }

  /**
   * Refresh the whole list
   */
  refresh() {
    this.stateCounter(this.stateCounter() + 1);
    m.redraw();
  }

  /**
   * Returns all the data used for the list tile in m.infinite
   * @param item function how the data should be processed
   * @returns {{item: *, maxPages: *, pageKey: (function(*): string), pageData: (function(*=): Promise<*>)}}
   */
  infiniteScrollParams(item) {
    return {
      item,
      pageData: pageNum => this.getPageData(pageNum),
      pageKey: pageNum => `${pageNum}-${this.stateCounter()}`,
      maxPages: this.totalPages ? this.totalPages : undefined,
    };
  }

  /**
   * Sets up the query and requests new pagedata
   * @param pageNum requested size
   * @returns {Promise<*>} Promise to the pagedata striped from the meta data
   */
  async getPageData(pageNum) {
    this.query.page = pageNum;
    const result = await this.endpoint.getItems(this.query);
    // Actualize the number of total pages
    this.totalPages = result.meta.last_page;
    return result.items;
  }

  /**
   * sets the search in the query accordingly and refreshes if needed
   * @param search: search string
   */
  setSearch(search) {
    // first request happens if the searchstring is longer than 3 characters
    if (search.length >= 3 || this.query.search !== '') {
      if (search.length >= 3) {
        this.query.search = search.split(' ');
      } else {
        this.query.search = '';
      }
      this.refresh();
    }
  }

  /**
   * Sets the current filter (not used yet)
   * @param filter
   */
  setFilter(filter) {
    this.filter = filter;
    this.refresh();
  }

  /**
   * Sets the sorting according to the given value. Reverses the sort if already selected.
   * @param sort
   */
  setSort(sort) {
    if (this.sort === `${sort}.asc`) {
      this.sort = `${sort}.desc`;
    } else {
      this.sort = `${sort}.asc`;
    }
    this.query.sort = this.sort;
    this.refresh();
  }

  /**
   * Adds the id to a list if not contained, removes it when it is already contained.
   * @param id id of the item to be remembered
   */
  select(id) {
    if (this.selected.includes(id)) {
      const index = this.selected.indexOf(id);
      if (index !== -1) this.selected.splice(index, 1);
    } else {
      this.selected.push(id);
    }
  }

  /**
   * returns the current sorting of the table
   * @returns {*} sorting 'direction'
   */
  getSort() {
    return this.endpoint.getSort(this.query);
  }

  /**
   * Clears the list of selected items
   */
  unselectAll() {
    this.selected = [];
  }

  /**
   * Prints all showed items to a pdf
   * @param header_info array of objects of key and title: key, is the key in the table of all the data, text: written title
   * @param title Title of the table
   * @param filename filename of the document
   * @returns {Promise<void>} Pomise to save a PDF
   */
  async printAll(header_info, title = 'Table', filename = false) {
    try {
      const result = await this.endpoint.getFullList(this.query);
      generateTable(
        header_info.map(entry => ({ header: entry.text, dataKey: entry.key })),
        result.items,
        filename,
        title
      );
    } catch {
      // Wenns schief geht
    }
  }

  /**
   * Prints all selected items to a pdf
   * @param header_info array of objects of key and title: key, is the key in the table of all the data, text: written title
   * @param title Title of the table
   * @param filename filename of the document
   * @returns {Promise<void>} Pomise to save a PDF
   */
  async printSelected(header_info, title = 'Table', filename = false) {
    if (this.selected.length > 0) {
      const result = await this.endpoint.getIds(this.selected);

      generateTable(
        header_info.map(entry => ({ header: entry.text, dataKey: entry.key })),
        result,
        filename,
        title
      );
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
