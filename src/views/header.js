import m from 'mithril';
import MainNavigation from '../models/mainNavigation';
import logos from '../../res/logos';

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
