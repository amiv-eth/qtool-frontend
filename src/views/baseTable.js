import m from 'mithril';
import TableView from './tableView';

export default class BaseTable {
  constructor(Controller, table_setup) {
    this.ctrl = new Controller();
    this.table_setup = table_setup;

    this.title_arr = [];
    this.keys_arr = [];
    this.print_table_info = [];

    this.selectable = false;
    this.sortable = false;
    this.searchable = false;
  }

  oninit() {
    console.log('called');
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
    this.title_arr.forEach(pos => {
      row.push(m('div', { style: pos.style }, data[pos.key]));
    });
    return row;
  }

  view() {
    return m(TableView, {
      controller: this.ctrl,
      keys: this.keys_arr,
      tileContent: data => this.getItemData(data),
      titles: this.title_arr,
      sortable: this.sortable,
      searchable: this.searchable,
      selectable: this.selectable,
      buttons: [
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
