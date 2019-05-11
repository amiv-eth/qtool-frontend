import m from 'mithril';
import i18next from 'i18next';
import german from '../../res/language/de';
import english from '../../res/language/en';

function setLanguageAttribute() {
  document.documentElement.setAttribute('lang', i18next.language);
}

function loadLanguage() {
  i18next
    // .use(LngDetector)
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
  document.documentElement.setAttribute('lang', currentLanguage);
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

export { i18n, changeLanguage, setLanguage, currentLanguage, loadLanguage, amountFormatter };
