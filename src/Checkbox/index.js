import React, { Component, Fragment } from 'react'
import propTypes from 'prop-types'
import cx from 'classnames'
import css from 'styled-jsx/css'

import { colors, theme } from '../theme'
import { Indeterminate, Checked, Unchecked } from '../icons/Checkbox'
import { Icon } from './Icon'
import { Label } from './Label'
import { Input } from './Input'

class Checkbox extends Component {
    constructor(props) {
        super(props)

        this.state = {
            focus: props.initialFocus,
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
            label,
            className,
            indeterminate,
            required,
            checked = false,
            disabled,
            valid,
            warning,
            error,
            autocomplete,
            autofocus,
            tabIndex,
            readonly,
        } = this.props
        const { focus } = this.state

        return (
            <Fragment>
                <label
                    className={cx('base', className, {
                        disabled,
                        focus,
                    })}
                >
                    <Input
                        name={name}
                        value={value}
                        checked={checked}
                        disabled={disabled}
                        focus={focus}
                        onChange={onChange}
                        onFocus={this.onFocus}
                        onBlur={this.onBlur}
                        autocomplete={autocomplete}
                        autofocus={autofocus}
                        tabIndex={tabIndex}
                        readonly={readonly}
                    />

                    <Icon
                        focus={focus}
                        checked={checked}
                        disabled={disabled}
                        valid={valid}
                        error={error}
                        warning={warning}
                        indeterminate={indeterminate}
                    />

                    <Label required={required}>{label}</Label>

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

                        .focus {
                            outline: 1px;
                        }
                    `}</style>
                </label>
            </Fragment>
        )
    }
}

Checkbox.propTypes = {
    onChange: propTypes.func.isRequired,

    value: propTypes.string.isRequired,
    name: propTypes.string.isRequired,
    label: propTypes.string.isRequired,
    autocomplete: propTypes.string,
    tabIndex: propTypes.string,

    onFocus: propTypes.func,
    onBlur: propTypes.func,

    className: propTypes.string,

    indeterminate: propTypes.bool,
    required: propTypes.bool,
    checked: propTypes.bool,
    disabled: propTypes.bool,
    valid: propTypes.bool,
    warning: propTypes.bool,
    error: propTypes.bool,
    autofocus: propTypes.bool,
    readonly: propTypes.bool,
    initialFocus: propTypes.bool,
}

export { Checkbox }
