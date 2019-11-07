import React from 'react'
import propTypes from '@dhis2/prop-types'

import { FileInput } from './FileInput.js'
import { FileList } from './FileList.js'
import { FileListItem } from './FileListItem.js'
import { FileListPlaceholder } from './FileListPlaceholder.js'
import { Field } from './Field.js'
import { Label } from './Label.js'
import { Help } from './Help.js'

/**
 * @module
 * @param {FileInputField.PropTypes} props
 * @returns {React.Component}
 *
 * @example import { FileInputField } from '@dhis2/ui-core'
 *
 * @see Specification: {@link https://github.com/dhis2/design-system/blob/master/atoms/fileinput.md|Design system}
 * @see Live demo: {@link /demo/?path=/story/fileinputfield--default|Storybook}
 */
const FileInputField = ({
    onChange,
    name,
    label,
    buttonLabel,
    helpText,
    validationText,
    className,
    placeholder,
    tabIndex,
    children,
    error,
    valid,
    warning,
    small,
    large,
    required,
    disabled,
    accept,
    multiple,
}) => (
    <Field className={className}>
        {label ? (
            <Label required={required} disabled={disabled} htmlFor={name}>
                {label}
            </Label>
        ) : null}

        <FileInput
            onChange={onChange}
            className={className}
            buttonLabel={buttonLabel}
            error={error}
            valid={valid}
            warning={warning}
            accept={accept}
            multiple={multiple}
            small={small}
            large={large}
            disabled={disabled}
            tabIndex={tabIndex}
            name={name}
        />

        {helpText ? <Help>{helpText}</Help> : null}

        {validationText ? (
            <Help error={error} warning={warning} valid={valid}>
                {validationText}
            </Help>
        ) : null}

        <FileList>
            {!children && placeholder ? (
                <FileListPlaceholder>{placeholder}</FileListPlaceholder>
            ) : (
                children
            )}
        </FileList>
    </Field>
)

/**
 * @typedef {Object} PropTypes
 * @static
 *
 * @prop {string} name
 * @prop {function} onChange
 * @prop {string} [label]
 * @prop {string} [buttonLabel]
 * @prop {string} [className]
 * @prop {string} [placeholder]
 * @prop {string} [tabIndex]
 *
 * @prop {boolean} [required]
 * @prop {boolean} [disabled]
 *
 * @prop {boolean} [valid] - `valid`, `warning` and `error` are mutually exclusive
 * @prop {boolean} [warning]
 * @prop {boolean} [error]
 *
 * @prop {boolean} [small] - `small` and `large` are mutually exclusive
 * @prop {boolean} [large]
 *
 * @prop {string} [validationText]
 * @prop {string} [helpText]
 *
 * @prop {FileListItem|Array.<FileListItem>} [children]
 * @prop {string} [accept=*] - the `accept` attribute of the native file input https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file#accept
 * @prop {boolean} [multiple] - the `multiple` attribute of the native file input https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file#multiple
 */
FileInputField.propTypes = {
    ...FileInput.propTypes,
    label: propTypes.string,
    required: propTypes.bool,
    helpText: propTypes.string,
    validationText: propTypes.string,
    placeholder: propTypes.string,
    children: propTypes.oneOfType([
        propTypes.instanceOfComponent(FileListItem),
        propTypes.arrayOf(propTypes.instanceOfComponent(FileListItem)),
    ]),
}

FileInputField.defaultProps = {
    accept: '*',
}

export { FileInputField }
