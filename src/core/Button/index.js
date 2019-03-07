import cx from 'classnames'

import React from 'react'
import PropTypes from 'prop-types'

import styles from './styles.js'
import { fonts } from '../theme.js'

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
        >
            {icon && <span className="button-icon">{icon}</span>}
            {label || children}

            <style jsx>{fonts}</style>
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
    className: PropTypes.string,
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
