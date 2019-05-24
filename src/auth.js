// Authentication will be handled here
import m from 'mithril';
import ClientOAuth2 from 'client-oauth2';
import Session from './session';
import network_config from './network_config';
import resource_config from './resource_config';
import * as localStorage from './localStorage';

/**
 * Saves all fields retreived from the api
 * @type {{authenticated: boolean, nethz: string, amiv_token: string, rights: {invoice: Array, user: Array, beleg: Array}, qtool_token: string}}
 */
const APISession = {
  authenticated: false,
  amiv_token: '',
  qtool_token: '',
  nethz: '',
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
 * Checks if the token is still valid against the AMIV-API.
 * @param token
 */
function checkAmivToken(token) {
  const amiv_session = new Session(
    network_config.amiv_api_address,
    { Authorization: token },
    () => false
  );
  return amiv_session.get(`sessions/${token}`).then(() => true);
}

/**
 * Checks if the token is still valid against the Qtool-API.
 * @param token
 */
function checkQtoolToken(token) {
  const qtool_session = new Session(
    network_config.qtool_api_address(),
    { 'X-AMIV-API-TOKEN': token },
    () => false
  );
  return qtool_session.get('Session/session'); // response => response.token === token)
}

/**
 * Resets the qtool token, and even the AMIV session if needed.
 * @returns {Promise<void|*>}
 */
async function resetQtoolToken() {
  if (!APISession.amiv_token) {
    return resetSession();
  }
  const qtool_session = new Session(network_config.qtool_api_address(), {}, () => resetSession());

  return qtool_session
    .post('Session/session', { amivapi_session_token: APISession.amiv_token })
    .then(res => {
      localStorage.set('qtool_token', res.qtool_session_token);
      return res;
    });
}

/**
 * Checks if the user is authenticated and retrieves new tokens if needed
 * @returns {Promise<boolean>}
 */
export async function checkAuthenticated() {
  if (APISession.authenticated) return true;

  const amiv_token = localStorage.get('amiv_token');
  let qtool_token = localStorage.get('qtool_token');

  if (amiv_token === '') {
    return false;
  }

  const amiv_api_response = await checkAmivToken(amiv_token);

  if (amiv_api_response) {
    APISession.amiv_token = amiv_token;
  }

  let qtool_api_response = await checkQtoolToken(qtool_token);

  // Just in case ONLY the qtool-token was deleted. Not sure about the use-case unless someone manually deletes the token
  if (amiv_api_response && !qtool_api_response) {
    await resetQtoolToken();
    qtool_token = localStorage.get('qtool_token');
    qtool_api_response = await checkQtoolToken(qtool_token);
  }

  // setting the API Session.
  if (amiv_api_response && qtool_api_response) {
    APISession.qtool_token = qtool_token;
    APISession.nethz = qtool_api_response[0].nethz
      ? qtool_api_response[0].nethz
      : qtool_api_response.nethz;
    APISession.authenticated = true;
    return true;
  }
  return false;
}

/**
 * Returns a session for the API, which handles all requests
 * @returns {Promise<Session>}
 */
export async function getSession() {
  const authenticated = await checkAuthenticated();
  if (!authenticated) {
    resetSession();
  }
  return new Session(
    network_config.qtool_api_address(),
    {
      'X-AMIV-API-TOKEN': APISession.qtool_token,
    },
    () => resetSession()
  );
}

/**
 * Deletes the qtool session (and temporary redirects to login, needed until profile page is finished)
 */
export function deleteSession() {
  // delete the AMIV API session if possible.
  const amiv_session = new Session(
    network_config.amiv_api_address,
    { Authorization: APISession.amiv_token },
    () => {
      APISession.authenticated = false;
      return resetSession();
    }
  );
  amiv_session.delete(`sessions/${APISession.amiv_token}`).then(() => {
    APISession.authenticated = false;
    return resetSession();
  });
}

/**
 * Returns the nethz-kürzel of the current user
 * @returns {Promise<string>}
 */
export async function getNethz() {
  const authenticated = await checkAuthenticated();
  if (!authenticated) {
    return '';
  }
  return APISession.nethz;
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

    // Different search fields combined
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
    return getSession().then(session =>
      session.get(this.conf.path, query ? this.buildQueryString(query) : null)
    );
  }

  /**
   * Returns object to a given id
   * @param id of the object
   */
  getId(id) {
    return getSession().then(session => session.get(`${this.conf.path}/${id}`));
  }

  /**
   * Post request
   * @param data the payload
   */
  post(data) {
    return getSession().then(session => session.post(this.conf.path, data));
  }
}

/**
 * Landing Page after completed login TODO: redirect to the last page.
 */
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
