import React, { Component, createRef } from 'react'
import propTypes from 'prop-types'
import cx from 'classnames'
import css from 'styled-jsx/css'

import { colors, theme } from '../theme.js'
import { SwitchIcon } from '../icons/Switch.js'

import styles from './styles'

class Switch extends Component {
    ref = createRef()
    state = {
        focus: this.props.focus,
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
            className,
            label,
            required,
            checked = false,
            disabled,
            valid,
            warning,
            error,
            focus = this.state.focus,
        } = this.props

        return (
            <label
                className={cx(className, {
                    disabled,
                    focus,
                })}
            >
                <input
                    ref={this.ref}
                    type="checkbox"
                    disabled={disabled}
                    name={name}
                    checked={checked}
                    onChange={onChange}
                    onFocus={this.onFocus}
                    onBlur={this.onBlur}
                />

                <SwitchIcon
                    checked={checked}
                    disabled={disabled}
                    valid={valid}
                    warning={warning}
                    error={error}
                />

                <span className={cx({ required, disabled })}>{label}</span>

                <style jsx>{styles}</style>
            </label>
        )
    }
}

Switch.propTypes = {
    onChange: propTypes.func.isRequired,
    name: propTypes.string.isRequired,

    className: propTypes.string,
    label: propTypes.string,

    required: propTypes.bool,
    checked: propTypes.bool,
    disabled: propTypes.bool,
    valid: propTypes.bool,
    warning: propTypes.bool,
    error: propTypes.bool,
    focus: propTypes.bool,

    onFocus: propTypes.func,
    onBlur: propTypes.func,
}

export { Switch }
