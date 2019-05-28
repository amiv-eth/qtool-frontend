import m from 'mithril';
import { Card } from 'polythene-mithril';
import UserController from '../controllers/userController';
import { i18n } from '../models/language';

export default class Profile {
  constructor() {
    this.user = { name: 'dude', role: 'roledude', amiv_mail: 'dudemail', nethz: 'dudenethz' };
    this.userController = new UserController();
  }

  async oninit() {
    // this.user = await this.userController.getUser();
    // m.redraw();
  }

  view() {
    return m(
      'div.profile-container',
      m(Card, {
        className: 'info-container',
        content: () => [
          m('div.user', [m('b', this.user.name), m('div.email', this.user.amiv_mail)]),
          m('div.amiv', [
            m('div', m('b', i18n(`membership.${this.user.role}`))),
            m('div.nethz', this.user.nethz),
          ]),
        ],
      })
    );
  }
}
