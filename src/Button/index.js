import cx from 'classnames'

import React from 'react'
import propTypes from 'prop-types'

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
    className,
}) {
    return (
        <button
            disabled={disabled}
            onClick={onClick}
            className={cx('base', `kind-${kind}`, `size-${size}`, className, {
                'icon-only': icon && !label && !children,
                icon,
            })}
            type={type}
        >
            {icon && <span className="button-icon">{icon}</span>}
            {label || children}

            <style jsx>{styles}</style>
        </button>
    )
}

Button.defaultProps = {
    kind: 'basic',
    type: 'button',
    size: 'medium',
    disabled: false,
    onClick: undefined,
}

Button.propTypes = {
    className: propTypes.string,
    icon: propTypes.element,
    label: propTypes.string,
    kind: propTypes.oneOf(['basic', 'primary', 'secondary', 'destructive']),
    type: propTypes.oneOf(['submit', 'reset', 'button']),
    size: propTypes.oneOf(['small', 'medium', 'large']),
    disabled: propTypes.bool,
    onClick: propTypes.func,
}

export { Button }
export default Button
