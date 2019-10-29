import propTypes from '@dhis2/prop-types'
import React from 'react'

import { statusPropType, singleSelectedPropType } from './common-prop-types.js'

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
 * @see Live demo: {@link /demo/?path=/story/singleselectfield--default|Storybook}
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
            disabled,
            loading,
            selected,
            tabIndex,
            helpText,
            validationText,
            maxHeight,
            children,
            clearable,
            clearText,
            filterable,
            filterPlaceholder,
            placeholder,
            prefix,
            empty,
            loadingText,
            noMatchText,
            initialFocus,
            dense,
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
                    disabled={disabled}
                    clearable={clearable}
                    clearText={clearText}
                    filterable={filterable}
                    filterPlaceholder={filterPlaceholder}
                    placeholder={placeholder}
                    prefix={prefix}
                    empty={empty}
                    loadingText={loadingText}
                    noMatchText={noMatchText}
                    initialFocus={initialFocus}
                    dense={dense}
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
 * @prop {Object} selected
 * @prop {string} [className]
 * @prop {string} [tabIndex]
 * @prop {Array|Object} [children]
 * @prop {boolean} [required]
 * @prop {boolean} [disabled]
 * @prop {boolean} [dense]
 * @prop {boolean} [valid] - `valid`, `warning`, `error`, `loading`, are mutually exclusive
 * @prop {boolean} [warning]
 * @prop {boolean} [error]
 * @prop {boolean} [loading]
 * @prop {function} [onFocus]
 * @prop {function} [onBlur]
 * @prop {boolean} [initialFocus]
 * @prop {string} [validationText]
 * @prop {string} [helpText]
 * @prop {string} clearText
 * @prop {boolean} [clearable]
 * @prop {Array|Object} empty
 * @prop {string} filterPlaceholder
 * @prop {boolean} [filterable]
 * @prop {string} [loadingText]
 * @prop {string} [maxHeight]
 * @prop {string} noMatchText
 * @prop {string} [placeholder]
 * @prop {string} [prefix]
 */
SingleSelectField.propTypes = {
    onChange: propTypes.func.isRequired,
    label: propTypes.string,
    selected: singleSelectedPropType.isRequired,
    className: propTypes.string,
    tabIndex: propTypes.string,
    children: propTypes.node,
    required: propTypes.bool,
    disabled: propTypes.bool,
    dense: propTypes.bool,
    valid: statusPropType,
    warning: statusPropType,
    error: statusPropType,
    loading: propTypes.bool,
    onFocus: propTypes.func,
    onBlur: propTypes.func,
    initialFocus: propTypes.bool,
    validationText: propTypes.string,
    helpText: propTypes.string,
    clearText: propTypes.string.isRequired,
    clearable: propTypes.bool,
    empty: propTypes.node.isRequired,
    filterPlaceholder: propTypes.string,
    filterable: propTypes.bool,
    loadingText: propTypes.string,
    maxHeight: propTypes.string,
    noMatchText: propTypes.string.isRequired,
    placeholder: propTypes.string,
    prefix: propTypes.string,
}

export { SingleSelectField }
