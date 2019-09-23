import propTypes from 'prop-types'
import React, { Component } from 'react'
import css from 'styled-jsx/css'
import cx from 'classnames'

import { statusPropType } from './common-prop-types.js'
import { theme, colors, spacers } from './theme.js'
import { StatusIconNoDefault } from './icons/Status.js'

const styles = css`
    .input {
        align-items: center;
        box-sizing: border-box;
        display: flex;
        height: 42px;
        left: 1px;
        position: relative;
        border: 1px solid ${colors.grey500};
        border-radius: 3px;
        font-size: 14px;
        box-shadow: inset 0 0 0 1px rgba(102, 113, 123, 0.15),
            inset 0 1px 2px 0 rgba(102, 113, 123, 0.1);
    }

    .input.dense {
        height: 34px;
    }

    .input.focus {
        border-color: ${colors.teal400};
    }

    .input.valid {
        border-color: ${theme.valid};
    }

    .input.warning {
        border-color: ${theme.warning};
    }

    .input.error {
        border-color: ${theme.error};
    }

    .status-icon {
        flex-shrink: 0;
        width: 24px;
        height: 24px;
        margin-right: ${spacers.dp4};
        margin-left: ${spacers.dp12};
    }

    .status-icon:empty {
        display: none;
    }

    .status-icon:last-child {
        margin-right: ${spacers.dp12};
    }

    input {
        display: block;
        color: ${colors.grey900};
        background-color: transparent;
        border: 0;
        border-radius: 3px;
        box-sizing: border-box;
        font-size: inherit;
        height: 100%;
        line-height: 16px;
        outline: 0;
        user-select: text;
        width: 100%;

        padding: 13px 0 11px 11px;
    }

    .disabled,
    .disabled input {
        cursor: not-allowed;
        border-color: ${theme.disabled};
        color: ${theme.disabled};
        background-color: ${colors.grey100};
    }
`

export class Input extends Component {
    inputRef = React.createRef()

    state = {
        focus: this.props.initialFocus,
    }

    onFocus = e => {
        this.setState({ focus: true })
        this.props.onFocus(e)
    }

    onBlur = e => {
        this.setState({ focus: false })
        this.props.onBlur(e)
    }

    componentDidMount() {
        if (this.props.initialFocus) {
            this.inputRef.current.focus()
        }
    }

    render() {
        const {
            className,
            onChange,
            type,
            dense,
            disabled,
            placeholder,
            name,
            valid,
            error,
            warning,
            loading,
            value,
            tabIndex,
        } = this.props

        const { focus } = this.state

        return (
            <div
                className={cx('input', className, {
                    dense,
                    disabled,
                    error,
                    valid,
                    warning,
                    focus,
                })}
            >
                <input
                    id={name}
                    name={name}
                    placeholder={placeholder}
                    ref={this.inputRef}
                    type={type}
                    value={value}
                    disabled={disabled}
                    tabIndex={tabIndex}
                    onFocus={this.onFocus}
                    onBlur={this.onBlur}
                    onChange={onChange}
                />

                <div className="status-icon">
                    <StatusIconNoDefault
                        error={error}
                        valid={valid}
                        loading={loading}
                        warning={warning}
                    />
                </div>

                <style jsx>{styles}</style>
            </div>
        )
    }
}

Input.propTypes = {
    name: propTypes.string.isRequired,
    type: propTypes.string.isRequired,

    className: propTypes.string,

    onChange: propTypes.func.isRequired,
    onFocus: propTypes.func,
    onBlur: propTypes.func,

    value: propTypes.string,
    placeholder: propTypes.string,
    tabIndex: propTypes.string,

    focus: propTypes.bool,
    disabled: propTypes.bool,
    dense: propTypes.bool,

    valid: statusPropType,
    warning: statusPropType,
    error: statusPropType,
    loading: propTypes.bool,

    initialFocus: propTypes.bool,
}
