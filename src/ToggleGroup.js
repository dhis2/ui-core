import propTypes from '@dhis2/prop-types'
import cx from 'classnames'
import { Children, cloneElement } from 'react'

import { statusPropType } from './common-prop-types.js'

const ToggleGroup = ({
    children,
    value,
    onChange,
    name,
    disabled,
    valid,
    warning,
    error,
    dense,
    className,
}) =>
    Children.map(children, child =>
        cloneElement(child, {
            name,
            onChange: child.props.onChange || onChange,
            checked: Array.isArray(value)
                ? value.indexOf(child.props.value) !== -1
                : child.props.value === value,
            disabled: child.props.disabled || disabled,
            valid: child.props.valid || valid,
            warning: child.props.warning || warning,
            error: child.props.error || error,
            dense: child.props.dense || dense,
            className: cx(child.props.className, className, 'grouped'),
        })
    )

/**
 * @typedef {Object} PropTypes
 * @static
 * @private
 *
 * @prop {Node} children
 * @prop {function} [onChange]
 * @prop {string} name
 * @prop {string|Array.<String>} [value]
 * @prop {string} [className]
 * @prop {boolean} [disabled]
 * @prop {boolean} [valid] - `valid`, `warning`, `error`, `loading`, are mutually exclusive
 * @prop {boolean} [warning]
 * @prop {boolean} [error]
 * @prop {boolean} [dense]
 */
ToggleGroup.propTypes = {
    children: propTypes.node.isRequired,
    onChange: propTypes.func,
    name: propTypes.string,

    value: propTypes.oneOfType([
        propTypes.string,
        propTypes.arrayOf(propTypes.string),
    ]),
    className: propTypes.string,

    disabled: propTypes.bool,
    valid: statusPropType,
    warning: statusPropType,
    error: statusPropType,

    dense: propTypes.bool,
}

export { ToggleGroup }
