import cx from 'classnames'
import propTypes from '@dhis2/prop-types'
import React, { Component, createRef } from 'react'
import css from 'styled-jsx/css'

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

const Input = React.forwardRef((props, ref) => (
    <div>
        <input type="radio" ref={ref} {...props} />

        <style jsx>{`
            div {
                height: 0;
                width: 0;
                overflow: hidden;
            }
        `}</style>
    </div>
))
Input.displayName = 'Input'

/**
 * @module
 *
 * @param {Radio.PropTypes} props
 * @returns {React.Component}
 *
 * @example import { Radio } from '@dhis2/ui-core'
 *
 * @see Specification: {@link https://github.com/dhis2/design-system/blob/master/atoms/radio.md|Design system}
 * @see Live demo: {@link /demo/?path=/story/radio--default|Storybook}
 */
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
            icon,
            label,
            name,
            onChange,
            required,
            tabIndex,
            value,
            status,
        } = this.props
        const { focus } = this.state
        const valid = status === 'valid'
        const error = status === 'error'
        const warning = status === 'warning'

        const classes = cx(icons.className, status, {
            checked: checked && !valid && !error && !warning,
            disabled,
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

/**
 * @typedef {Object} PropTypes
 * @static
 * @prop {function} onChange
 * @prop {string} name
 * @prop {string} value
 * @prop {string} [className]
 * @prop {string} [label]
 * @prop {string} [tabIndex]
 * @prop {Element} [icon]
 *
 * @prop {boolean} [required]
 * @prop {boolean} [disabled]
 * @prop {boolean} [checked]
 * @prop {boolean} [initialFocus]
 *
 * @prop {boolean} [valid] - `valid`, `warning`, and `error` are
 * mutually exclusive
 * @prop {boolean} [warning]
 * @prop {boolean} [error]
 *
 * @prop {function} [onFocus]
 * @prop {function} [onBlur]
 */
Radio.propTypes = {
    onChange: propTypes.func.isRequired,

    name: propTypes.string.isRequired,
    value: propTypes.string,
    className: propTypes.string,
    label: propTypes.string,
    tabIndex: propTypes.string,

    icon: propTypes.element,

    onFocus: propTypes.func,
    onBlur: propTypes.func,

    required: propTypes.bool,
    checked: propTypes.bool,
    disabled: propTypes.bool,
    status: propTypes.oneOfType(['valid', 'error', 'warning']),
    initialFocus: propTypes.bool,
}

export { Radio }
