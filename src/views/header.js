import m from 'mithril';
import { Button } from 'polythene-mithril';
import { mainNavigation } from '../models/mainNavigation';
import logos from '../../res/images/logos';
import { deleteSession } from '../auth';
import { i18n, currentLanguage, changeLanguage } from '../models/language';

/**
 * Header of the Website
 */
export default class Header {
  view() {
    return m(
      'header',
      m('nav', [
        m(
          'a.logo',
          { href: `/`, onupdate: m.route.link },
          m('img', { src: logos.amiv, alt: 'AMIV an der ETH' })
        ),
        this.constructor._mainMenu,
        this.constructor._profileMenu,

        m('div.language-selector', [
          m(Button, {
            label: 'en',
            className: 'bordered-button',
            border: currentLanguage() === 'en',
            inactive: currentLanguage() === 'en',
            tone: 'dark',
            events: { onclick: () => changeLanguage('en') },
          }),
          m(Button, {
            label: 'de',
            className: 'bordered-button',
            border: currentLanguage() === 'de',
            inactive: currentLanguage() === 'de',
            tone: 'dark',
            events: { onclick: () => changeLanguage('de') },
          }),
        ]),

      ])
    );
  }

  /**
   * assembles the menu from the Navigation data
   * @returns {{dom, domSize, instance, children, _state, skip, tag, text, state, key, events, attrs}}
   * @private
   */
  static get _mainMenu() {
    return m(
      'ul.mainmenu',
      mainNavigation.map((item, index) =>
        item.key
          ? m(
              'li',
              {
                class: mainNavigation.selectedIndex === index ? 'active' : '',
              },
              [
                m(
                  'a',
                  {
                    href: `${item.getLink()}`,
                  },
                  i18n(item.key)
                ),
                item.submenu
                  ? [
                      m('div.phantomElement'),
                      m('ul.submenu', [
                        item.submenu.map((subitem, subindex) =>
                          m(
                            'li',
                            { class: item.submenu.selectedIndex === subindex ? 'active' : '' },
                            m(
                              'a',
                              {
                                href: `${subitem.getLink()}`,
                                onupdate: subitem.onupdate,
                              },
                              i18n(subitem.key)
                            )
                          )
                        ),
                      ]),
                    ]
                  : m(''),
              ]
            )
          : ''
      )
    );
  }

  static get _profileMenu() {
    return m(
      'ul.profile',
      [
        m(Button, {
          className: 'blue-button',
          border: true,
          label: 'logout',
          events: {
            onclick: () => {
              deleteSession();
            },
          },
        }),
      ]
      /* isLoggedIn()
        ? [
          m(
            'li',
            {
              class: m.route.get().includes(`/profile`) ? 'active' : '',
            },
            m(
              'a',
              { href: `/${currentLanguage()}/profile`, onupdate: m.route.link },
              i18n('mainMenu.profile')
            )
          ),
          m(
            'li',
            m(
              'a',
              { href: `/${currentLanguage()}/logout`, onupdate: m.route.link },
              i18n('mainMenu.logout')
            )
          ),
        ]
        : [
          m(
            'li',
            { class: 'not-logged-in' },
            m(
              'a',
              {
                href: `/${currentLanguage()}/profile`,
                onclick: e => {
                  login(`/${currentLanguage()}/profile`);
                  e.preventDefault();
                },
              },
              m('span', i18n('mainMenu.login'))
            )
          ),
        ] */
    );
  }
}
