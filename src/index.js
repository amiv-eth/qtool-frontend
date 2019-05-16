import m from 'mithril';
import layout from './views/layout';
import './styles/base.less';
import 'polythene-css-dialog';
import MainNavigation from './models/mainNavigation';
import { loadLanguage } from './models/language';
import { OauthRedirect } from './auth';

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
// Loading Language
loadLanguage();

const items = {};
MainNavigation.forEach(item => {
  if (item.path && item.name && item.view) {
    items[item.path] = layoutWith(item.view);
  }
  if (item.submenu) {
    item.submenu.forEach(sub_item => {
      if (sub_item.path && sub_item.name && sub_item.view) {
        items[sub_item.path] = layoutWith(sub_item.view);
      }
    });
  }
});

items['/oauthcallback'] = OauthRedirect;

m.route.prefix('');
m.route(document.body, '/', items);
