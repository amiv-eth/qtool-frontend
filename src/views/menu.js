var m = require('mithril');

var Menu = {
  view: function() {
    return m(
      'nav.navbar.navbar-light.navbar-expand-lg',
      m('ul.navbar-nav.mr-auto', [
        m('li.nav-item', m('a[href=/].nav-link', { oncreate: m.route.link }, 'Home')),
        m(
          'li.nav-item',
          m('a[href=/belegformular].nav-link', { oncreate: m.route.link }, 'Belegformular')
        ),
        m(
          'li.nav-item',
          m('a[href=/belegliste].nav-link', { oncreate: m.route.link }, 'Belegliste')
        ),
        m(
          'li.nav-item',
          m('a[href=/transactionliste].nav-link', { oncreate: m.route.link }, 'Transactionliste')
        ),
      ])
    );
  },
};

module.exports = Menu;
