import React from 'react'
import propTypes from '@dhis2/prop-types'

import { statusPropType } from './common-prop-types.js'
import { ToggleGroup } from './ToggleGroup.js'
import { Checkbox } from './Checkbox.js'
;('') // TODO: https://github.com/jsdoc/jsdoc/issues/1718

/**
 * @module
 * @param {CheckboxGroup.PropTypes} props
 * @returns {React.Component}
 *
 * @example import { CheckboxGroup } from '@dhis2/ui-core'
 *
 * @see Specification: {@link https://github.com/dhis2/design-system/blob/master/atoms/checkbox.md|Design system}
 * @see Live demo: {@link /demo/?path=/story/checkboxgroup--default|Storybook}
 */

const CheckboxGroup = ({
    children,
    onChange,
    name,
    value,
    className,
    disabled,
    valid,
    warning,
    error,
    dense,
    dataTest,
}) => (
    <ToggleGroup
        onChange={onChange}
        name={name}
        value={value}
        className={className}
        disabled={disabled}
        valid={valid}
        warning={warning}
        error={error}
        dense={dense}
        dataTest={dataTest}
    >
        {children}
    </ToggleGroup>
)

CheckboxGroup.defaultProps = {
    dataTest: 'dhis2-uicore-checkboxgroup',
}

/**
 * @typedef {Object} PropTypes
 * @static
 * @prop {Array.<Checkbox>} children
 * @prop {function} [onChange]
 * @prop {string} name
 *
 * @prop {Array.<String>} [value]
 * @prop {string} [className]
 *
 * @prop {boolean} [disabled]
 * @prop {boolean} [valid] - `valid`, `warning`, and `error` are
 * mutually exclusive
 * @prop {boolean} [warning]
 * @prop {boolean} [error]
 *
 * @prop {boolean} [dense]
 * @prop {string} [dataTest]
 */

const childWithPropTypes = propDefinition => (children, index) => {
    const child = children[index]
    const childPropDefinition = child.type.propTypes

    for (const key in propDefinition) {
        const prop = propDefinition[key]
        const childProp = childPropDefinition[key]

        if (prop !== childProp) {
            return new Error(
                `Child does not implement the required props API for ${key}`
            )
        }
    }

    return undefined
}

CheckboxGroup.propTypes = {
    children: propTypes.arrayOf(
        childWithPropTypes({
            value: Checkbox.propTypes.value,
            onChange: propTypes.func,
            // checked: Checkbox.propTypes.checked,
            checked: propTypes.bool,
        })
    ).isRequired,

    className: propTypes.string,
    dataTest: propTypes.string,
    dense: propTypes.bool,
    disabled: propTypes.bool,
    error: statusPropType,
    name: propTypes.string,
    valid: statusPropType,
    value: propTypes.arrayOf(propTypes.string),
    warning: statusPropType,
    onChange: propTypes.func,
}

export { CheckboxGroup }
