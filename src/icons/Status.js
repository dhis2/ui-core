import React from 'react'
import PropTypes from 'prop-types'
import {
    iconStyle,
    iconStyleDefault,
    iconStyleValid,
    iconStyleWarning,
    iconStyleError,
} from './styles'

const stylesPropType = PropTypes.shape({
    className: PropTypes.string.isRequired,
    styles: PropTypes.object.isRequired,
})

/**
 * Abstract icon component
 *
 * @param {Object} props
 * @param {Object} props.styles
 * @param {any} props.children
 * @returns {Object}
 */
function Icon({ styles, children, className }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="48"
            height="48"
            viewBox="0 0 48 48"
            className={[iconStyle.className, styles.className, className].join(
                ' '
            )}
        >
            {children}
            <style>{iconStyle.styles}</style>
            <style>{styles.styles}</style>
        </svg>
    )
}

Icon.propTypes = {
    children: PropTypes.node.isRequired,
    styles: stylesPropType.isRequired,
    className: PropTypes.string,
}

Icon.defaultProps = {
    styles: iconStyleDefault,
    className: '',
}

/**
 * @param {Object} props
 * @param {Object} props.styles
 * @returns {Object}
 */
export function Default({ styles, className }) {
    return (
        <Icon className={className} styles={styles}>
            <path d="M0 0h48v48H0z" fill="none" />
        </Icon>
    )
}

Default.propTypes = {
    styles: stylesPropType,
    className: PropTypes.string,
}

Default.defaultProps = {
    styles: iconStyleDefault,
    className: '',
}

/**
 * @param {Object} props
 * @param {Object} props.styles
 * @returns {Object}
 */
export function Valid({ styles, className }) {
    return (
        <Icon className={className} styles={styles}>
            <path d="M24 4C12.95 4 4 12.95 4 24c0 11.04 8.95 20 20 20 11.04 0 20-8.96 20-20 0-11.05-8.96-20-20-20zm-4 30L10 24l2.83-2.83L20 28.34l15.17-15.17L38 16 20 34z" />
        </Icon>
    )
}

Valid.propTypes = {
    styles: stylesPropType,
    className: PropTypes.string,
}

Valid.defaultProps = {
    styles: iconStyleValid,
    className: '',
}

/**
 * @param {Object} props
 * @param {Object} props.styles
 * @returns {Object}
 */
export function Warning({ styles, className }) {
    return (
        <Icon className={className} styles={styles}>
            <path d="M2 42h44L24 4 2 42zm24-6h-4v-4h4v4zm0-8h-4v-8h4v8z" />
        </Icon>
    )
}

Warning.propTypes = {
    styles: stylesPropType,
    className: PropTypes.string,
}

Warning.defaultProps = {
    styles: iconStyleWarning,
    className: '',
}

/**
 * @param {Object} props
 * @param {Object} props.styles
 * @returns {Object}
 */
export function Error({ styles, className }) {
    return (
        <Icon className={className} styles={styles}>
            <path d="M24 4C12.96 4 4 12.95 4 24s8.96 20 20 20 20-8.95 20-20S35.04 4 24 4zm2 30h-4v-4h4v4zm0-8h-4V14h4v12z" />
        </Icon>
    )
}

Error.propTypes = {
    styles: stylesPropType,
    className: PropTypes.string,
}

Error.defaultProps = {
    styles: iconStyleError,
    className: '',
}
