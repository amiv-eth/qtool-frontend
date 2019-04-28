import m from 'mithril';
import TableView from './tableView';

/* Table of all studydocuments */
export default class TransactionTableView {
  constructor(Controller, table_setup) {
    this.ctrl = new Controller();
    this.table_setup = table_setup;

    this.title_arr = [];
    this.keys_arr = [];
    this.print_table_info = [];

    this.table_setup.forEach(pos => {
      this.title_arr.push({
        text: pos.title,
        style: pos.style,
        key: pos.key,
      });
      this.keys_arr.push(pos.key);
      this.print_table_info.push({
        text: pos.title,
        key: pos.key,
      });
    });
  }

  getItemData(data) {
    const row = [];
    this.table_setup.forEach(pos => {
      row.push(m('div', { style: pos.style }, data[pos.key]));
    });
    return row;
  }

  view() {
    return m(TableView, {
      controller: this.ctrl,
      keys: this.keys_arr,
      tileContent: TransactionTableView.getItemData,
      titles: this.title_arr,
      tools: [
        {
          label: 'Print all shown',
          onclick: () => {
            this.ctrl.printAll(this.print_table_info);
          },
        },
        {
          label: 'Print selected',
          onclick: () => {
            this.ctrl.printSelected(this.print_table_info);
          },
        },
        {
          label: 'Unselect all',
          onclick: () => {
            this.ctrl.unselectAll();
          },
        },
      ],
    });
  }
}
