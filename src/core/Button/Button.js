import React from 'react'
import PropTypes from 'prop-types'
import Icon from '../Icon'
import s from './styles'

function Button({
    role,
    type,
    size,
    kind,
    icon,
    label,
    active,
    disabled,
    onClick,
}) {
    return (
        <button
            type={type}
            role={role}
            disabled={disabled}
            onClick={onClick}
            className={s('button', kind, size, { active })}
        >
            {icon && <Icon name={icon} />}
            {label}
        </button>
    )
}

Button.defaultProps = {
    icon: '',
    label: '',
    role: 'button',
    type: 'button',
    size: 'medium',
    kind: 'raised',
    active: false,
    disabled: false,
    onClick: undefined,
}

Button.propTypes = {
    role: PropTypes.string,
    label: PropTypes.string,
    icon: PropTypes.string,
    active: PropTypes.bool,
    disabled: PropTypes.bool,
    size: PropTypes.oneOf(['small', 'medium', 'large']),
    type: PropTypes.oneOf(['submit', 'reset', 'button']),
    kind: PropTypes.oneOf(['flat', 'raised', 'primary', 'outlined', 'circle']),
    onClick: PropTypes.func,
}

export { Button }
export default Button
