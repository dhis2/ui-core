import React from 'react'
import propTypes from 'prop-types'
import cx from 'classnames'
import styles from './Option.styles.js'

const createOnClickHandler = (onClick, value) => evt => {
    if (onClick) {
        evt.preventDefault()
        evt.stopPropagation()
        onClick(value)
    }
}

/**
 * @module
 * @param {Option.PropTypes}
 * @returns {React.Component}
 *
 * @example import { Option } from '@dhis2/ui-core'
 *
 * @see Specification: {@link https://github.com/dhis2/design-system/blob/master/molecules/menu.md|Design system}
 * @see Live demo: {@link /demo/?path=/story/menu--default|Storybook}
 */
const Option = ({ value, label, icon, active, disabled, dense, onClick }) => {
    const isClickable = onClick
    const LinkElement = isClickable ? 'a' : 'span'
    const linkElementProps = {}

    if (isClickable) {
        linkElementProps.onClick = createOnClickHandler(onClick, value)
    }

    return (
        <li
            className={cx({
                disabled,
                dense,
                active,
            })}
        >
            <LinkElement className="link" {...linkElementProps}>
                {icon}
                <div className="label">{label}</div>
            </LinkElement>

            <style jsx>{styles}</style>
        </li>
    )
}

/**
 * @typedef {Object} PropTypes
 * @static
 *
 * @prop {string|Node} label
 * @prop {string} [value]
 * @prop {function} [onClick] - Click handler called with `value` as the sole argument
 * @prop {string} [className]
 * @prop {Element} [children]
 * @prop {Element} [icon]
 * @prop {boolean} [dense]
 * @prop {boolean} [active]
 * @prop {boolean} [disabled]
 */
Option.propTypes = {
    label: propTypes.oneOfType([propTypes.string, propTypes.node]).isRequired,

    value: propTypes.string,
    href: propTypes.string,
    onClick: propTypes.func,

    className: propTypes.string,
    icon: propTypes.element,

    dense: propTypes.bool,
    active: propTypes.bool,
    disabled: propTypes.bool,
}

export { Option }
