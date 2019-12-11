import React from 'react'
import propTypes from '@dhis2/prop-types'

import { statusPropType, sizePropType } from './common-prop-types.js'
import { FileInput } from './FileInput.js'
import { FileList } from './FileList.js'
import { FileListPlaceholder } from './FileListPlaceholder.js'
import { Field } from './Field.js'
import { Label } from './Label.js'
import { Help } from './Help.js'
;('') // TODO: https://github.com/jsdoc/jsdoc/issues/1718

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
    dataTest,
}) => (
    <Field className={className} dataTest={dataTest}>
        {label && (
            <Label required={required} disabled={disabled} htmlFor={name}>
                {label}
            </Label>
        )}

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

        {helpText && <Help dataTest={`${dataTest}-help`}>{helpText}</Help>}

        {validationText && (
            <Help
                error={error}
                warning={warning}
                valid={valid}
                dataTest={`${dataTest}-validation`}
            >
                {validationText}
            </Help>
        )}

        <FileList>
            {!children && placeholder ? (
                <FileListPlaceholder>{placeholder}</FileListPlaceholder>
            ) : (
                children
            )}
        </FileList>
    </Field>
)

FileInputField.defaultProps = {
    accept: '*',
    dataTest: 'dhis2-uicore-fileinputfield',
}

/**
 * @typedef {Object} PropTypes
 * @static
 *
 * @prop {string} name
 * @prop {function} [onChange]
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
 * @prop {string} [dataTest]
 */
FileInputField.propTypes = {
    accept: propTypes.string,
    buttonLabel: propTypes.string,
    children: propTypes.node,
    className: propTypes.string,
    dataTest: propTypes.string,
    disabled: propTypes.bool,
    error: statusPropType,
    helpText: propTypes.string,
    label: propTypes.string,
    large: sizePropType,
    multiple: propTypes.bool,
    name: propTypes.string,
    placeholder: propTypes.string,
    required: propTypes.bool,
    small: sizePropType,
    tabIndex: propTypes.string,
    valid: statusPropType,
    validationText: propTypes.string,
    warning: statusPropType,
    onChange: propTypes.func,
}

export { FileInputField }
