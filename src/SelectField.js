import propTypes from '@dhis2/prop-types'
import React from 'react'

import { statusPropType } from './common-prop-types.js'

import { Field } from './Field.js'
import { Label } from './Label.js'
import { Help } from './Help.js'
import { Select } from './Select.js'

/**
 * @module
 *
 * @param {SelectField.PropTypes} props
 * @returns {React.Component}
 *
 * @example import { SelectField } from '@dhis2/ui-core'
 *
 * @see Specification: {@link https://github.com/dhis2/design-system/blob/master/molecules/select.md|Design system}
 * @see Live demo: {@link /demo/?path=/story/select-regular--no-value|Storybook}
 */
class SelectField extends React.Component {
    render() {
        const {
            className,
            onChange,
            onFocus,
            onBlur,
            dense,
            required,
            label,
            disabled,
            name,
            valid,
            error,
            warning,
            loading,
            value,
            tabIndex,
            helpText,
            validationText,
            children,
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

                <Select
                    focus={focus}
                    name={name}
                    value={value}
                    disabled={disabled}
                    dense={dense}
                    tabIndex={tabIndex}
                    onChange={onChange}
                    onFocus={onFocus}
                    onBlur={onBlur}
                    loading={loading}
                >
                    {children}
                </Select>

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
 * @prop {function} onChange
 * @prop {string} label
 * @prop {string} [value]
 * @prop {string} [className]
 * @prop {string} [tabIndex]
 * @prop {Array|Object} [children]
 * @prop {boolean} [required]
 * @prop {boolean} [disabled]
 * @prop {boolean} [dense]
 * @prop {boolean} [valid] - `valid`, `warning`, `error`, `loading`, are
 * mutually exclusive
 * @prop {boolean} [warning]
 * @prop {boolean} [error]
 * @prop {boolean} [loading]
 * @prop {function} [onFocus]
 * @prop {function} [onBlur]
 *
 * @prop {string} [validationText]
 * @prop {string} [helpText]
 * @prop {Object|Array} [children]
 */
SelectField.propTypes = {
    name: propTypes.string.isRequired,
    onChange: propTypes.func.isRequired,

    label: propTypes.string,
    value: propTypes.string,
    className: propTypes.string,
    tabIndex: propTypes.string,

    helpText: propTypes.string,
    validationText: propTypes.string,

    children: propTypes.oneOfType([
        propTypes.arrayOf(
            propTypes.shape({
                tagName: propTypes.oneOf(['OPTION', 'OPTGROUP']),
            })
        ),
        propTypes.shape({
            tagName: propTypes.oneOf(['OPTION', 'OPTGROUP']),
        }),
    ]),

    required: propTypes.bool,
    disabled: propTypes.bool,
    dense: propTypes.bool,
    valid: statusPropType,
    warning: statusPropType,
    error: statusPropType,
    loading: propTypes.bool,
    initialFocus: propTypes.bool,

    onFocus: propTypes.func,
    onBlur: propTypes.func,
}

export { SelectField }
