import React from 'react'

/**
 * get <html> or the <body> element in document
 * @returns {HTMLElement}
 */
export function getDoc() {
    return document.documentElement || document.body
}
