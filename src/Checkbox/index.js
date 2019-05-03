import React, { Fragment } from 'react'
import propTypes from 'prop-types'
import cx from 'classnames'
import css from 'styled-jsx/css'

import { colors, theme } from '../theme'
import { Indeterminate, Checked, Unchecked } from '../icons/Checkbox'
import { Icon } from './Icon'
import { Label } from './Label'
import { Input } from './Input'

class Checkbox extends React.Component {
    state = {
        indeterminate: this.props.indeterminate,
        checked: this.props.defaultChecked || false,
    }

    onChange = evt => {
        const { checked } = evt.target
        const indeterminate = this.state.indeterminate ? false : null

        this.setState({
            checked,
            indeterminate,
        })

        this.props.onChange(this.props.name, checked)
    }

    render() {
        const {
            required,
            className,
            disabled,
            valid,
            error,
            warning,
            checked = this.state.checked,
        } = this.props

        return (
            <label
                className={cx('base', className, {
                    disabled: this.props.disabled,
                })}
            >
                <Input
                    onChange={this.onChange}
                    checked={checked}
                    disabled={this.props.disabled}
                />

                <Icon
                    checked={checked}
                    disabled={disabled}
                    valid={valid}
                    error={error}
                    warning={warning}
                    indeterminate={this.state.indeterminate}
                />

                <Label required={required}>{this.props.label}</Label>

                <style jsx>{`
                    label {
                        display: flex;
                        flex-direction: row;
                        align-items: center;
                        justify-content: flex-start;
                        cursor: pointer;
                        pointer-events: all;
                        user-select: none;
                    }

                    .disabled {
                        cursor: not-allowed;
                        color: ${theme.disabled};
                    }
                `}</style>
            </label>
        )
    }
}

Checkbox.propTypes = {
    name: propTypes.string.isRequired,

    className: propTypes.string,
    label: propTypes.string,

    indeterminate: propTypes.bool,
    required: propTypes.bool,
    checked: propTypes.bool,
    defaultChecked: propTypes.bool,
    disabled: propTypes.bool,
    valid: propTypes.bool,
    warning: propTypes.bool,
    error: propTypes.bool,

    onChange: propTypes.func,
}

export { Checkbox }
