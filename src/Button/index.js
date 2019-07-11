import cx from 'classnames'

import React, { Component, createRef } from 'react'
import propTypes from 'prop-types'
import { mutuallyExclusive } from '../prop-validators'

import styles from './styles.js'

export class Button extends Component {
    buttonRef = createRef()

    componentDidMount() {
        if (this.props.initialFocus) {
            this.buttonRef.current.focus()
        }
    }

    getButtonProps() {
        const { as, disabled, type, name, value } = this.props
        return as === 'button' ? { disabled, type, name, value } : {}
    }

    render() {
        const {
            as: Element,
            children,
            icon,
            onClick,
            className,
            primary,
            secondary,
            destructive,
            small,
            large,
        } = this.props

        return (
            <Element
                onClick={onClick}
                className={cx('button', className, {
                    primary,
                    secondary,
                    destructive,
                    small,
                    large,
                    'icon-only': icon && !children,
                    icon,
                })}
                ref={this.buttonRef}
                {...this.getButtonProps()}
            >
                {icon && <span className="button-icon">{icon}</span>}
                {children}

                <style jsx>{styles}</style>
            </Element>
        )
    }
}

Button.defaultProps = {
    type: 'button',
    as: 'button',
}

const variantPropType = mutuallyExclusive(
    ['primary', 'secondary', 'destructive'],
    propTypes.bool
)

const sizePropType = mutuallyExclusive(['small', 'large'], propTypes.bool)

Button.propTypes = {
    onClick: propTypes.func,

    className: propTypes.string,
    icon: propTypes.element,
    name: propTypes.string,
    value: propTypes.string,
    type: propTypes.oneOf(['submit', 'reset', 'button']),
    as: propTypes.oneOf(['button', 'span', 'a']),

    small: sizePropType,
    large: sizePropType,

    primary: variantPropType,
    secondary: variantPropType,
    destructive: variantPropType,

    disabled: propTypes.bool,
    initialFocus: propTypes.bool,
}
