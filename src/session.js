import m from 'mithril';

export default class Session {
  constructor(baseUrl, headers, errorCallback) {
    this.baseUrl = baseUrl;
    this.headers = headers;
    this.headers['Content-Type'] = 'application/json';
    this.headers.Accept = 'application/json';
    this.errorCallback = e => errorCallback(e);
  }

  get(url, query = false) {
    return m
      .request({
        method: 'GET',
        url: `${this.baseUrl}/${url}${query ? `?${query}` : ''}`,
        headers: this.headers,
      })
      .catch(e => this.errorCallback(e));
  }

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
