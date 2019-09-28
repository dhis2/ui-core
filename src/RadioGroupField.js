import propTypes from '@dhis2/prop-types'
import React from 'react'

import { RadioGroup } from './RadioGroup.js'
import { Field } from './Field.js'
import { FieldSet } from './FieldSet.js'
import { Legend } from './Legend.js'
import { Help } from './Help.js'

const RadioGroupField = ({
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
    label,
    helpText,
    validationText,
    required,
}) => (
    <Field classname={className}>
        <FieldSet>
            {label && <Legend required={required}>{label}</Legend>}

            <RadioGroup
                onChange={onChange}
                name={name}
                value={value}
                className={className}
                disabled={disabled}
                valid={valid}
                warning={warning}
                error={error}
                dense={dense}
            >
                {children}
            </RadioGroup>

            {helpText && <Help>{helpText}</Help>}

            {validationText && (
                <Help error={error} warning={warning} valid={valid}>
                    {validationText}
                </Help>
            )}
        </FieldSet>
    </Field>
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
RadioGroupField.propTypes = {
    ...RadioGroup.propTypes,
    label: propTypes.string,
    helpText: propTypes.string,
    validationText: propTypes.string,
    required: propTypes.bool,
}

export { RadioGroupField }
