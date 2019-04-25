import m from 'mithril';
import layout from './views/layout';
import Home from './views/home';
import BelegFormularView from './beleg/belegFormView';
import TransactionTableView from './transaction/transactionTableView';
import './styles/base.less';

function layoutWith(view) {
  return {
    view() {
      return m(layout, m(view));
    },
  };
}

m.route.prefix('');
m.route(document.body, '/', {
  '/': layoutWith(Home),
  '/belegformular': layoutWith(BelegFormularView),
  '/testliste': layoutWith(TransactionTableView),
});
