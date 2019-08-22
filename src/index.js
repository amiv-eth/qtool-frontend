import m from 'mithril';
import layout from './views/layout';
import './styles/base.less';
import { mainNavigation } from './models/mainNavigation';
import Home from './views/home';
import { loadLanguage } from './models/language';
import { OauthRedirect } from './authentication';
import { log } from './utils';
import 'polythene-css';
// import './style';
// import 'polythene-css/dist/polythene.css';

/**
 * Puts all the page-layout around a view
 * @param view
 * @returns {{view(): *}|{dom, domSize, instance, children, _state, skip, tag, text, state, key, events, attrs}}
 */
function layoutWith(view) {
  return {
    view() {
      return m(layout, m(view));
    },
  };
}

/**
 * Assembles the whole page
 * @type {{}}
 */
log.info(`Starting website`);
// Loading Language
loadLanguage();

const items = {};

mainNavigation.items.forEach(item => {
  if (item.path && item.view) {
    items[`/:language${item.path}`] = layoutWith(item.view);
  }
  if (item.submenu) {
    item.submenu.items.forEach(sub_item => {
      if (sub_item.path && sub_item.view) {
        items[`/:language${sub_item.path}`] = layoutWith(sub_item.view);
      }
    });
  }
});

items['/'] = layoutWith(Home);
items['/oauthcallback'] = OauthRedirect;

m.route.prefix('');
m.route(document.body, '/', items);
