import m from 'mithril';
import Home from '../views/home';
import BelegFormularView from '../beleg/belegFormView';
import TransactionTableView from '../transaction/transactionTableView';

export default [
  {
    name: 'Home',
    path: '/',
    oncreate: m.route.link,
    view: Home,
  },
  {
    name: 'Belegformular',
    path: '/belegformular',
    oncreate: m.route.link,
    view: BelegFormularView,
  },
  {
    name: 'Testliste',
    path: '/testliste',
    oncreate: m.route.link,
    view: TransactionTableView,
  },
  {
    name: 'Kostenstellen',
    path: '/kst',
    oncreate: m.route.link,
    view: Home,
    submenu: [
      {
        name: 'KST-Auswertung',
        path: '/kst/eval',
        onupdate: m.route.link,
        view: Home,
      },
      {
        name: 'Prognose',
        path: '/kst/forecast',
        onupdate: m.route.link,
        view: Home,
      },
    ],
  },
];
