import propTypes from '@dhis2/prop-types'
import { Children, cloneElement } from 'react'

import { statusPropType } from './common-prop-types.js'
import { Radio } from './Radio.js'

const RadioGroup = ({
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
            checked: child.props.value === value,
            disabled: child.props.disabled || disabled,
            valid: child.props.valid || valid,
            warning: child.props.warning || warning,
            error: child.props.error || error,
            dense: child.props.dense || dense,
            className: child.props.className || className,
        })
    )

/**
 * @typedef {Object} PropTypes
 * @static
 * @prop {function} onChange
 * @prop {string} name
 * @prop {string} value
 * @prop {string} [className]
 * @prop {string} [tabIndex]
 *
 * @prop {boolean} [disabled]
 * @prop {boolean} [checked]
 * @prop {boolean} [initialFocus]
 *
 * @prop {boolean} [valid] - `valid`, `warning`, and `error` are
 * mutually exclusive
 * @prop {boolean} [warning]
 * @prop {boolean} [error]
 *
 * @prop {boolean} [dense]
 *
 * @prop {function} [onFocus]
 * @prop {function} [onBlur]
 */
RadioGroup.propTypes = {
    children: propTypes.arrayOf(propTypes.instanceOfComponent(Radio))
        .isRequired,
    onChange: propTypes.func.isRequired,

    name: propTypes.string.isRequired,
    value: propTypes.string,
    className: propTypes.string,

    disabled: propTypes.bool,
    valid: statusPropType,
    warning: statusPropType,
    error: statusPropType,

    dense: propTypes.bool,
}

export { RadioGroup }
