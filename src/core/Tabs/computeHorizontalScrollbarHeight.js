/** @format */

import s from './styles'

let horizontalScrollbarHeight

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
