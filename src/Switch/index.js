import React, { Component, createRef } from 'react'
import propTypes from 'prop-types'
import cx from 'classnames'
import css from 'styled-jsx/css'

import { colors, theme } from '../theme.js'
import { SwitchIcon } from '../icons/Switch.js'

import styles from './styles'

const Input = React.forwardRef(
    ({ name, disabled, checked, onChange, onFocus, onBlur }, ref) => (
        <div>
            <input
                type="checkbox"
                ref={ref}
                name={name}
                disabled={disabled}
                checked={checked}
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

class Switch extends Component {
    ref = createRef()
    state = {
        focus: this.props.initialFocus,
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
        } = this.props
        const { focus } = this.state

        return (
            <label
                className={cx(className, {
                    disabled,
                    focus,
                })}
            >
                <Input
                    ref={this.ref}
                    name={name}
                    onBlur={this.onBlur}
                    onFocus={this.onFocus}
                    checked={checked}
                    disabled={disabled}
                    onChange={onChange}
                />

                <SwitchIcon
                    checked={checked}
                    disabled={disabled}
                    valid={valid}
                    warning={warning}
                    error={error}
                    focus={focus}
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
    initialFocus: propTypes.bool,

    onFocus: propTypes.func,
    onBlur: propTypes.func,
}

export { Switch }
