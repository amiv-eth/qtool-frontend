import m from 'mithril';
import { TextField, Button } from 'polythene-mithril';
import { i18n } from '../models/language';

export default class IbanForm {
  oninit(vnode) {
    this.userController = vnode.attrs.userController;
  }

  view() {
    const { iban } = this.userController;
    console.log(iban);
    return m('div.rfid', [
      m(TextField, {
        label: i18n('profile.rfid'),
        floatingLabel: true,
        error: i18n('profile.rfidError'),
        valid: this.valid,
        value: iban,
        events: {
          oninput: e => {
            this.rfid = e.target.value;
            this.valid = /^\d{6}$/g.test(this.rfid) || this.rfid === '';
          },
        },
      }),
      m(Button, { label: i18n('confirm') }),
    ]);
  }
}
