import m from 'mithril';

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
      console.log(e);
    }
  ) {
    this.baseUrl = baseUrl;
    this.headers = headers;
    this.headers['Content-Type'] = 'application/json';
    this.headers.Accept = 'application/json';
    this.errorCallback = e => errorCallback(e);
  }

  /**
   * GET-Request
   * @param url specific url for the request. baseurl will be added
   * @param query optional query
   * @returns {*} Successful promise of http-request.
   */
  get(url, query = false) {
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
    return m
      .request({
        method: 'GET',
        url: `${this.baseUrl}/${url}`,
        headers: this.headers,
      })
      .catch(e => this.errorCallback(e));
  }
}
