import cx from 'classnames'
import propTypes from 'prop-types'
import React, { Component, createRef } from 'react'
import css from 'styled-jsx/css'

import { statusPropType } from './common-prop-types.js'
import { Checked, Unchecked } from './icons/Radio.js'
import { colors, theme } from './theme.js'

import styles from './Radio/styles.js'

const icons = css.resolve`
    svg {
        display: block;
        height: 24px;
        width: 24px;
        fill: ${theme.default};
    }

    .focus {
        fill: ${colors.grey800};
    }

    .checked {
        fill: ${colors.teal400};
    }

    .disabled {
        color: ${theme.disabled};
        fill: ${theme.disabled};
    }

    .error {
        fill: ${theme.error};
    }

    .valid {
        fill: ${theme.valid};
    }

    .warning {
        fill: ${theme.warning};
    }
`

const Input = React.forwardRef(
    (
        { name, value, checked, disabled, tabIndex, onChange, onFocus, onBlur },
        ref
    ) => (
        <div>
            <input
                type="radio"
                ref={ref}
                name={name}
                value={value}
                checked={checked}
                disabled={disabled}
                tabIndex={tabIndex}
                onChange={onChange}
                onFocus={onFocus}
                onBlur={onBlur}
            />

            <style jsx>{`
                div {
                    height: 0;
                    width: 0;
                    overflow: hidden;
                }
            `}</style>
        </div>
    )
)

class Radio extends Component {
    ref = createRef()

    constructor(props) {
        super(props)

        this.state = {
            focus: props.initialFocus,
        }
    }

    componentDidMount() {
        if (this.state.focus) {
            this.ref.current.focus()
        }
    }

    onFocus = e => {
        this.setState({ focus: true })

        if (this.props.onFocus) {
            this.props.onFocus(e)
        }
    }

    onBlur = e => {
        this.setState({ focus: false })

        if (this.props.onBlur) {
            this.props.onBlur(e)
        }
    }

    render() {
        const {
            checked = false,
            className,
            disabled,
            error,
            icon,
            label,
            name,
            onChange,
            required,
            tabIndex,
            valid,
            value,
            warning,
        } = this.props
        const { focus } = this.state

        const classes = cx(icons.className, {
            checked: checked && !valid && !error && !warning,
            disabled,
            valid,
            error,
            warning,
            focus,
        })

        return (
            <label
                className={cx(className, {
                    disabled,
                })}
            >
                <Input
                    ref={this.ref}
                    name={name}
                    value={value}
                    checked={checked}
                    disabled={disabled}
                    tabIndex={tabIndex}
                    onChange={onChange}
                    onFocus={this.onFocus}
                    onBlur={this.onBlur}
                />

                <div className={cx('icon', { focus })}>
                    {checked ? (
                        <Checked className={classes} />
                    ) : (
                        <Unchecked className={classes} />
                    )}
                </div>

                {icon}

                <span className={cx({ required, disabled })}>{label}</span>

                {icons.styles}
                <style jsx>{styles}</style>
            </label>
        )
    }
}

Radio.propTypes = {
    onChange: propTypes.func.isRequired,

    name: propTypes.string.isRequired,
    value: propTypes.string.isRequired,
    className: propTypes.string,
    label: propTypes.string,
    tabIndex: propTypes.string,

    icon: propTypes.element,

    onFocus: propTypes.func,
    onBlur: propTypes.func,

    required: propTypes.bool,
    checked: propTypes.bool,
    disabled: propTypes.bool,
    valid: statusPropType,
    warning: statusPropType,
    error: statusPropType,
    initialFocus: propTypes.bool,
}

export { Radio }
