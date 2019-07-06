import m from 'mithril';
import { Card } from 'polythene-mithril';
import UserController from '../controllers/userController';
import UserInfo from './userInfo';
import IbanForm from './ibanForm';

const userController = new UserController();

export default class Profile {
  constructor() {
    //this.user = { name: 'dude', role: 'roledude', amiv_mail: 'dudemail', nethz: 'dudenethz' ,iban: '98765tzuhn'};
  }

  static oninit() {
    userController.init();
  }

  static view() {
    return m('div.profile-container', [
      m(Card, {
        className: 'info-container',
        content: m(UserInfo, { userController }),
      }),
      m('div.settings', [
        m(Card, {
          className: 'iban',
          content: m(IbanForm, { userController }),
        }),
      ]),
    ]);
  }
}
