import React from 'react'
import propTypes from 'prop-types'
import cx from 'classnames'
import css from 'styled-jsx/css'

import { colors, theme } from '../theme.js'
import { SwitchIcon } from '../icons/Switch.js'

import styles from './styles'

class Switch extends React.Component {
    state = {
        checked: this.props.checked,
    }

    onChange = () => {
        if (this.props.disabled) {
            return
        }

        const checked = !this.state.checked
        this.setState({
            checked,
        })

        this.props.onChange(this.props.name, checked)
    }

    render() {
        const {
            required,
            valid,
            error,
            warning,
            checked,
            className,
            disabled,
            name,
        } = this.props

        return (
            <label
                className={cx(className, {
                    disabled,
                })}
            >
                <input
                    type="checkbox"
                    disabled={disabled}
                    name={name}
                    checked={this.state.checked}
                    onChange={this.onChange}
                />

                <SwitchIcon
                    checked={this.state.checked}
                    disabled={disabled}
                    valid={valid}
                    warning={warning}
                    error={error}
                />

                <span className={cx({ required, disabled })}>
                    {this.props.label}
                </span>

                <style jsx>{styles}</style>
            </label>
        )
    }
}

Switch.propTypes = {
    name: propTypes.string.isRequired,
    onChange: propTypes.func.isRequired,

    className: propTypes.string,
    label: propTypes.string,

    required: propTypes.bool,
    checked: propTypes.bool,
    disabled: propTypes.bool,
    valid: propTypes.bool,
    warning: propTypes.bool,
    error: propTypes.bool,
}

export { Switch }
