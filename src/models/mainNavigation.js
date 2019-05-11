import m from 'mithril';
import Home from '../views/home';
import BelegFormularView from '../beleg/belegFormView';
import TransactionTableView from '../transaction/transactionTableView';
import ForecastTableView from '../kst/forecastTableView';
import ConfirmedTableView from '../kst/confirmedTableView';
import TestInvoice from '../invoice/testInvoice';
/**
 * Collection of the main Navigation buttons
 * name: displayed name, path: to the page, oncreate/onupdate: , view: the given View to the Element, submenu:
 * array of entries in the same style.
 */
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
        view: ConfirmedTableView,
      },
      {
        name: 'Prognose',
        path: '/kst/forecast',
        onupdate: m.route.link,
        view: ForecastTableView,
      },
    ],
  },
  {
    name: 'Invoice',
    path: '/invoice',
    oncreate: m.route.link,
    view: TestInvoice,
  },
];
