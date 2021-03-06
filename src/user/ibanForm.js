import m from 'mithril';
import { TextField, Button } from 'polythene-mithril';
import { isValid } from 'iban';
import { i18n } from '../models/language';
import { log } from '../utils';

export default class IbanForm {
  constructor() {
    log.debug(`Constructing new ibanForm`);

    this.iban = null;
    this.valid = true;
  }

  oninit(vnode) {
    this.userController = vnode.attrs.userController;
  }

  submit() {
    if (this.valid) {
      this.savedIban = this.iban;
      this.userController
        .set_iban(this.savedIban)
        .then(() => {
          this.iban = this.savedIban;
          m.redraw(); // TODO: view is not updated after submitting.
        })
        .catch();
    }
  }

  view() {
    const { iban } = this.userController;
    return m('div.rfid', [
      m(TextField, {
        label: i18n('profile.iban'),
        floatingLabel: true,
        error: i18n('profile.rfidError'),
        valid: this.valid,
        value: iban,
        events: {
          oninput: e => {
            this.iban = e.target.value;
            this.valid = isValid(this.iban) || this.iban === '';
          },
        },
      }),
      m(Button, {
        label: i18n('confirm'),
        events: {
          onclick: () => this.submit(),
        },
      }),
    ]);
  }
}
