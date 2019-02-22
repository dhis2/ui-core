import cx from 'classnames'

import React from 'react'
import PropTypes from 'prop-types'

import Icon from '../Icon'

import styles from './styles.js'

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
            className={cx('base', `kind-${kind}`, `size-${size}`, {
                'icon-only': icon && !label && !children,
                icon,
            })}
        >
            {icon && <span className="button-icon">{icon}</span>}
            {label || children}

            <style jsx>{styles}</style>
        </button>
    )
}

Button.defaultProps = {
    icon: null,
    label: '',
    kind: 'basic',
    type: 'button',
    size: 'medium',
    disabled: false,
    onClick: undefined,
}

Button.propTypes = {
    icon: PropTypes.element,
    label: PropTypes.string,
    kind: PropTypes.oneOf(['basic', 'primary', 'secondary', 'destructive']),
    type: PropTypes.oneOf(['submit', 'reset', 'button']),
    size: PropTypes.oneOf(['small', 'medium', 'large']),
    disabled: PropTypes.bool,
    onClick: PropTypes.func,
}

export { Button }
export default Button
