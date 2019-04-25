import m from 'mithril';
import { FormView, INPUT_TYPES } from '../views/formView';
import BelegFromController from './belegFormController';

/* Table of all studydocuments */
export default class BelegFromView {
  constructor() {
    this.ctrl = new BelegFromController();
  }

  view() {
    return m(FormView, {
      controller: this.ctrl,
      fields: [
        {
          label: 'Description',
          type: INPUT_TYPES.plain,
          key: 'description',
        },
      ],
      buttons: [
        {
          label: 'Confirm',
          onclick: () => {
            // this.ctrl.printAll(print_table_info);
            console.log('Yayy');
          },
        },
      ],
    });
  }
}
