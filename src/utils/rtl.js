/** @format */

import { getDoc } from './html'

// https://meta.wikimedia.org/wiki/Template:List_of_language_names_ordered_by_code
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
 *
 * @param locale format "en" or "en_EN"
 */
export function setDir(locale) {
    const uiLanguage = locale.includes('_') ? locale.split('_')[0] : locale
    const dir = RTL_LANGS.includes(uiLanguage) ? 'rtl' : 'ltr'

    getDoc().setAttribute('dir', dir)
}

export function isDocRTL() {
    return getDoc().getAttribute('dir') === 'rtl'
}
