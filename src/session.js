import m from 'mithril';
import getLogger from 'webpack-log';

const log = getLogger({ name: 'session logger', level: 'debug', timestamp: true });

export default class Session {
  /**
   * Generic Session handling all requests based on the axios-Session but more minimal
   * @param baseUrl url of the base session, specific resources will be added in the reqests
   * @param headers headers to be send along
   * @param errorCallback Callback function when the request fails.
   */
  constructor(
    baseUrl,
    headers,
    errorCallback = e => {
      log.error(`Error resolving request. Error:${e}`);
    }
  ) {
    this.baseUrl = baseUrl;
    this.headers = headers;
    this.headers['Content-Type'] = 'application/json';
    this.headers.Accept = 'application/json';
    this.errorCallback = e => {
      log.error(`Error resolving request. Error:${e}`);
      errorCallback(e);
    };
    log.debug(`new session with baseUrl ${this.baseUrl} and header ${this.headers}`);
  }

  /**
   * GET-Request
   * @param url specific url for the request. baseurl will be added
   * @param query optional query
   * @returns {*} Successful promise of http-request.
   */
  get(url, query = false) {
    log.info(`GET-request to ${this.baseUrl}/${url}${query ? `?${query}` : ''}`);
    return m
      .request({
        method: 'GET',
        url: `${this.baseUrl}/${url}${query ? `?${query}` : ''}`,
        headers: this.headers,
      })
      .catch(e => this.errorCallback(e))
      .then(res => res);
  }

  /**
   * POST-Request
   * @param url specific url for the request. baseurl will be added
   * @param data to be transmitted
   * @returns {*} Successful promise of http-request.
   */
  post(url, data) {
    log.info(`POST-request to ${this.baseUrl}/${url} payload: ${data}`);
    return m
      .request({
        method: 'POST',
        url: `${this.baseUrl}/${url}`,
        data,
        headers: this.headers,
      })
      .catch(e => this.errorCallback(e));
  }

  /**
   * DELETE-Request
   * @param url specific url for the request. baseurl will be added
   * @returns {*} Successful promise of http-request.
   */
  delete(url) {
    log.info(`DELETE-request to ${this.baseUrl}/${url}`);
    return m
      .request({
        method: 'GET',
        url: `${this.baseUrl}/${url}`,
        headers: this.headers,
      })
      .catch(e => this.errorCallback(e));
  }

  /**
   * PATCH-Request
   * @param url specific url for the request. baseurl will be added
   * @param data payload
   * @returns {*|Promise<Response | void>|Promise<T | void>|undefined} Successful promise of http-request.
   */
  patch(url, data) {
    log.info(`PATCH-request to ${this.baseUrl}/${url} payload: ${data}`);
    return m
      .request({
        method: 'PATCH',
        url: `${this.baseUrl}/${url}`,
        headers: this.headers,
        data,
      })
      .catch(e => this.errorCallback(e));
  }
}
