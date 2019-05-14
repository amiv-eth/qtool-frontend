// Authentication will be handled here

import m from 'mithril';
import network_config from './network_config';
import resource_config from './resource_config';

/**
 * Resourcehandler handles all the communication between front- and backend
 */
export default class ResourceHandler {
  /**
   * Constructor
   * @param resource: resource from resource_config-file
   */
  constructor(resource) {
    this.resource = resource;
    this.conf = resource_config[this.resource];
    this.qtool_api = `${network_config.qtool_api_address()}/${this.conf.path}`;
    console.log(this.qtool_api);
  }

  /**
   * gives back the sorting of the request (needed since default can be specified)
   * @param query: the query used
   * @returns {string|undefined|*} current sorting
   */
  getSort(query) {
    if ('sort' in query && query.sort && query.sort.length > 0) {
      if (query.sort === 'default' && this.conf.default_sort) {
        return this.conf.default_sort;
      }
      if (query.sort !== 'default') {
        return query.sort;
      }
    }
    return undefined;
  }

  /**
   * Assembles the query to a string, allows for several searches which are anded together
   * @param query the query used
   * @returns {string} a querystring which can be sent to the api
   */
  buildQueryString(query) {
    const queryKeys = Object.keys(query);
    if (queryKeys.length === 0) return '';

    const fullQuery = {};

    // Setting for embedded needs to come first.
    if (this.conf.embedded && this.conf.embedded.length !== 0) {
      let embedded = '{';
      this.conf.embedded.forEach(item => {
        embedded += `'${item}':1, `;
      });
      embedded = embedded.substring(0, embedded.length - 2);
      embedded += '}';

      fullQuery.embedded = embedded;
    }

    fullQuery.sort = this.getSort(query) || {};

    if ('search' in query && query.search && query.search.length > 0 && this.conf.search_keys) {
      let search = query.search.length > 1 ? "{'and': [" : '';
      query.search.forEach(entry => {
        if (entry.length > 0) {
          let entry_search = "{'or': [";
          Object.values(this.conf.search_keys).forEach(field => {
            entry_search = `${entry_search}{'${field}.in': '${entry}'}, `;
          });
          entry_search += `]},`;
          search += entry_search;
        }
      });
      search = search.substring(0, search.length - 1);
      search += query.search.length > 1 ? ']}' : '';

      fullQuery.where = search;
    }

    queryKeys
      .filter(key => key !== 'sort' && key !== 'search')
      .forEach(key => {
        fullQuery[key] = JSON.stringify(query[key]);
      });

    return m.buildQueryString(fullQuery);
  }

  /**
   * Get-Request
   * @param query used query containing all the information to be sent to the api
   */
  get(query = false) {
    return m.request({
      method: 'GET',
      url: `${this.qtool_api}${query ? `?${this.buildQueryString(query)}` : ''}`,
      headers: {
        'X-AMIV-API-TOKEN': 'quaestor',
        Accept: 'application/json',
      },
    });
  }

  /**
   * Returns object to a given id
   * @param id of the object
   */
  getId(id) {
    return m.request({
      method: 'GET',
      url: `${this.qtool_api}/${id}`,
      headers: {
        'X-AMIV-API-TOKEN': 'quaestor',
        Accept: 'application/json',
      },
    });
  }

  /**
   * Post request
   * @param data the payload
   */
  post(data) {
    return m.request({
      method: 'POST',
      url: `${this.qtool_api}`,
      data,
      headers: {
        'X-AMIV-API-TOKEN': 'quaestor',
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    });
  }
}
