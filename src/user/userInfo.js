import m from 'mithril';
import { i18n } from '../models/language';

export default class UserInfo {
  oninit(vnode) {
    this.userController = vnode.attrs.userController;
  }

  view() {
    const { user } = this.userController;
    return [
      m('div.user', [
        m('b', user.name),
        m(
          'div.nethz',
          m('a', { href: `mailto:${user.nethz}@student.ethz.ch` }, `${user.nethz}@student.ethz.ch`)
        ),
      ]),
      m('div.amiv', [
        m('div', m('b', i18n(`position.${user.role ? user.role : 'default'}`))),
        m('div.email', user.amiv_mail ? user.amiv_mail : ''),
      ]),
    ];
  }
}
