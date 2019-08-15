import { log } from './utils';

// Get something stored at key from local storage
export function get(key) {
  log.info(`reading key: ${key} to loacal storage`);
  const longStorage = window.sessionStorage.getItem(`glob-${key}`);
  if (!longStorage || longStorage === '') {
    // If longStorage is empty, look in short storage
    return window.localStorage.getItem(`glob-${key}`);
  }
  return longStorage;
}

/**
 * Remove variable in localStorage
 * @param {string} cname
 */
export function remove(key) {
  log.info(`removing key: ${key} to loacal storage`);
  if (window.sessionStorage.getItem(`glob-${key}`)) {
    window.sessionStorage.removeItem(`glob-${key}`);
  }
  if (window.localStorage.getItem(`glob-${key}`)) {
    window.localStorage.removeItem(`glob-${key}`);
  }
}

/**
 * Save and get into localStorage
 * @constructor
 * @param {string} key
 * @param {string} value
 * @param shortSession
 */
export function set(key, value, shortSession = false) {
  log.info(`setting key: ${key} to ${value} in loacal storage`);
  if (shortSession) {
    window.sessionStorage.setItem(`glob-${key}`, value);
  } else {
    window.localStorage.setItem(`glob-${key}`, value);
  }
}
