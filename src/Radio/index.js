import React, { Component, createRef } from 'react'
import propTypes from 'prop-types'
import cx from 'classnames'

import { colors, theme } from '../theme.js'
import styles from './styles.js'

import { Checked, Unchecked } from '../icons/Radio.js'

import css from 'styled-jsx/css'

const icons = css.resolve`
    svg {
        height: 24px;
        width: 24px;
        fill: ${theme.default};
    }

    .focus :global(path) {
        stroke: #646464;
        stroke-width: 2px;
    }

    .checked {
        fill: ${colors.teal400};
    }

    .disabled {
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

class Radio extends Component {
    ref = createRef()

    constructor(props) {
        super(props)

        this.state = {
            focus: props.focus,
        }
    }

    componentDidMount() {
        if (this.props.focus) {
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
            onChange,
            name,
            value,
            className,
            label,
            required,
            checked = false,
            disabled,
            valid,
            warning,
            error,
            autocomplete,
            autofocus,
            readonly,
            tabIndex,
            focus = this.state.focus,
        } = this.props

        const classes = cx(icons.className, {
            checked: checked && !valid && !error && !warning,
            disabled,
            valid,
            error,
            warning,
            focus,
        })

        const icon = checked ? (
            <Checked className={classes} />
        ) : (
            <Unchecked className={classes} />
        )

        return (
            <label
                className={cx(className, {
                    disabled,
                })}
            >
                <input
                    ref={this.ref}
                    type="radio"
                    name={name}
                    value={value}
                    focus={focus}
                    checked={checked}
                    disabled={disabled}
                    autocomplete={autocomplete}
                    autofocus={autofocus}
                    tabIndex={tabIndex}
                    readonly={readonly}
                    onChange={onChange}
                    onFocus={this.onFocus}
                    onBlur={this.onBlur}
                />
                {icon}

                <span className={cx({ required })}>{label}</span>

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
    autocomplete: propTypes.string,
    tabIndex: propTypes.string,

    onFocus: propTypes.func,
    onBlur: propTypes.func,

    required: propTypes.bool,
    checked: propTypes.bool,
    disabled: propTypes.bool,
    valid: propTypes.bool,
    warning: propTypes.bool,
    error: propTypes.bool,
    autofocus: propTypes.bool,
    readonly: propTypes.bool,
}

Radio.defaultProps = {
    tabIndex: '0',
}

export { Radio }
