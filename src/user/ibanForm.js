import m from 'mithril';
import { TextField, Button } from 'polythene-mithril';
import { isValid } from 'iban';
import { i18n } from '../models/language';

export default class IbanForm {
  oninit(vnode) {
    this.userController = vnode.attrs.userController;
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
      m(Button, { label: i18n('confirm') }),
    ]);
  }
}
