import React from 'react'
import PropTypes from 'prop-types'
import Icon from '../Icon'
import cx, { rx } from './styles'

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
            className={rx('base', `kind-${kind}`, `size-${size}`, {
                'icon-only': icon && !label && !children,
                icon,
            })}
        >
            {icon && <Icon className={cx('button-icon')} name={icon} />}
            {label || children}
        </button>
    )
}

Button.defaultProps = {
    icon: '',
    label: '',
    kind: 'basic',
    type: 'button',
    size: 'medium',
    disabled: false,
    onClick: undefined,
}

Button.propTypes = {
    icon: PropTypes.string,
    label: PropTypes.string,
    kind: PropTypes.oneOf(['basic', 'primary', 'secondary', 'destructive']),
    type: PropTypes.oneOf(['submit', 'reset', 'button']),
    size: PropTypes.oneOf(['small', 'medium', 'large']),
    disabled: PropTypes.bool,
    onClick: PropTypes.func,
}

export { Button }
export default Button
