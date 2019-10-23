import propTypes from '@dhis2/prop-types'
import React from 'react'

import { statusPropType } from './common-prop-types.js'

import { Field } from './Field.js'
import { Label } from './Label.js'
import { Help } from './Help.js'
import { SingleSelect } from './SingleSelect.js'

/**
 * @module
 *
 * @param {SingleSelectField.PropTypes} props
 * @returns {React.Component}
 *
 * @example import { SingleSelectField } from '@dhis2/ui-core'
 *
 * @see Specification: {@link https://github.com/dhis2/design-system/blob/master/molecules/select.md|Design system}
 * @see Live demo: {@link /demo/?path=/story/select-regular--no-value|Storybook}
 */
class SingleSelectField extends React.Component {
    render() {
        const {
            className,
            onChange,
            onFocus,
            onBlur,
            required,
            label,
            valid,
            error,
            warning,
            loading,
            selected,
            tabIndex,
            helpText,
            validationText,
            maxHeight,
            children,
            clearable,
            filtered,
            placeholder,
            prefix,
            empty,
        } = this.props

        return (
            <Field className={className}>
                {label && <Label required={required}>{label}</Label>}

                <SingleSelect
                    selected={selected}
                    tabIndex={tabIndex}
                    maxHeight={maxHeight}
                    onChange={onChange}
                    onFocus={onFocus}
                    onBlur={onBlur}
                    loading={loading}
                    error={error}
                    warning={warning}
                    valid={valid}
                    clearable={clearable}
                    filtered={filtered}
                    placeholder={placeholder}
                    prefix={prefix}
                    empty={empty}
                >
                    {children}
                </SingleSelect>

                {helpText && <Help>{helpText}</Help>}

                {validationText && (
                    <Help error={error} warning={warning} valid={valid}>
                        {validationText}
                    </Help>
                )}
            </Field>
        )
    }
}

/**
 * @typedef {Object} PropTypes
 * @static
 *
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
 * @prop {boolean} [initialFocus]
 *
 * @prop {string} [validationText]
 * @prop {string} [helpText]
 * @prop {Object|Array} [children]
 */
SingleSelectField.propTypes = {
    onChange: propTypes.func.isRequired,

    label: propTypes.string,
    selected: propTypes.object,
    className: propTypes.string,
    tabIndex: propTypes.string,
    maxHeight: propTypes.string,
    clearable: propTypes.bool,
    filtered: propTypes.bool,
    placeholder: propTypes.string,
    prefix: propTypes.string,
    empty: propTypes.node,

    helpText: propTypes.string,
    validationText: propTypes.string,

    children: propTypes.node,

    required: propTypes.bool,
    valid: statusPropType,
    warning: statusPropType,
    error: statusPropType,
    loading: propTypes.bool,

    onFocus: propTypes.func,
    onBlur: propTypes.func,
}

export { SingleSelectField }
