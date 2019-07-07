import m from 'mithril';
import Home from '../views/home';
import BelegFormularView from '../beleg/belegFormView';
import TransactionTableView from '../transaction/transactionTableView';
import ForecastTableView from '../kst/budgetTableView';
import ConfirmedTableView from '../kst/confirmedTableView';
import TestInvoice from '../invoice/testInvoice';
import Profile from '../user/profile';
import { currentLanguage } from './language';

export default class Navigation {
  constructor(items) {
    this._items = items.map(item => {
      const newItem = Object.assign({}, item);
      if (newItem.url) {
        newItem.getLink = () => Navigation._getUrlLink(newItem.url);
      } else if (newItem.addLanguagePrefix) {
        newItem.getLink = addLanguagePrefix =>
          Navigation._getPathLink(newItem.path, addLanguagePrefix);
      } else {
        newItem.getLink = () => newItem.path;
      }
      return newItem;
    });
  }

  get items() {
    return this._items;
  }

  get selectedIndex() {
    return this._selectedIndex;
  }

  get selectedItem() {
    return this._selectedIndex >= 0 ? this._items[this._selectedIndex] : undefined;
  }

  map(callback) {
    return this._items.map(callback);
  }

  onupdate() {
    this._items.forEach(item => {
      if (item.submenu) {
        item.submenu.onupdate();
      }
    });
    this._selectedIndex = this._checkMenuItemSelection();
  }

  static _getPathLink(path, addLanguagePrefix = true) {
    if (addLanguagePrefix) {
      return `/${currentLanguage()}${path}`;
    }
    return path;
  }

  static _getUrlLink(url) {
    if (url instanceof Object) {
      if (url[currentLanguage()]) {
        return url[currentLanguage()];
      }

      let language;

      if (url.en) {
        language = 'en';
      } else {
        [language] = Object.keys(url);
      }
      return url[language];
    }

    return url;
  }

  _checkMenuItemSelection() {
    let selectedIndex;
    this._items.forEach((item, index) => {
      const link = item.getLink(false);
      if (
        (link.length <= 4 && m.route.get() === link) ||
        (link.length > 4 && m.route.get().includes(link)) ||
        (item.submenu && item.submenu.selectedIndex)
      ) {
        selectedIndex = index;
      }
    });
    this._selectedIndex = selectedIndex;
    return this._selectedIndex;
  }
}

/**
 * Collection of the main Navigation buttons
 * key: displayed key for the i18n, path: to the page, oncreate/onupdate: , view: the given View to the Element, submenu:
 * array of entries in the same style.
 */

export const mainNavigation = new Navigation([
  {
    path: '/',
    addLanguagePrefix: true,
    oncreate: m.route.link,
    view: Home,
  },
  {
    key: 'menu.receipt_form',
    path: '/belegformular',
    oncreate: m.route.link,
    addLanguagePrefix: true,
    view: BelegFormularView,
  },
  {
    key: 'menu.test_list',
    path: '/testliste',
    oncreate: m.route.link,
    addLanguagePrefix: true,
    view: TransactionTableView,
  },
  {
    key: 'menu.kst',
    path: '/kst',
    addLanguagePrefix: true,
    oncreate: m.route.link,
    view: Home,
    submenu: new Navigation([
      {
        key: 'menu.kst_eval',
        path: '/kst/eval',
        addLanguagePrefix: true,
        onupdate: m.route.link,
        view: ConfirmedTableView,
      },
      {
        key: 'menu.kst_fore',
        path: '/kst/forecast',
        addLanguagePrefix: true,
        onupdate: m.route.link,
        view: ForecastTableView,
      },
    ]),
  },
  {
    key: 'menu.invoice',
    path: '/invoice',
    addLanguagePrefix: true,
    oncreate: m.route.link,
    view: TestInvoice,
  },
  {
    path: '/profile',
    addLanguagePrefix: true,
    oncreate: m.route.link,
    view: Profile,
  },
]);
