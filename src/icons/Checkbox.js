import React from 'react'

export function Unchecked({ className }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="48"
            height="48"
            viewBox="0 0 48 48"
            className={className}
        >
            <path d="M38 10v28H10V10h28m0-4H10c-2.21 0-4 1.79-4 4v28c0 2.21 1.79 4 4 4h28c2.21 0 4-1.79 4-4V10c0-2.21-1.79-4-4-4z" />
            <path d="M0 0h48v48H0z" fill="none" />
        </svg>
    )
}

export function Checked({ className }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="48"
            height="48"
            viewBox="0 0 48 48"
            className={className}
        >
            <path d="M0 0h48v48H0z" fill="none" />
            <path d="M38 6H10c-2.21 0-4 1.79-4 4v28c0 2.21 1.79 4 4 4h28c2.21 0 4-1.79 4-4V10c0-2.21-1.79-4-4-4zM20 34L10 24l2.83-2.83L20 28.34l15.17-15.17L38 16 20 34z" />
        </svg>
    )
}

export function Indeterminate({ className }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="48"
            height="48"
            viewBox="0 0 48 48"
            className={className}
        >
            <defs>
                <path id="a" d="M0 0h24v24H0z" />
            </defs>
            <clipPath id="b">
                <use xlink:href="#a" overflow="visible" />
            </clipPath>
            <path
                clip-path="url(#b)"
                d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"
            />
        </svg>
    )
}
