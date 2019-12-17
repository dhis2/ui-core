import cx from 'classnames'
import { resolve } from 'styled-jsx/css'
import propTypes from '@dhis2/prop-types'
import React from 'react'

import { statusPropType } from './common-prop-types.js'
import { spacers } from './theme.js'
import { Field } from './Field.js'
import { Help } from './Help.js'

const labelStyles = resolve`
    label.required::after {
        padding-left: ${spacers.dp4};
        content: '*';
    }
`

const ToggleField = ({
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

    toggleComponent: ToggleComponent,
}) => (
    <Field className={className}>
        <ToggleComponent
            value={value}
            label={label}
            name={name}
            className={cx(labelStyles.className, { required })}
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
        />

        {helpText && <Help>{helpText}</Help>}

        {validationText && (
            <Help error={error} warning={warning} valid={valid}>
                {validationText}
            </Help>
        )}

        {labelStyles.styles}
    </Field>
)

/**
 * @typedef {Object} PropTypes
 * @static
 * @private
 *
 * @prop {string} value
 * @prop {Node} label
 * @prop {string} [name]
 * @prop {string} [className]
 * @prop {string} [tabIndex]
 * @prop {function} [onChange]
 * @prop {function} [onFocus]
 * @prop {function} [onBlur]
 * @prop {boolean} [checked]
 * @prop {boolean} [disabled]
 * @prop {boolean} [valid] - `valid`, `warning`, `error`, `loading`, are mutually exclusive
 * @prop {boolean} [warning]
 * @prop {boolean} [error]
 * @prop {boolean} [dense]
 * @prop {boolean} [initialFocus]
 * @prop {boolean} [required]
 * @prop {string} [helpText]
 * @prop {string} [validationText]
 * @prop {function} toggleComponent
 */
const toggleFieldPropTypes = {
    value: propTypes.string,
    label: propTypes.node.isRequired,

    name: propTypes.string,
    className: propTypes.string,
    tabIndex: propTypes.string,

    onChange: propTypes.func,
    onFocus: propTypes.func,
    onBlur: propTypes.func,

    checked: propTypes.bool,
    disabled: propTypes.bool,
    valid: statusPropType,
    warning: statusPropType,
    error: statusPropType,

    dense: propTypes.bool,
    initialFocus: propTypes.bool,
    required: propTypes.bool,
    helpText: propTypes.string,
    validationText: propTypes.string,
}
ToggleField.propTypes = {
    ...toggleFieldPropTypes,
    toggleComponent: propTypes.func.isRequired,
}

export { ToggleField, toggleFieldPropTypes }
