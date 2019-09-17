import propTypes from 'prop-types'
import React, { Component, createRef } from 'react'
import css from 'styled-jsx/css'
import cx from 'classnames'

import { statusPropType } from './common-prop-types.js'
import { theme, colors, spacers } from './theme.js'

import { ArrowDown } from './icons/Arrow.js'
import { StatusIconNoDefault } from './icons/Status.js'

const TailIcon = () => (
    <div>
        <ArrowDown />

        <style jsx>{`
            div {
                pointer-events: none;
                position: absolute;
                right: 4px;
            }
        `}</style>
    </div>
)

const styles = css`
    select {
        background: none;
        border: 0;
        color: ${colors.grey900};
        font-size: inherit;
        height: 100%;
        outline: 0;
        /** 15px => 16px inner spacing - 1px of the border**/
        padding: 0 12px 0 15px;
        width: 100%;
        -webkit-appearance: none;
        -moz-appearance: none;
    }

    .select {
        align-items: center;
        box-sizing: border-box;
        display: flex;
        height: 42px;
        left: 1px;
        position: relative;
        border: 1px solid ${colors.grey500};
        border-radius: 3px;
        box-shadow: inset 0 0 0 1px rgba(102, 113, 123, 0.15),
            inset 0 1px 2px 0 rgba(102, 113, 123, 0.1);
        font-size: 14px;
    }

    option:not(:checked) {
        color: black;
    }

    select:-moz-focusring {
        color: transparent;
        text-shadow: 0 0 0 #000;
    }

    .select.dense {
        height: 34px;
    }

    .select.focus {
        border-color: ${colors.teal400};
    }

    .select.valid {
        border-color: ${theme.valid};
    }

    .select.warning {
        border-color: ${theme.warning};
    }

    .select.error {
        border-color: ${theme.error};
    }

    .disabled,
    .disabled-select {
        border-color: ${theme.disabled};
        background-color: ${colors.grey100};
        color: ${theme.disabled};
        cursor: not-allowed;
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
        margin-right: ${spacers.dp32};
    }
`

export class Select extends Component {
    selectRef = createRef()

    state = {
        focus: this.props.initialFocus,
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

    isFocused() {
        return this.state.focus
    }

    componentDidMount() {
        if (this.props.focus) {
            this.selectRef.current.focus()
        }
    }

    render() {
        const {
            dense,
            disabled,
            onChange,
            value,
            children,
            name,
            tabIndex,
            valid,
            warning,
            error,
            loading,
            className,
        } = this.props

        const { focus } = this.state

        return (
            <div
                className={cx('select', className, {
                    dense,
                    disabled,
                    focus,
                    valid,
                    warning,
                    error,
                })}
            >
                <select
                    onChange={onChange}
                    value={value || -1}
                    disabled={disabled}
                    onFocus={this.onFocus}
                    onBlur={this.onBlur}
                    ref={this.selectRef}
                    name={name}
                    tabIndex={tabIndex}
                >
                    <option
                        key="hidden-default-value"
                        hidden
                        disabled
                        value="-1"
                    />
                    {children}
                </select>

                <div className="status-icon">
                    <TailIcon />

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

Select.propTypes = {
    className: propTypes.string,

    name: propTypes.string.isRequired,
    onChange: propTypes.func.isRequired,

    value: propTypes.string,
    tabIndex: propTypes.string,

    onFocus: propTypes.func,
    onBlur: propTypes.func,

    children: propTypes.oneOfType([
        propTypes.arrayOf(
            propTypes.shape({
                tagName: propTypes.oneOf(['OPTION', 'OPTGROUP']),
            })
        ),
        propTypes.shape({
            tagName: propTypes.oneOf(['OPTION', 'OPTGROUP']),
        }),
    ]),

    disabled: propTypes.bool,
    dense: propTypes.bool,
    focus: propTypes.bool,
    initialFocus: propTypes.bool,

    valid: statusPropType,
    warning: statusPropType,
    error: statusPropType,
    loading: propTypes.bool,
}
