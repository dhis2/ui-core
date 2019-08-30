import cx from 'classnames'
import propTypes from 'prop-types'
import React, { Component, createRef } from 'react'

import { buttonVariantPropType, sizePropType } from './common-prop-types.js'
import styles from './Button/styles.js'

export class Button extends Component {
    buttonRef = createRef()

    componentDidMount() {
        if (this.props.initialFocus) {
            this.buttonRef.current.focus()
        }
    }

    render() {
        const {
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
        } = this.props

        return (
            <button
                disabled={disabled}
                onClick={onClick}
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
                ref={this.buttonRef}
            >
                {icon && <span className="button-icon">{icon}</span>}
                {children}

                <style jsx>{styles}</style>
            </button>
        )
    }
}

Button.defaultProps = {
    type: 'button',
}

Button.propTypes = {
    /** The label of the button */
    children: propTypes.string,
    onClick: propTypes.func,

    className: propTypes.string,
    icon: propTypes.element,
    name: propTypes.string,
    value: propTypes.string,
    type: propTypes.oneOf(['submit', 'reset', 'button']),

    /** `small`, and `large` are mutually exclusive boolean props */
    small: sizePropType,

    /** `small`, and `large` are mutually exclusive boolean props */
    large: sizePropType,

    /** `primary`, `secondary`, and `destructive` are mutually exclusive boolean props */
    primary: buttonVariantPropType,

    /** `primary`, `secondary`, and `destructive` are mutually exclusive boolean props */
    secondary: buttonVariantPropType,

    /** `primary`, `secondary`, and `destructive` are mutually exclusive boolean props */
    destructive: buttonVariantPropType,

    disabled: propTypes.bool,
    initialFocus: propTypes.bool,
}
