import m from 'mithril';
import TableView from './tableView';

/**
 * Base of a TableView which can be inherited
 * It takes an array of all inputfields and one of all buttons and generates all the different tables
 * for view and controller.
 */
export default class BaseTable {
  constructor(Controller, table_setup, buttons = false) {
    this.ctrl = new Controller();
    this.table_setup = table_setup;
    this.buttons = buttons;

    this.title_arr = []; // Array for the table
    this.keys_arr = []; // Array for all keys used in the view
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
        text: pos.title,
        style: pos.style,
        conditional_background: item =>
          pos.conditional_background ? pos.conditional_background(item) : false,
        key: pos.key,
      });
      this.keys_arr.push(pos.key);
      this.print_table_info.push({
        text: pos.title,
        key: pos.key,
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
      row.push(m('div', { style: pos.style }, data[pos.key]));
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
      keys: this.keys_arr,
      tileContent: data => this.getItemData(data),
      titles: this.title_arr,
      sortable: this.sortable,
      searchable: this.searchable,
      selectable: this.selectable,
      buttons: this.buttons,
    });
  }
}
