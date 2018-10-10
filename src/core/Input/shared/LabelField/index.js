import React from 'react'
import PropTypes from 'prop-types'

import { getRequiredText } from '../../../../utils'
import Icon from '../../../Icon'
import Field from '../Field'
import s from './styles'

const computeTrailingIcon = (trailingIcon, error, warning, valid) => {
    switch (true) {
        case Boolean(trailingIcon):
            return trailingIcon
        case error:
            return 'error'
        case warning:
            return 'warning'
        case valid:
            return 'check_circle'
        default:
            return null
    }
}

const LabelField = ({
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
    children,
    multiline,
    block,
    required,
    helpText,
}) => {
    const computedTrailingIcon = computeTrailingIcon(
        trailingIcon,
        error,
        warning,
        valid
    )

    const focusIndicator =
        variant === 'outlined' ? s('notched-outline') : s('bottom-line')

    const wrapperClassName = s('container', variant, {
        'with-value': value !== '',
        'with-trailing-icon': computedTrailingIcon,
        'with-leading-icon': leadingIcon,
        'full-width': block,
        dense,
        error,
        valid,
        warning,
        disabled,
        multiline,
    })

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
            <label className={wrapperClassName}>
                {children}
                <span className={s(focusIndicator)} />
                {leadingIcon && (
                    <Icon name={leadingIcon} className={s('icon', 'leading')} />
                )}
                {computedTrailingIcon && (
                    <Icon
                        name={computedTrailingIcon}
                        className={s('icon', 'trailing')}
                    />
                )}
                <span className={s('floating')}>
                    {getRequiredText(label, required)}
                </span>
            </label>
        </Field>
    )
}

LabelField.propTypes = {
    label: PropTypes.string.isRequired,
    children: PropTypes.element.isRequired,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    dense: PropTypes.bool,
    variant: PropTypes.oneOf(['filled', 'outlined', 'minimal']),
    leadingIcon: PropTypes.string,
    trailingIcon: PropTypes.string,
    error: PropTypes.bool,
    valid: PropTypes.bool,
    warning: PropTypes.bool,
    disabled: PropTypes.bool,
    block: PropTypes.bool,
    multiline: PropTypes.bool,
    required: PropTypes.bool,
    helpText: PropTypes.string,
}

LabelField.defaultProps = {
    value: '',
    dense: false,
    variant: 'filled',
}

export { LabelField }
export default LabelField
