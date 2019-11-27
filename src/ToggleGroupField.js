import propTypes from '@dhis2/prop-types'
import React from 'react'

import { ToggleGroup } from './ToggleGroup.js'
import { Field } from './Field.js'
import { FieldSet } from './FieldSet.js'
import { Legend } from './Legend.js'
import { Help } from './Help.js'

const ToggleGroupField = ({
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
            >
                {children}
            </ToggleGroup>

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
 *
 * @prop {string} [label]
 * @prop {string} [helpText]
 * @prop {string} [validationText]
 * @prop {boolean} [required]
 */
ToggleGroupField.propTypes = {
    ...ToggleGroup.propTypes,
    helpText: propTypes.string,
    label: propTypes.string,
    required: propTypes.bool,
    validationText: propTypes.string,
}

export { ToggleGroupField }
