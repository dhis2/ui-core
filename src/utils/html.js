/** @format */

import React, { Children } from 'react'

// CSS selectors like :first-child, :only-child, :last-child do not take text nodes
// into account, so wrapping text nodes in spans simplifies the CSS file a lot.
export function wrapTextNodesInSpans(children) {
    return Children.map(children, (child, index) => {
        if (['string', 'number'].includes(typeof child)) {
            return <span key={`key-${index}`}>{child}</span>
        }
        return child
    })
}
