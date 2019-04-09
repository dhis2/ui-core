import React from 'react'
import { resolve } from 'styled-jsx/css'

export const styles = resolve`
    svg {
        fill: inherit;
        height: 24px;
        width: 24px;
        vertical-align: middle;
        pointer-events: none;
    }
`

export function ArrowDown() {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="48"
            height="48"
            viewBox="0 0 48 48"
            className={styles.className}
        >
            <path d="M14 20l10 10 10-10z" />
            <path d="M0 0h48v48H0z" fill="none" />
            <style>{styles.styles}</style>
        </svg>
    )
}

export function ArrowUp() {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="48"
            height="48"
            viewBox="0 0 48 48"
            className={styles.className}
        >
            <path d="M14 28l10-10 10 10z" />
            <path d="M0 0h48v48H0z" fill="none" />
            <style>{styles.styles}</style>
        </svg>
    )
}
