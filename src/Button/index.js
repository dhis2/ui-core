import cx from 'classnames'

import React from 'react'
import propTypes from 'prop-types'

import styles from './styles.js'

const Button = React.forwardRef(
    (
        {
            type,
            children,
            icon,
            name,
            value,
            disabled,
            onClick,
            className,
            primary,
            secondary,
            destructive,
            small,
            large,
        },
        ref
    ) => (
        <button
            disabled={disabled}
            onClick={evt => onClick && onClick(name, value)}
            className={cx(className, {
                primary,
                secondary,
                destructive,
                small,
                large,
                'icon-only': icon && !children,
                icon,
            })}
            type={type}
            name={name}
            value={value}
            ref={ref}
        >
            {icon && <span className="button-icon">{icon}</span>}
            {children}

            <style jsx>{styles}</style>
        </button>
    )
)

Button.defaultProps = {
    type: 'button',
}

Button.propTypes = {
    className: propTypes.string,
    icon: propTypes.element,
    name: propTypes.string,
    value: propTypes.string,
    type: propTypes.oneOf(['submit', 'reset', 'button']),

    small: propTypes.bool,
    large: propTypes.bool,

    primary: propTypes.bool,
    secondary: propTypes.bool,
    destructive: propTypes.bool,

    disabled: propTypes.bool,
    onClick: propTypes.func,
}

export { Button }
