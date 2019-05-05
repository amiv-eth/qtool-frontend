import m from 'mithril';
import MainNavigation from '../models/mainNavigation';

export default class Header {
  view() {
    return m(
      'header',
      m('nav', [
        /* LOGO-Stuff
          m(
            'a.logo',
            { href: `/${currentLanguage()}/`, onupdate: m.route.link },
            m('img', { src: logos.amiv, alt: 'AMIV an der ETH' })
          ), */
        this.constructor._mainMenu,
      ])
    );
  }

  static get _mainMenu() {
    return m(
      'ul.mainmenu',
      MainNavigation.map((item, index) =>
        m(
          'li',
          {
            class: MainNavigation.selectedIndex === index ? 'active' : '',
          },
          [
            m(
              'a',
              {
                href: item.path,
              },
              item.name
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
                            href: subitem.path,
                            onupdate: subitem.onupdate,
                          },
                          subitem.name
                        )
                      )
                    ),
                  ]),
                ]
              : m(''),
          ]
        )
      )
    );
  }
}
