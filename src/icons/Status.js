import propTypes from 'prop-types'
import React from 'react'

import { theme, spacers } from '../theme.js'

/**
 * @param {Object} props
 * @param {string} props.className
 * @returns {ReactNode}
 */
export function Valid({ className }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="48"
            height="48"
            viewBox="0 0 48 48"
            className={className}
        >
            <path d="M24 4C12.95 4 4 12.95 4 24c0 11.04 8.95 20 20 20 11.04 0 20-8.96 20-20 0-11.05-8.96-20-20-20zm-4 30L10 24l2.83-2.83L20 28.34l15.17-15.17L38 16 20 34z" />
            <style jsx>{`
                svg {
                    fill: ${theme.valid};
                    width: 24px;
                    height: 24px;
                    margin-right: ${spacers.dp4};
                }
            `}</style>
        </svg>
    )
}

Valid.propTypes = {
    className: propTypes.string,
}

/**
 * @param {Object} props
 * @param {string} props.className
 * @returns {ReactNode}
 */
export function Warning({ className }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="48"
            height="48"
            viewBox="0 0 48 48"
            className={className}
        >
            <path d="M2 42h44L24 4 2 42zm24-6h-4v-4h4v4zm0-8h-4v-8h4v8z" />
            <style jsx>{`
                svg {
                    fill: ${theme.warning};
                    width: 24px;
                    height: 24px;
                    margin-right: ${spacers.dp4};
                }
            `}</style>
        </svg>
    )
}

Warning.propTypes = {
    className: propTypes.string,
}

/**
 * @param {Object} props
 * @param {string} props.className
 * @returns {ReactNode}
 */
export function Error({ className }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="48"
            height="48"
            viewBox="0 0 48 48"
            className={className}
        >
            <path d="M24 4C12.96 4 4 12.95 4 24s8.96 20 20 20 20-8.95 20-20S35.04 4 24 4zm2 30h-4v-4h4v4zm0-8h-4V14h4v12z" />
            <style jsx>{`
                svg {
                    fill: ${theme.error};
                    width: 24px;
                    height: 24px;
                    margin-right: ${spacers.dp4};
                }
            `}</style>
        </svg>
    )
}

/**
 * @param {Object} props
 * @param {string} props.className
 * @returns {ReactNode}
 */
export function Info({ className }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="48"
            height="48"
            viewBox="0 0 48 48"
            className={className}
        >
            <path d="M24 4C12.95 4 4 12.95 4 24s8.95 20 20 20 20-8.95 20-20S35.05 4 24 4zm2 30h-4V22h4v12zm0-16h-4v-4h4v4z" />
            <style jsx>{`
                svg {
                    fill: ${theme.info};
                    width: 24px;
                    height: 24px;
                    margin-right: 4px;
                }
            `}</style>
        </svg>
    )
}

Error.propTypes = {
    className: propTypes.string,
}

/**
 * @param {Object} props
 * @param {string} props.className
 * @returns {ReactNode}
 */
export function Loading({ className }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="48"
            height="48"
            viewBox="22 22 44 44"
            className={className}
        >
            <circle
                className="circle"
                cx="44"
                cy="44"
                r="20.2"
                fill="none"
                strokeWidth="3.6"
            />
            <style jsx>{`
                svg {
                    fill: ${theme.primary600};
                    color: ${theme.primary600};
                    width: 24px;
                    height: 24px;
                    margin-right: ${spacers.dp4};
                    animation: anim-rotate 1.4s linear infinite;
                }

                .circle {
                    stroke: currentColor;
                    stroke-dasharray: 80px, 200px;
                    stroke-dashoffset: 0;
                    animation: anim-dash 1.4s ease-in-out infinite;
                }

                @keyframes anim-rotate {
                    100% {
                        transform: rotate(360deg);
                    }
                }

                @keyframes anim-dash {
                    0% {
                        stroke-dasharray: 1px, 200px;
                        stroke-dashoffset: 0;
                    }
                    50% {
                        stroke-dasharray: 100px, 200px;
                        stroke-dashoffset: -15px;
                    }
                    100% {
                        stroke-dasharray: 100px, 200px;
                        stroke-dashoffset: -120px;
                    }
                }
            `}</style>
        </svg>
    )
}

Loading.propTypes = {
    className: propTypes.string,
}

/**
 * @param {Object} props
 * @param {string} props.status
 * @param {string} props.className
 * @returns {ReactNode}
 */
export const StatusIconNoDefault = ({
    error,
    warning,
    valid,
    loading,
    className,
}) =>
    valid ? (
        <Valid className={className} />
    ) : warning ? (
        <Warning className={className} />
    ) : error ? (
        <Error className={className} />
    ) : loading ? (
        <Loading className={className} />
    ) : null

StatusIconNoDefault.propTypes = {
    valid: propTypes.bool,
    error: propTypes.bool,
    warning: propTypes.bool,
    loading: propTypes.bool,
    className: propTypes.string,
}
