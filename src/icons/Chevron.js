import React from 'react'
import propTypes from 'prop-types'

export function ChevronRight({ className }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="48"
            height="48"
            viewBox="0 0 48 48"
            className={className}
        >
            <path d="M20 12l-2.83 2.83L26.34 24l-9.17 9.17L20 36l12-12z" />
            <path d="M0 0h48v48H0z" fill="none" />
        </svg>
    )
}

export function ChevronLeft({ className }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="48"
            height="48"
            viewBox="0 0 48 48"
            className={className}
        >
            <path d="M30.83 14.83L28 12 16 24l12 12 2.83-2.83L21.66 24z" />
            <path d="M0 0h48v48H0z" fill="none" />
        </svg>
    )
}
