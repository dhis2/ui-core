/** @format */

import React from 'react'
import PropTypes from 'prop-types'

import { bemClassNames, getRequiredText } from '../../../../utils'
import Icon from '../../../Icon'

import './styles.css'

export const bem = bemClassNames('field')
const FILLED = 'filled'
const OUTLINED = 'outlined'
const MINIMAL = 'minimal'

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

const Field = ({
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
}) => {
    const computedTrailingIcon = computeTrailingIcon(
        trailingIcon,
        error,
        warning,
        valid
    )
    const focusIndicator =
        variant === OUTLINED ? 'notched-outline' : 'bottom-line'
    const wrapperClassName = bem.b(variant, {
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
        <label className={wrapperClassName}>
            {children}
            <span className={bem.e(focusIndicator)} />
            {leadingIcon && (
                <Icon name={leadingIcon} className={bem.e('icon', 'leading')} />
            )}
            {computedTrailingIcon && (
                <Icon
                    name={computedTrailingIcon}
                    className={bem.e('icon', 'trailing')}
                />
            )}
            <span className={bem.e('floating-label')}>
                {getRequiredText(label, required)}
            </span>
        </label>
    )
}

Field.propTypes = {
    label: PropTypes.string.isRequired,
    children: PropTypes.element.isRequired,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    dense: PropTypes.bool,
    variant: PropTypes.oneOf([FILLED, OUTLINED, MINIMAL]),
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

Field.defaultProps = {
    value: '',
    dense: false,
    variant: FILLED,
}

export { Field }
export default Field
