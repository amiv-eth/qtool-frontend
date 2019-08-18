import m from 'mithril';
import { log } from '../utils';

export default class Main {
  /**
   * Home-Page of Website
   * @returns {{dom, domSize, instance, children, _state, skip, tag, text, state, key, events, attrs}}
   */
  constructor() {
    log.debug(`Constructing new main-page`);
  }

  static view() {
    return m('h1', 'Welcome to qtool!');
  }
}
