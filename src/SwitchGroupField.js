import React from 'react'
import propTypes from '@dhis2/prop-types'

import { ToggleGroupField } from './ToggleGroupField.js'

/**
 * @module
 * @param {SwitchGroupField.PropTypes} props
 * @returns {React.Component}
 *
 * @example import { SwitchGroupField } from '@dhis2/ui-core'
 *
 * @see Specification: {@link https://github.com/dhis2/design-system/blob/master/atoms/switch.md|Design system}
 * @see Live demo: {@link /demo/?path=/story/switchgroupfield--default|Storybook}
 */

const SwitchGroupField = ({
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
    label,
    helpText,
    validationText,
    required,
}) => (
    <ToggleGroupField
        onChange={onChange}
        name={name}
        value={value}
        className={className}
        disabled={disabled}
        valid={valid}
        warning={warning}
        error={error}
        dense={dense}
        label={label}
        helpText={helpText}
        validationText={validationText}
        required={required}
    >
        {children}
    </ToggleGroupField>
)

/**
 * @typedef {Object} PropTypes
 * @static
 * @prop {Array.<Switch>} children
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
 * @prop {string} [label]
 * @prop {string} [helpText]
 * @prop {string} [validationText]
 * @prop {boolean} [required]
 */
SwitchGroupField.propTypes = {
    ...ToggleGroupField.propTypes,
    children: propTypes.arrayOf(propTypes.element).isRequired,
    value: propTypes.arrayOf(propTypes.string),
}

export { SwitchGroupField }
