// Authentication will be handled here
import m from 'mithril';
import ClientOAuth2 from 'client-oauth2';
import Session from './session';
import network_config from './network_config';
import * as localStorage from './localStorage';
import { log } from './utils';

log.debug(`Initializing Authentication`);

/**
 * Saves all fields retreived from the api
 * @type {{authenticated: boolean, nethz: string, amiv_token: string, rights: {invoice: Array, user: Array, beleg: Array}, qtool_token: string}}
 */
export const APISession = {
  authenticated: false,
  amiv_token: '',
  qtool_token: '',
  nethz: '',
  id: 0,
  rights: {
    beleg: [],
    invoice: [],
    user: [],
  },
};

// Last time the authentication was checked

let last_checked = 0;

/**
 * Oauth handler
 * @type {ClientOAuth2}
 */
let oauth = new ClientOAuth2({
  clientId: network_config.oAuthID,
  authorizationUri: `${network_config.amiv_api_address}/oauth`,
  redirectUri: `${network_config.own_url}/oauthcallback`,
});

/**
 * Deletes the qtool session (and temporary redirects to login, needed until profile page is finished)
 */
export async function deleteSession() {
  // delete the AMIV API session if possible.
  const amiv_session = new Session(network_config.amiv_api_address, {
    Authorization: APISession.amiv_token,
  });
  return amiv_session.delete(`sessions/${APISession.amiv_token}`);

  // TODO: Delete qtool token
}

/**
 * Set the session back to clear
 */
function resetAPISession() {
  APISession.authenticated = false;
  APISession.amiv_token = '';
  APISession.qtool_token = '';
  APISession.nethz = '';
  APISession.id = 0;
  APISession.rights = {};
  localStorage.remove('amiv_token');
  localStorage.remove('qtool_token');
}

export async function logout() {
  return deleteSession()
    .then(() => {
      resetAPISession();
      console.log(APISession);
      m.route.set('/');
    })
    .catch(() => {
      resetAPISession();
      console.log(APISession);
      m.route.set('/');
    });
}

export function login(redirectUrl = window.location.pathname) {
  console.log('Logging in');
  oauth = new ClientOAuth2({
    clientId: network_config.oAuthID,
    authorizationUri: `${network_config.amiv_api_address}/oauth`,
    redirectUri: `${network_config.own_url}/oauthcallback${
      redirectUrl ? `?redir=${redirectUrl}` : ''
    }`,
  });
  window.location.replace(oauth.token.getUri()); // Redirect to get amiv token.
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
 * Resets the qtool token, valid AMIV session needed.
 * @returns {Promise<void|*>}
 */
async function resetQtoolToken() {
  if (!APISession.amiv_token) {
    return null;
  }
  const qtool_session = new Session(network_config.qtool_api_address(), {});

  return qtool_session
    .post('Session/session', { amivapi_session_token: APISession.amiv_token }, () =>
      console.log('errorrrr')
    )
    .then(res => {
      localStorage.set('qtool_token', res.qtool_session_token);
      return res;
    });
}

/**
 * Checks if the user is authenticated and retrieves new tokens if needed
 * @returns {Promise<boolean>}
 */
export async function checkAuthenticated(enforce_API_check = false) {
  if (APISession.authenticated) return true;

  const d = new Date();

  if (enforce_API_check || d.getTime() - last_checked > 5000) {
    const amiv_token = localStorage.get('amiv_token');
    let qtool_token = localStorage.get('qtool_token');

    if (amiv_token === '') {
      return false;
    }

    const amiv_api_response = await checkAmivToken(amiv_token); // TODO:  Maybe move to backend...

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

    const date = new Date();
    last_checked = date.getTime();

    // setting the API Session.
    if (amiv_api_response && qtool_api_response) {
      APISession.qtool_token = qtool_token;
      APISession.nethz = qtool_api_response[0].nethz
        ? qtool_api_response[0].nethz
        : qtool_api_response.nethz;
      APISession.id = qtool_api_response[0].user_id
        ? qtool_api_response[0].user_id
        : qtool_api_response.user_id;
      APISession.authenticated = true;
      return true;
    }
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
    login();
  }
  return new Session(
    network_config.qtool_api_address(),
    {
      'X-AMIV-API-TOKEN': APISession.qtool_token,
    },
    e => {
      console.log(e);
      checkAuthenticated(true);
    }
  );
}

/**
 * Returns the nethz-kürzel of the current user
 * @returns {Promise<string>}
 */
export async function getNethz() {
  const authenticated = await checkAuthenticated();
  if (!authenticated) {
    return undefined;
  }
  return APISession.nethz;
}

export async function getId() {
  const authenticated = await checkAuthenticated();
  if (!authenticated) {
    return undefined;
  }
  return APISession.id;
}

/**
 * returns true if the user is logged in
 * @returns {boolean}
 */
export async function isLoggedIn() {
  const authenticated = await checkAuthenticated();
  if (!authenticated) {
    return false;
  }
  return APISession.authenticated;
}

/**
 * returns true if the user is logged in in a less optimal manner but synchronous
 * @returns {boolean}
 */
export function isLoggedInSync() {
  return (
    APISession.authenticated || (localStorage.get('amiv_token') && localStorage.get('qtool_token'))
  );
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
        .then(() => {
          const urlParams = new URLSearchParams(window.location.search);
          log.warn(`landed here, new url: ${urlParams}`);
          // m.route.set(urlParams.has('redir') ? urlParams.get('redir') : '/');
        })
        .catch();
    });
  }

  // eslint-disable-next-line class-methods-use-this
  view() {
    return 'redirecting...';
  }
}
