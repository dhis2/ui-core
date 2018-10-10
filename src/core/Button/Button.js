import React from 'react'
import PropTypes from 'prop-types'
import Icon from '../Icon'
import s from './styles'

function Button({ role, type, kind, icon, label, active, disabled, onClick }) {
    return (
        <button
            type={type}
            role={role}
            disabled={disabled}
            onClick={onClick}
            className={s('button', kind, { active })}
        >
            {icon && <Icon name={icon} />}
            {label && <span>{label}</span>}
        </button>
    )
}

Button.defaultProps = {
    icon: '',
    label: '',
    role: 'button',
    type: 'button',
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
    type: PropTypes.oneOf(['submit', 'reset', 'button']),
    kind: PropTypes.oneOf(['flat', 'raised', 'primary', 'outlined', 'circle']),
    onClick: PropTypes.func,
}

export { Button }
export default Button
