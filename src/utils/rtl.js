/** @format */

import { getDoc } from './html'

/**
 * prefixes for Right to Left (RTL) languages
 *
 * @type {string[]}
 * @link https://meta.wikimedia.org/wiki/Template:List_of_language_names_ordered_by_code
 */
export const RTL_LANGS = [
    'ar',
    'arc',
    'dv',
    'fa',
    'ha',
    'he',
    'khw',
    'ks',
    'ku',
    'ps',
    'ur',
    'yi',
]

/**
 * set dir attribute {ltr, rtl} on document based on locale
 * @param locale format "en" or "en_EN"
 */
export function setDocDir(locale) {
    const uiLanguage = locale.includes('_') ? locale.split('_')[0] : locale
    const dir = RTL_LANGS.includes(uiLanguage) ? 'rtl' : 'ltr'

    getDoc().setAttribute('dir', dir)
}

/**
 * returns true, if document is rendered in RTL mode
 * @returns {boolean}
 */
export function isDocRTL() {
    return getDoc().getAttribute('dir') === 'rtl'
}
