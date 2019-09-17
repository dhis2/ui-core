import propTypes from 'prop-types'
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
 * @see Live demo: {@link /demo/?path=/story/input-regular--no-placeholder-no-value|Storybook}
 */
class InputField extends React.Component {
    render() {
        const {
            className,
            onChange,
            type,
            dense,
            required,
            label,
            disabled,
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
        } = this.props

        return (
            <Field className={className}>
                {label ? (
                    <Label
                        focus={focus}
                        required={required}
                        valid={valid}
                        warning={warning}
                        error={error}
                        dense={dense}
                        disabled={disabled}
                        value={focus || value}
                        label={label}
                        htmlFor={name}
                    />
                ) : null}

                <Input
                    focus={focus}
                    onFocus={this.onFocus}
                    onBlur={this.onBlur}
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

InputField.defaultProps = {
    type: 'text',
    onBlur: () => {},
    onFocus: () => {},
}

/**
 * @typedef {Object} PropTypes
 * @static
 *
 * @prop {string} name
 * @prop {string} [type=text]
 * @prop {function} onChange
 * @prop {function} [onBlur=() => {}]
 * @prop {function} [onFocus=() => {}]
 * @prop {string} [label]
 * @prop {string} [className]
 * @prop {string} [placeholder]
 * @prop {string} [value]
 * @prop {string} [tabIndex]
 *
 * @prop {boolean} [required]
 * @prop {boolean} [disabled]
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
    onChange: propTypes.func.isRequired,
    name: propTypes.string.isRequired,
    label: propTypes.string,
    helpText: propTypes.string,
    validationText: propTypes.string,

    className: propTypes.string,
    placeholder: propTypes.string,
    value: propTypes.string,
    tabIndex: propTypes.string,

    required: propTypes.bool,
    disabled: propTypes.bool,
    dense: propTypes.bool,
    valid: statusPropType,
    warning: statusPropType,
    error: statusPropType,
    loading: propTypes.bool,
    initialFocus: propTypes.bool,

    onBlur: propTypes.func,
    onFocus: propTypes.func,

    type: propTypes.oneOf(['text', 'email', 'number', 'password', 'url']),
}

export { InputField }
