import React from 'react'
import PropTypes from 'prop-types'
import Icon from '../Icon'
import s from './styles'

function Button({ role, type, kind, icon, label, disabled, onClick }) {
    return (
        <button
            disabled={disabled}
            onClick={onClick}
            className={s('button', kind, {
                'icon-only': icon && !label,
            })}
        >
            {icon && <Icon name={icon} />}
            {label}
        </button>
    )
}

Button.defaultProps = {
    icon: '',
    label: '',
    kind: 'raised',
    disabled: false,
    onClick: undefined,
}

Button.propTypes = {
    label: PropTypes.string,
    icon: PropTypes.string,
    disabled: PropTypes.bool,
    type: PropTypes.oneOf(['submit', 'reset', 'button']),
    kind: PropTypes.oneOf(['flat', 'raised', 'primary', 'outlined', 'circle']),
    onClick: PropTypes.func,
}

export { Button }
export default Button
