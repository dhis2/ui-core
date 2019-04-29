import React from 'react'
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

class Radio extends React.Component {
    state = {
        checked: this.props.defaultChecked || false,
    }

    onChange = evt => {
        const { checked } = evt.target

        this.setState({ checked })
        this.props.onChange(this.props.name, checked)
    }

    render() {
        const {
            required,
            valid,
            error,
            warning,
            className,
            disabled,
            checked = this.state.checked,
        } = this.props
        const classes = cx(icons.className, {
            checked: checked && !valid && !error && !warning,
            disabled,
            valid,
            error,
            warning,
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
                    type="radio"
                    name={this.props.name}
                    value={this.props.value}
                    checked={checked}
                    disabled={this.props.disabled}
                    onChange={this.onChange}
                />
                {icon}

                <span className={cx({ required })}>{this.props.label}</span>

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

    required: propTypes.bool,
    checked: propTypes.bool,
    defaultChecked: propTypes.bool,
    disabled: propTypes.bool,
    valid: propTypes.bool,
    warning: propTypes.bool,
    error: propTypes.bool,
}

export { Radio }
