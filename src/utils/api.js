/* global DHIS_CONFIG, manifest */

let version
let url
let endpoint

const isProd = process.env.NODE_ENV === 'production'
if (isProd) {
    if (typeof manifest !== 'undefined') {
        url = manifest.activities.dhis.href
        version = manifest.dhis2.apiVersion
        endpoint = `${url}/api/${version}`
    } else if (typeof DHIS_CONFIG === 'object') {
        url = DHIS_CONFIG.baseUrl
    } else {
        url = '..'
    }

    if (!endpoint) {
        endpoint = `${url}/api`
    }
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
