import m from 'mithril';

import { log } from './utils';

export default class Session {
  /**
   * Generic Session handling all requests based on the axios-Session but more minimal
   * @param baseUrl url of the base session, specific resources will be added in the reqests
   * @param headers headers to be send along
   * @param errorCallback Callback function when the request fails.
   */
  constructor(baseUrl, headers, errorCallback = e => e) {
    this.baseUrl = baseUrl;
    this.headers = headers;
    this.headers['Content-Type'] = 'application/json';
    this.headers.Accept = 'application/json';

    log.debug(`Constructing new session with baseUrl ${baseUrl} and header ${headers}`);

    this.errorCallback = (e, request = false) => {
      log.error(
        `Error resolving following request: ${request || ''} Message: ${
          String(e) === 'Error' ? 'No good Message given, API might be down' : e
        }`
      );
      return errorCallback(e);
    };
  }

  /**
   * GET-Request
   * @param url specific url for the request. baseurl will be added
   * @param query optional query
   * @returns {*} Successful promise of http-request.
   */
  get(url, query = false) {
    const req = `GET-request to ${this.baseUrl}/${url}${query ? `?${query}` : ''}`;
    log.info(req);
    return m
      .request({
        method: 'GET',
        url: `${this.baseUrl}/${url}${query ? `?${query}` : ''}`,
        headers: this.headers,
      })
      .catch(e => this.errorCallback(e, req))
      .then(res => res);
  }

  /**
   * POST-Request
   * @param url specific url for the request. baseUrl will be added
   * @param data to be transmitted
   * @returns {*} Successful promise of http-request.
   */
  post(url, data) {
    const req = `POST-request to ${this.baseUrl}/${url} payload: ${JSON.stringify(data)}`;
    log.info(req);
    return m
      .request({
        method: 'POST',
        url: `${this.baseUrl}/${url}`,
        data,
        headers: this.headers,
      })
      .catch(e => this.errorCallback(e, req));
  }

  /**
   * DELETE-Request
   * @param url specific url for the request. baseurl will be added
   * @returns {*} Successful promise of http-request.
   */
  delete(url) {
    const req = `DELETE-request to ${this.baseUrl}/${url}`;
    log.info(req);
    return m
      .request({
        method: 'GET',
        url: `${this.baseUrl}/${url}`,
        headers: this.headers,
      })
      .catch(e => this.errorCallback(e, req));
  }

  /**
   * PATCH-Request
   * @param url specific url for the request. baseurl will be added
   * @param data payload
   * @returns {*|Promise<Response | void>|Promise<T | void>|undefined} Successful promise of http-request.
   */
  patch(url, data) {
    const req = `PATCH-request to ${this.baseUrl}/${url} payload: ${JSON.stringify(data)}`;
    log.info(req);
    return m
      .request({
        method: 'PATCH',
        url: `${this.baseUrl}/${url}`,
        headers: this.headers,
        data,
      })
      .catch(e => this.errorCallback(e, req));
  }
}
