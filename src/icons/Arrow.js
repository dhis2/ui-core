import React from 'react'
import css from 'styled-jsx/css'

export const styles = css`
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
        >
            <path d="M14 20l10 10 10-10z" />
            <style jsx>{styles}</style>
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
        >
            <path d="M14 28l10-10 10 10z" />
            <style jsx>{styles}</style>
        </svg>
    )
}
