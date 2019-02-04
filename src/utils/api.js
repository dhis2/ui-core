/* global manifest */

const IS_PROD = process.env.NODE_ENV === 'production'

let url
let endpoint

if (IS_PROD) {
    url = '..'
    endpoint = `${url}/api`
    if (typeof manifest !== 'undefined') {
        let version = manifest.dhis2.apiVersion
        url = manifest.activities.dhis.href
        endpoint = `${url}/api/${version}`
    }
} else {
    // for dev. environments
    url = DHIS_CONFIG
      ? DHIS_CONFIG.baseUrl
      : process.env.REACT_APP_DHIS2_BASE_URL;

    if (!url) {
      throw new Error(
        "The environment variable REACT_APP_DHIS2_BASE_URL must be set when the application is built in development mode."
      );
    }

    endpoint = `${url}/api`
}

export const serverURL = url
export const apiEndpoint = endpoint

export function getPath(path = '') {
    return !path ? apiEndpoint : `${apiEndpoint}/${path}`
}

function _config() {
    return {
        method: 'GET',
        credentials: 'include',
    }
}

export function getAction(path, config = _config()) {
    return fetch(`${serverURL}/${path}`, config)
}

export function get(path, config = _config()) {
    return fetch(getPath(path), config)
}

export function post(path, body, config = _config()) {
    return fetch(
        getPath(path),
        Object.assign({}, config, {
            body,
            method: 'POST',
        })
    )
}
