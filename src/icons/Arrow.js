import React from 'react'

export function ArrowDown({ className }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="48"
            height="48"
            viewBox="0 0 48 48"
            className={className}
        >
            <path d="M14 20l10 10 10-10z" />
            <path d="M0 0h48v48H0z" fill="none" />
        </svg>
    )
}

export function ArrowUp({ className }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="48"
            height="48"
            viewBox="0 0 48 48"
            className={className}
        >
            <path d="M14 28l10-10 10 10z" />
            <path d="M0 0h48v48H0z" fill="none" />
        </svg>
    )
}
