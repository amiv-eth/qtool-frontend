import m from 'mithril';
import { APISession } from '../auth';

export default class Main {
  /**
   * Home-Page of Website
   * @returns {{dom, domSize, instance, children, _state, skip, tag, text, state, key, events, attrs}}
   */
  static view() {
    console.log(APISession);
    return m('h1', 'Welcome to qtool!');
  }
}
