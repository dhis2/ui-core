/** @format */
/* global DHIS_CONFIG, manifest */

let version = '30'
// let url = 'http://localhost:8080'
let url = 'https://play.dhis2.org/2.30'

if (typeof manifest !== 'undefined') {
    version = manifest.dhis2.apiVersion
}

const isProd = process.env.NODE_ENV === 'production'
if (isProd) {
    url = manifest.activities.dhis.href
} else if (!isProd && typeof DHIS_CONFIG === 'object') {
    url = DHIS_CONFIG.baseUrl
} else if (isProd) {
    url = '..'
}

export const serverURL = url
export const apiEndpoint = `${serverURL}/api/${version}`

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
