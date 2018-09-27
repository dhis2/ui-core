/** @format */

import React from 'react'
import PropTypes from 'prop-types'
import Field from '../shared/Field'
import IconField, { bem as iconFieldBem } from '../shared/IconField'

function TextField ({
    variant,
    type,
    dense,
    label,
    value,
    onChange,
    leadingIcon,
    trailingIcon,
    error,
    valid,
    warning,
    disabled,
    block,
    multiline,
    required,
    helpText,
}) {
    const InputTag = multiline ? 'textarea' : 'input'
    const inputComponent = (
        <InputTag
            className={iconFieldBem.e('input')}
            value={value}
            onChange={onChange}
            type={type}
            disabled={disabled}
        />
    )

    return (
        <Field
            {...{
                valid,
                warning,
                disabled,
                error,
                dense,
                block,
                helpText,
            }}
        >
            <IconField
                {...{
                    variant,
                    dense,
                    label,
                    value,
                    leadingIcon,
                    trailingIcon,
                    error,
                    valid,
                    warning,
                    disabled,
                    block,
                    multiline,
                    required,
                }}
            >
                {inputComponent}
            </IconField>
        </Field>
    )
}

TextField.propTypes = {
    label: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    dense: PropTypes.bool,
    variant: PropTypes.oneOf(['filled', 'outlined', 'minimal']),
    leadingIcon: PropTypes.string,
    trailingIcon: PropTypes.string,
    type: PropTypes.oneOf([
        'text',
        'password',
        'color',
        'date',
        'datetime-local',
        'email',
        'month',
        'number',
        'range',
        'search',
        'tel',
        'time',
        'url',
        'week',
    ]),
    error: PropTypes.bool,
    valid: PropTypes.bool,
    warning: PropTypes.bool,
    disabled: PropTypes.bool,
    block: PropTypes.bool,
    multiline: PropTypes.bool,
    required: PropTypes.bool,
    helpText: PropTypes.string,
}

TextField.defaultProps = {
    value: '',
    dense: false,
    variant: 'filled',
    type: 'text',
}

export { TextField }
export default TextField
