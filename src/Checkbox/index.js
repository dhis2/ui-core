import React from 'react'
import propTypes from 'prop-types'
import cx from 'classnames'

import { colors, theme } from '../theme.js'
import styles from './styles.js'

import { Indeterminate, Checked, Unchecked } from '../icons/Checkbox.js'

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
        fill: ${colors.grey500};
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

class Checkbox extends React.Component {
    state = {
        indeterminate: this.props.indeterminate,
    }

    onChange = () => {
        this.props.onChange(this.props.name, !this.props.checked)

        if (this.state.indeterminate) {
            this.setState({ indeterminate: false })
        }
    }

    render() {
        const {
            required,
            checked,
            className,
            disabled,
            valid,
            error,
            warning,
        } = this.props

        const classes = cx(icons.className, {
            checked: checked && !valid && !error && !warning,
            disabled,
            valid,
            error,
            warning,
        })

        let icon = <Unchecked className={classes} />

        if (this.state.indeterminate) {
            icon = <Indeterminate className={classes} />
        } else if (this.props.checked) {
            icon = <Checked className={classes} />
        }

        return (
            <label
                className={cx('base', className, {
                    disabled: this.props.disabled,
                })}
            >
                <input
                    type="checkbox"
                    onChange={this.onChange}
                    checked={this.props.checked}
                    disabled={this.props.disabled}
                />
                {icon}

                <span className={cx('label', { required })}>
                    {this.props.label}
                </span>

                {icons.styles}
                <style jsx>{styles}</style>
            </label>
        )
    }
}

Checkbox.propTypes = {
    onChange: propTypes.func.isRequired,
    name: propTypes.string.isRequired,

    className: propTypes.string,
    label: propTypes.string,

    indeterminate: propTypes.bool,
    required: propTypes.bool,
    checked: propTypes.bool,
    disabled: propTypes.bool,
    valid: propTypes.bool,
    warning: propTypes.bool,
    error: propTypes.bool,
}

export { Checkbox }
