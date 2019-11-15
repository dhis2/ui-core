import propTypes from '@dhis2/prop-types'
import React from 'react'

import { statusPropType } from './common-prop-types.js'

import { Field } from './Field.js'
import { Label } from './Label.js'
import { Input } from './Input.js'
import { Help } from './Help.js'

/**
 * @module
 * @param {InputField.PropTypes} props
 * @returns {React.Component}
 *
 * @example import { InputField } from '@dhis2/ui-core'
 *
 * @see Specification: {@link https://github.com/dhis2/design-system/blob/master/atoms/inputfield.md|Design system}
 * @see Live demo: {@link /demo/?path=/story/inputfield--no-placeholder-no-value|Storybook}
 */
class InputField extends React.Component {
    render() {
        const {
            className,
            onChange,
            onFocus,
            onBlur,
            initialFocus,
            type,
            dense,
            required,
            label,
            disabled,
            readOnly,
            placeholder,
            name,
            valid,
            error,
            warning,
            loading,
            value,
            tabIndex,
            helpText,
            validationText,
            inputWidth,
        } = this.props

        return (
            <Field className={className}>
                {label ? (
                    <Label
                        required={required}
                        disabled={disabled}
                        htmlFor={name}
                    >
                        {label}
                    </Label>
                ) : null}

                <Input
                    onFocus={onFocus}
                    onBlur={onBlur}
                    onChange={onChange}
                    name={name}
                    type={type}
                    value={value || ''}
                    placeholder={placeholder}
                    disabled={disabled}
                    valid={valid}
                    warning={warning}
                    error={error}
                    loading={loading}
                    dense={dense}
                    tabIndex={tabIndex}
                    initialFocus={initialFocus}
                    readOnly={readOnly}
                    width={inputWidth}
                />

                {helpText ? <Help>{helpText}</Help> : null}

                {validationText ? (
                    <Help error={error} warning={warning} valid={valid}>
                        {validationText}
                    </Help>
                ) : null}
            </Field>
        )
    }
}

/**
 * @typedef {Object} PropTypes
 * @static
 *
 * @prop {string} name
 * @prop {string} [type=text]
 * @prop {function} [onChange]
 * @prop {function} [onBlur]
 * @prop {function} [onFocus]
 * @prop {string} [label]
 * @prop {string} [className]
 * @prop {string} [placeholder]
 * @prop {string} [value]
 * @prop {string} [tabIndex]
 * @prop {string} [inputWidth]
 *
 * @prop {boolean} [required]
 * @prop {boolean} [disabled]
 * @prop {boolean} [readOnly]
 * @prop {boolean} [dense] - Compact mode
 * @prop {boolean} [initialFocus]
 *
 * @prop {boolean} [valid] - `valid`, `warning`, `error`, and `loading`
 * are mutually exclusive
 * @prop {boolean} [warning]
 * @prop {boolean} [error]
 * @prop {boolean} [loading]
 *
 * @prop {string} [validationText]
 * @prop {string} [helpText]
 */
InputField.propTypes = {
    onChange: propTypes.func,
    name: propTypes.string,
    label: propTypes.string,
    helpText: propTypes.string,
    validationText: propTypes.string,

    className: propTypes.string,
    placeholder: propTypes.string,
    value: propTypes.string,
    tabIndex: propTypes.string,

    required: propTypes.bool,
    disabled: propTypes.bool,
    readOnly: propTypes.bool,
    dense: propTypes.bool,
    valid: statusPropType,
    warning: statusPropType,
    error: statusPropType,
    loading: propTypes.bool,
    initialFocus: propTypes.bool,

    onBlur: propTypes.func,
    onFocus: propTypes.func,

    type: Input.propTypes.type,
    inputWidth: propTypes.string,
}

export { InputField }
