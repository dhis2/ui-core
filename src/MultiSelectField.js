import propTypes from '@dhis2/prop-types'
import React from 'react'

import { statusPropType, multiSelectedPropType } from './common-prop-types.js'

import { Field } from './Field.js'
import { Label } from './Label.js'
import { Help } from './Help.js'
import { MultiSelect } from './MultiSelect.js'
import { Constrictor } from './Constrictor.js'

/**
 * @module
 *
 * @param {MultiSelectField.PropTypes} props
 * @returns {React.Component}
 *
 * @example import { MultiSelectField } from '@dhis2/ui-core'
 *
 * @see Specification: {@link https://github.com/dhis2/design-system/blob/master/molecules/select.md|Design system}
 * @see Live demo: {@link /demo/?path=/story/multiselectfield--default|Storybook}
 */
class MultiSelectField extends React.Component {
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
            disabled,
            warning,
            loading,
            selected,
            tabIndex,
            helpText,
            validationText,
            maxHeight,
            inputMaxHeight,
            inputWidth,
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
                {label && (
                    <Label required={required} disabled={disabled}>
                        {label}
                    </Label>
                )}

                <Constrictor width={inputWidth} minWidth="100px">
                    <MultiSelect
                        selected={selected}
                        tabIndex={tabIndex}
                        maxHeight={maxHeight}
                        inputMaxHeight={inputMaxHeight}
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
                    </MultiSelect>
                </Constrictor>

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

MultiSelectField.defaultProps = {
    selected: [],
}

/**
 * @typedef {Object} PropTypes
 * @static
 *
 * @prop {function} [onChange]
 * @prop {string} label
 * @prop {Array} selected
 * @prop {string} [className]
 * @prop {string} [tabIndex]
 * @prop {Node} [children]
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
 * @prop {string} [clearText] - Only required if clearable is true
 * @prop {boolean} [clearable]
 * @prop {Node} [empty]
 * @prop {string} [filterPlaceholder]
 * @prop {boolean} [filterable]
 * @prop {string} [loadingText]
 * @prop {string} [maxHeight]
 * @prop {string} [inputMaxHeight]
 * @prop {string} [inputWidth]
 * @prop {string} [noMatchText] - Only required if filterable is true
 * @prop {string} [placeholder]
 * @prop {string} [prefix]
 */
MultiSelectField.propTypes = {
    onChange: propTypes.func,
    label: propTypes.string,
    selected: multiSelectedPropType.isRequired,
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
    clearText: propTypes.requiredIf(props => props.clearable, propTypes.string),
    clearable: propTypes.bool,
    empty: propTypes.node,
    filterPlaceholder: propTypes.string,
    filterable: propTypes.bool,
    loadingText: propTypes.string,
    maxHeight: propTypes.string,
    inputMaxHeight: propTypes.string,
    inputWidth: propTypes.string,
    noMatchText: propTypes.requiredIf(
        props => props.filterable,
        propTypes.string
    ),
    placeholder: propTypes.string,
    prefix: propTypes.string,
}

export { MultiSelectField }
