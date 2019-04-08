import m from 'mithril';

const mainNavigation = [
  {
    name: 'Home',
    url: '/',
    oncreate: m.route.link,
  },
  {
    name: 'Belegformular',
    url: '/belegformular',
    oncreate: m.route.link,
  },
  {
    name: 'Belegliste',
    url: '/belegliste',
    oncreate: m.route.link,
  },
  {
    name: 'Transactionliste',
    url: 'transactionliste',
    oncreate: m.route.link,
  },
  {
    name: 'Testliste',
    url: 'testliste',
    oncreate: m.route.link,
  },
];

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
      mainNavigation.map((item, index) =>
        m(
          'li',
          {
            class: mainNavigation.selectedIndex === index ? 'active' : '',
          },
          [
            m(
              'a',
              {
                href: item.url,
              },
              item.name
            ),
            /* item.submenu
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
                            href: subitem.getLink(),
                            onupdate: subitem.onupdate,
                          },
                          [
                            i18n(subitem.label),
                            subitem.url
                              ? m(Icon, {
                                  class: 'external-link',
                                  svg: { content: m.trust(icons.externalLink) },
                                  size: 'small',
                                  alt: i18n('externalLink'),
                                })
                              : m(''),
                          ]
                        )
                      )
                    ),
                  ]),
                ]
              : m(''),  */
          ]
        )
      )
    );
  }
}
