import m from 'mithril';
import TableView from './tableView';
import { getNested, log } from '../utils';

/**
 * Base of a TableView which can be inherited
 * It takes an array of all inputfields and one of all buttons and generates all the different tables
 * for view and controller.
 */
export default class BaseTable {
  constructor(Controller, table_setup, buttons = false) {
    log.debug(`Constructing new BaseTable with table setup: ${table_setup}`);

    this.ctrl = new Controller();
    this.table_setup = table_setup;
    this.buttons = buttons;

    this.title_arr = []; // Array for the table
    this.print_table_info = []; // Array used by the genereatePDF function

    this.selectable = false; // List items are selectable
    this.sortable = false; // List is sortable
    this.searchable = false; // List is searchable
  }

  /**
   * Setting up all arrays
   */
  oninit() {
    this.table_setup.forEach(pos => {
      this.title_arr.push({
        title_key: pos.title_key,
        style: pos.style,
        conditional_tags: item => (pos.conditional_tags ? pos.conditional_tags(item) : false),
        formatting: item => (pos.formatting ? pos.formatting(item) : item),
        key: pos.key,
        text_keys: pos.text_keys,
        sort: pos.sort ? pos.sort : pos.key, // TODO: temporary till API ready
      });
      this.print_table_info.push({
        title_key: pos.title_key,
        key: pos.key,
        text_keys: pos.text_keys,
      });
    });
  }

  /**
   * Returns a array of all items of the tabletile
   * @param data Object contianing all the data from a request needed to build the tabletile
   * @returns {Array} array of the table tile
   */
  getItemData(data) {
    const row = [];
    this.title_arr.forEach(pos => {
      // Access nested data
      // TODO way to inefficient get Nested is called for every row of the table sevetral times
      const nested_data = getNested(data, pos.key);
      const nested_texts = pos.text_keys ? pos.text_keys.map(key => getNested(data, key)) : null;
      // Assemble the pre_text
      let pre_text = '';
      if (nested_texts) {
        nested_texts.forEach(text => {
          if (text) {
            pre_text += `${text} `;
          }
        });
      }
      if (nested_data !== undefined || nested_data !== null) {
        row.push(
          m(
            `div.tableItem.${pos.conditional_tags(data)}`,
            { style: pos.style },
            `${pre_text}${pos.formatting(nested_data)}`
          )
        );
      } else {
        row.push(
          m(`div.tableItem.${pos.conditional_tags(data)}`, { style: pos.style }, 'not defined')
        );
      }
    });
    return row;
  }

  /**
   * View Function
   * @returns {{dom, domSize, instance, children, _state, skip, tag, text, state, key, events, attrs}}
   */
  view() {
    return m(TableView, {
      controller: this.ctrl,
      tileContent: data => this.getItemData(data),
      titles: this.title_arr,
      sortable: this.sortable,
      searchable: this.searchable,
      selectable: this.selectable,
      buttons: this.buttons,
    });
  }
}
