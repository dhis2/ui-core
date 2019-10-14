import React from 'react'
import propTypes from '@dhis2/prop-types'

import { sizePropType } from './common-prop-types'
import { FileInput } from './FileInput.js'
import { FileList, FileListItem, FileListPlaceholder } from './FileList.js'
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
    status,
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
            status={status}
            accept={accept}
            multiple={multiple}
            small={small}
            large={large}
            disabled={disabled}
            tabIndex={tabIndex}
            name={name}
        />

        {helpText ? <Help>{helpText}</Help> : null}

        {validationText ? <Help status={status}>{validationText}</Help> : null}

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
    onChange: propTypes.func.isRequired,
    name: propTypes.string.isRequired,
    label: propTypes.string,
    buttonLabel: propTypes.string,
    helpText: propTypes.string,
    validationText: propTypes.string,

    className: propTypes.string,
    placeholder: propTypes.string,
    tabIndex: propTypes.string,

    children: propTypes.oneOfType([
        propTypes.instanceOfComponent(FileListItem),
        propTypes.arrayOf(propTypes.instanceOfComponent(FileListItem)),
    ]),

    status: propTypes.oneOf(['warning', 'error', 'valid']),
    small: sizePropType,
    large: sizePropType,
    required: propTypes.bool,
    disabled: propTypes.bool,

    accept: propTypes.string,
    multiple: propTypes.bool,
}

FileInputField.defaultProps = {
    accept: '*',
}

export { FileInputField }
