import React from 'react'
import propTypes from 'prop-types'

import { statusPropType, sizePropType } from './common-prop-types'
import { FileInput } from './FileInput.js'
import { FileList } from './FileList'
import { FileListPlaceholder } from './FileList/FileListPlaceholder'
import { Field } from './Field.js'
import { Label } from './Label.js'
import { Help } from './Help.js'

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

    children: FileList.propTypes.children,

    error: statusPropType,
    valid: statusPropType,
    warning: statusPropType,
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
