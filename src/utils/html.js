/** @format */

import React from 'react'

/**
 * CSS selectors like :first-child, :only-child, :last-child do not take text nodes
 * into account, so wrapping text nodes in spans simplifies the CSS file a lot.
 *
 * @param nodes list of text nodes
 */
export function wrapTextNodesInSpans(nodes) {
    return React.Children.map(nodes, (node, idx) => {
        if (['string', 'number'].includes(typeof node)) {
            return <span key={`key-${idx}`}>{node}</span>
        }

        return node
    })
}

/**
 * get <html> or the <body> element in document
 * @returns {HTMLElement}
 */
export function getDoc() {
    return document.documentElement || document.body
}
