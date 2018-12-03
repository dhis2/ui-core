import React from 'react'
import PropTypes from 'prop-types'
import Icon from '../Icon'
import s from './styles'

function Button({
    type,
    children,
    kind,
    size,
    icon,
    label,
    disabled,
    onClick,
}) {
    return (
        <button
            disabled={disabled}
            onClick={onClick}
            className={s('base', `kind-${kind}`, `size-${size}`, {
                'icon-only': icon && !label && !children,
                icon,
            })}
        >
            {icon && <Icon className={s('button-icon')} name={icon} />}
            {label || children}
        </button>
    )
}

Button.defaultProps = {
    icon: '',
    label: '',
    kind: 'basic',
    size: 'medium',
    disabled: false,
    onClick: undefined,
}

Button.propTypes = {
    label: PropTypes.string,
    icon: PropTypes.string,
    disabled: PropTypes.bool,
    type: PropTypes.oneOf(['submit', 'reset', 'button']),
    kind: PropTypes.oneOf(['basic', 'primary', 'secondary', 'destructive']),
    size: PropTypes.oneOf(['small', 'medium', 'large']),
    onClick: PropTypes.func,
}

export { Button }
export default Button
