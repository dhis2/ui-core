/** @format */

import { bem } from './Tabs'

let horizontalScrollbarHeight

export default function() {
    if (horizontalScrollbarHeight) {
        return horizontalScrollbarHeight
    }

    const el = document.createElement('div')
    el.classList.add(bem.e('test-horizontal-scrollbar-height'))
    document.body.appendChild(el)
    // cache the result
    horizontalScrollbarHeight = el.offsetHeight - el.clientHeight
    document.body.removeChild(el)

    return horizontalScrollbarHeight
}
