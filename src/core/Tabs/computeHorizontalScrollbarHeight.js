/** @format */

import s from './styles'

let horizontalScrollbarHeight

/**
 * Computes the height of browser-rendered horizontal scrollbars using a self-created test element.
 * May return 0 (e.g. on OS X browsers under default configuration).
 *
 * @link https://github.com/material-components/material-components-web/blob/master/packages/mdc-tab-scroller/util.js#L39-L55
 *
 * @param {!Document} documentObj
 * @param {boolean=} shouldCacheResult
 * @return {number}
 */
export function computeHorizontalScrollbarHeight() {
    if (horizontalScrollbarHeight) {
        return horizontalScrollbarHeight
    }

    const el = document.createElement('div')
    el.classList.add(s('test-horizontal-scrollbar-height'))
    document.body.appendChild(el)
    // cache the result
    horizontalScrollbarHeight = el.offsetHeight - el.clientHeight
    document.body.removeChild(el)

    return horizontalScrollbarHeight
}
