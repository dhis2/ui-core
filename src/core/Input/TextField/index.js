import React from 'react'
import PropTypes from 'prop-types'
import LabelField from '../shared/LabelField'
import labelStyles from '../shared/LabelField/styles'

function TextField({
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

    return (
        <LabelField
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
                helpText,
            }}
        >
            <InputTag
                className={labelStyles('input')}
                value={value}
                onChange={onChange}
                type={type}
                disabled={disabled}
            />
        </LabelField>
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
