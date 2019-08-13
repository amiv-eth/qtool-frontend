import m from 'mithril';
import { Card } from 'polythene-mithril';
import { DropdownCard } from 'amiv-web-ui-components';
import UserController from '../controllers/userController';
import UserInfo from './userInfo';
import IbanForm from './ibanForm';
import { i18n } from '../models/language';
import { log } from '../utils';

const userController = new UserController();

export default class Profile {
  constructor() {
    log.debug(`Constructing new Profile`);
  }

  static async oninit() {
    await userController.init();
    m.redraw();
  }

  static view() {
    return m('div.profile-container', [
      m(Card, {
        className: 'info-container',
        content: m(UserInfo, { userController }),
      }),
      m('div.settings', [
        m(DropdownCard, {
          title: `IBAN: ${userController.user.iban || i18n('profile.rfidNotSet')}`,
          style: {
            margin: '16px 0',
            borderRadius: '4px',
          },
          content: m(IbanForm, { userController }),
        }),
      ]),
    ]);
  }
}
