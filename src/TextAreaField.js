import propTypes from '@dhis2/prop-types'
import React from 'react'

import { statusPropType } from './common-prop-types.js'

import { Field } from './Field.js'
import { Label } from './Label.js'
import { TextArea } from './TextArea.js'
import { Help } from './Help.js'

/**
 * @module
 * @param {TextAreaField.PropTypes} props
 * @returns {React.Component}
 *
 * @example import { TextAreaField } from '@dhis2/ui-core'
 *
 * @see Specification: {@link https://github.com/dhis2/design-system/blob/update-input/atoms/inputfield.md#textarea|Design system}
 * @see Live demo: {@link /demo/?path=/story/textareafield--default|Storybook}
 */
class TextAreaField extends React.Component {
    render() {
        const {
            className,
            onChange,
            onFocus,
            onBlur,
            initialFocus,
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
            autoGrow,
            readOnly,
            resize,
            rows,
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

                <TextArea
                    onFocus={onFocus}
                    onBlur={onBlur}
                    onChange={onChange}
                    name={name}
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
                    autoGrow={autoGrow}
                    readOnly={readOnly}
                    resize={resize}
                    rows={rows}
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

TextAreaField.defaultProps = TextArea.defaultProps

/**
 * @typedef {Object} PropTypes
 * @static
 *
 * @prop {string} name
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
 *
 * @prop {boolean} [autoGrow]
 * @prop {boolean} [readOnly]
 * @prop {string} [resize=vertical] - rezise attribute on the textarea,
 * one of `none`, `both`, `horizontal`, `vertical`
 * @prop {number} [rows=4]
 */
TextAreaField.propTypes = {
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
    readOnly: propTypes.bool,

    dense: propTypes.bool,
    valid: statusPropType,
    warning: statusPropType,
    error: statusPropType,
    loading: propTypes.bool,
    initialFocus: propTypes.bool,

    onBlur: propTypes.func,
    onFocus: propTypes.func,

    autoGrow: propTypes.bool,
    resize: propTypes.oneOf(['none', 'both', 'horizontal', 'vertical']),
    rows: propTypes.number,
}

export { TextAreaField }
