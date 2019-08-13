import m from 'mithril';
import i18next from 'i18next';
import LngDetector from 'i18next-browser-languagedetector';
import german from '../../res/language/de.json';
import english from '../../res/language/en.json';
import { log } from '../utils';

log.debug(`Initializing language`);

function setLanguageAttribute() {
  document.documentElement.setAttribute('lang', i18next.language);
}

function loadLanguage() {
  i18next
    .use(LngDetector)
    .init({
      fallbackLng: 'de',
      whitelist: ['en', 'de'],
      nsSeparator: false,
      initImmediate: false,
      detection: {
        order: ['path', 'cookie', 'localStorage', 'navigator', 'htmlTag'],
        lookupCookie: 'language',
        lookupLocalStorage: 'language',
        lookupFromPathIndex: 0,
      },
      resources: {
        en: {
          translation: english,
        },
        de: {
          translation: german,
        },
      },
    })
    .then(() => {
      setLanguageAttribute();
    });
}

/**
 * Get the current language.
 * @return string language code
 */
function currentLanguage() {
  if (!i18next.language) {
    loadLanguage();
  }
  return i18next.language;
}

/**
 * Change the language of the current page.
 * @param {string} language two-letter code for the desired language.
 */
function changeLanguage(language) {
  i18next.changeLanguage(language);
  setLanguageAttribute();
  m.route.set(`/${currentLanguage()}${m.route.get().substring(3)}`);
}

/**
 * Set the language without changing and reloading the page.
 * @param language
 * @returns {boolean} true if a change was done
 */
function setLanguage(language) {
  const change = currentLanguage() !== language;
  i18next.changeLanguage(language);
  return change;
}

/**
 * Get a translation based on the configured language.
 * @return translated string
 */
function i18n(key, values = null) {
  if (values) {
    return i18next.t(key, values);
  }
  return i18next.t(key);
}

/**
 * Formats given amount to the convention
 * @param amount
 * @returns {*}
 */
function amountFormatter(amount) {
  if (amount === undefined || amount === null) {
    return amount;
  }
  const fixed = amount.toFixed(2);
  return fixed === 0 ? '0.00' : fixed;
}

/**
 * Formats a JS-Date object to a usable String
 * @param date JS-Date
 * @returns {string} Date as strin in the current language
 */
function dateTextFormatter(date) {
  return `${date.getDate()}. ${i18n(`months.${date.getMonth() + 1}`)} ${date.getFullYear()}`;
}

export {
  i18n,
  changeLanguage,
  setLanguage,
  currentLanguage,
  loadLanguage,
  amountFormatter,
  dateTextFormatter,
};
