const m = require('mithril');

const Menu = {
  view() {
    return m(
      'nav.navbar.navbar-light.navbar-expand-lg bg-light  ',
      [m('a[href="#"].navbar-brand', "QTool"),
      m('ul.navbar-nav.mr-auto', [
        m('li.nav-item', m('a[href=/].nav-link', { oncreate: m.route.link }, 'Home')),
        //<li class="nav-item dropdown">
        //<a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
         // Dropdown
        //</a>
        //<div class="dropdown-menu" aria-labelledby="navbarDropdown">
          //<a class="dropdown-item" href="#">Action</a>
          //<a class="dropdown-item" href="#">Another action</a>
          //<div class="dropdown-divider"></div>
          //<a class="dropdown-item" href="#">Something else here</a>
        //</div>
      //</li>
        m('li.nav-item.dropdown', 
          m('a.nav-link.dropdown-toggle[href="#"]#navbarDropdown', {role: 'button', 'data-toggle': "dropdown", 'aria-haspopup': "true", 'aria-expanded': "false"},[
            "Dropdown",
            m('div.dropdown-menu', {ariaLabelledby: "navbarDropdown"}, [
              m('a[href=/belegformular].dropdown-item', { oncreate: m.route.link }, 'Belegformular'),
              m('a[href=/belegliste].dropdown-item', { oncreate: m.route.link }, 'Belegliste')
            ])
          ])
        ),
        m(
          'li.nav-item',
          m('a[href=/transactionliste].nav-link', { oncreate: m.route.link }, 'Transactionliste')
        ),
      ])]
    );
  },
};

module.exports = Menu;
