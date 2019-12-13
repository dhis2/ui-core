import React from 'react'

import { ToggleField, toggleFieldPropTypes } from './ToggleField.js'
import { Switch } from './Switch.js'
;('') // TODO: https://github.com/jsdoc/jsdoc/issues/1718

/**
 * @module
 * @param {SwitchField.PropTypes} props
 * @returns {React.Component}
 *
 * @example import { SwitchField } from '@dhis2/ui-core'
 *
 * @see Specification: {@link https://github.com/dhis2/design-system/blob/master/atoms/switch.md|Design system}
 * @see Live demo: {@link /demo/?path=/story/switchfield--default|Storybook}
 */

const SwitchField = ({
    value,
    label,
    name,
    className,
    tabIndex,
    onChange,
    onFocus,
    onBlur,
    checked,
    disabled,
    valid,
    warning,
    error,
    dense,
    initialFocus,
    required,
    helpText,
    validationText,
}) => (
    <ToggleField
        toggleComponent={Switch}
        value={value}
        label={label}
        name={name}
        className={className}
        tabIndex={tabIndex}
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
        checked={checked}
        disabled={disabled}
        valid={valid}
        warning={warning}
        error={error}
        dense={dense}
        initialFocus={initialFocus}
        required={required}
        helpText={helpText}
        validationText={validationText}
    />
)

/**
 * @typedef {Object} PropTypes
 * @static
 * @prop {string} value
 * @prop {string} label
 *
 * @prop {string} [name]
 * @prop {string} [className]
 * @prop {string} [tabIndex]
 *
 * @prop {function} [onChange]
 * @prop {function} [onFocus]
 * @prop {function} [onBlur]
 *
 * @prop {boolean} [checked]
 * @prop {boolean} [disabled]
 *
 * @prop {boolean} [valid] - `valid`, `warning`, and `error` are
 * mutually exclusive
 * @prop {boolean} [warning]
 * @prop {boolean} [error]
 *
 * @prop {boolean} [dense]
 * @prop {boolean} [initialFocus]
 * @prop {boolean} [required]
 * @prop {string} [helpText]
 * @prop {string} [validationText]
 */
SwitchField.propTypes = toggleFieldPropTypes

export { SwitchField }
