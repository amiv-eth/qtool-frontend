// Authentication will be handled here
import m from 'mithril';
import ClientOAuth2 from 'client-oauth2';
import network_config from './network_config';
import resource_config from './resource_config';
import * as localStorage from './localStorage';

const APISession = {
  authenticated: false,
  amiv_token: '',
  qtool_token: '',
  rights: {
    beleg: [],
    invoice: [],
    user: [],
  },
};

/**
 * Oauth handler
 * @type {ClientOAuth2}
 */
const oauth = new ClientOAuth2({
  clientId: network_config.oAuthID,
  authorizationUri: `${network_config.amiv_api_address}/oauth`,
  redirectUri: `${network_config.own_url}/oauthcallback`,
});

/**
 * Set the session back to clear
 */
function resetSession() {
  APISession.authenticated = false;
  APISession.amiv_token = '';
  APISession.qtool_token = '';
  localStorage.remove('amiv_token');
  localStorage.remove('qtool_token');
  window.location.replace(oauth.token.getUri()); // Redirect to get token.
}

/**
 * Checks if the token is still valid.
 * @param api
 * @param token
 */
function checkToken(api, token) {
  return m
    .request({
      method: 'GET',
      url: `${api}/sessions/${token}`,
      headers: {
        'Content-Type': 'application/json',
        Authorization: token,
      },
    })
    .then(() => true) // response => response.token === token)
    .catch(() => false);
}

export async function checkAuthenticated() {
  if (APISession.authenticated) return true;

  const amiv_token = localStorage.get('amiv_token');
  // const qtool_token = localStorage.get('qtool_token');

  if (amiv_token === '' /* || qtool_token === '' */) {
    return false;
  }

  const response = await checkToken(network_config.amiv_api_address, amiv_token);
  // TODO implement qtool_token
  if (response) {
    APISession.amiv_token = amiv_token;
    APISession.authenticated = true;
    return true;
  }
  return false;
}

export async function getSession() {
  const authenticated = await checkAuthenticated();
  if (!authenticated) {
    return '';
  }
  return APISession.amiv_token;
}

export function deleteSession() {
  m.request({
    method: 'DELETE',
    url: `${network_config.amiv_api_address}/sessions/${APISession.amiv_token}`,
    headers: {
      'Content-Type': 'application/json',
      Authorization: APISession.amiv_token,
    },
  })
    .then(() => {
      APISession.authenticated = false;
      return resetSession();
    })
    .catch(() => {
      APISession.authenticated = false;
      return resetSession();
    });
}

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
    this.qtool_api = `${network_config.qtool_api_address()}/${this.conf.path}`; // TODO Not solved clever enough
    getSession().then(res => {
      console.log(res);
    });
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

export class OauthRedirect {
  // eslint-disable-next-line class-methods-use-this
  oninit() {
    oauth.token.getToken(m.route.get()).then(auth => {
      localStorage.set('amiv_token', auth.accessToken);
      checkAuthenticated()
        .then(() => m.route.set('/'))
        .catch();
    });
  }

  // eslint-disable-next-line class-methods-use-this
  view() {
    return 'redirecting...';
  }
}
