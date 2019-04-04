import PropTypes from 'prop-types'
import React from 'react'
import css from 'styled-jsx/css'

import { colors } from '../theme'
import { iconStatusPropType, iconStatuses } from './constants'

export const statusToIcon = {
    [iconStatuses.VALID]: Valid,
    [iconStatuses.WARNING]: Warning,
    [iconStatuses.ERROR]: Error,
}

/**
 * Icon: Valid
 * =============
 */

const iconStyleValid = css`
    svg {
        fill: ${colors.blue600};
        width: 24px;
        height: 24px;
        margin-right: 8px;
    }
`

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
            <path d="M0 0h48v48H0z" fill="none" />
            <path d="M24 4C12.95 4 4 12.95 4 24c0 11.04 8.95 20 20 20 11.04 0 20-8.96 20-20 0-11.05-8.96-20-20-20zm-4 30L10 24l2.83-2.83L20 28.34l15.17-15.17L38 16 20 34z" />
            <style jsx>{iconStyleValid}</style>
        </svg>
    )
}

Valid.propTypes = {
    className: PropTypes.string.isRequired,
}

/**
 * Icon: Warning
 * =============
 */

const iconStyleWarning = css`
    svg {
        fill: ${colors.yellow500};
        width: 24px;
        height: 24px;
        margin-right: 8px;
    }
`

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
            <path d="M0 0h48v48H0z" fill="none" />
            <path d="M2 42h44L24 4 2 42zm24-6h-4v-4h4v4zm0-8h-4v-8h4v8z" />
            <style jsx>{iconStyleWarning}</style>
        </svg>
    )
}

Warning.propTypes = {
    className: PropTypes.string.isRequired,
}

/**
 * Icon: Error
 * =============
 */

const iconStyleError = css`
    svg {
        fill: ${colors.red500};
        width: 24px;
        height: 24px;
        margin-right: 8px;
    }
`

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
            <path d="M0 0h48v48H0z" fill="none" />
            <path d="M24 4C12.96 4 4 12.95 4 24s8.96 20 20 20 20-8.95 20-20S35.04 4 24 4zm2 30h-4v-4h4v4zm0-8h-4V14h4v12z" />
            <style jsx>{iconStyleError}</style>
        </svg>
    )
}

Error.propTypes = {
    className: PropTypes.string.isRequired,
}

/**
 * @param {Object} props
 * @param {string} props.status
 * @param {string} props.className
 * @returns {ReactNode}
 */
export const StatusIconNoDefault = ({ status, className }) =>
    status === iconStatuses.VALID ? (
        <Valid className={className} />
    ) : status === iconStatuses.WARNING ? (
        <Warning className={className} />
    ) : status === iconStatuses.ERROR ? (
        <Error className={className} />
    ) : null

StatusIconNoDefault.propTypes = {
    status: iconStatusPropType,
    className: PropTypes.string,
}

StatusIconNoDefault.defaultProps = {
    className: '',
}
