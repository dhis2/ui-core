import propTypes from '@dhis2/prop-types'
import React, { Component } from 'react'
import css from 'styled-jsx/css'
import cx from 'classnames'

import { statusPropType } from './common-prop-types.js'
import { theme, colors, spacers } from './theme.js'
import { StatusIcon } from './icons/Status.js'

const styles = css`
    .input {
        display: flex;
        align-items: center;
    }

    input {
        box-sizing: border-box;

        font-size: 14px;
        line-height: 16px;
        user-select: text;

        color: ${colors.grey900};
        background-color: transparent;

        padding: 12px 11px 10px;

        outline: 0;
        border: 1px solid ${colors.grey500};
        border-radius: 3px;
        box-shadow: inset 0 0 0 1px rgba(102, 113, 123, 0.15),
            inset 0 1px 2px 0 rgba(102, 113, 123, 0.1);

        text-overflow: ellipsis;
    }

    input.dense {
        padding: 8px 11px 6px;
    }

    input:focus {
        border-color: ${colors.teal400};
    }

    input.valid {
        border-color: ${theme.valid};
    }

    input.warning {
        border-color: ${theme.warning};
    }

    input.error {
        border-color: ${theme.error};
    }

    input.read-only {
        background-color: ${colors.grey100};
        border-color: ${colors.grey500};
        cursor: text;
    }

    input.disabled {
        background-color: ${colors.grey100};
        border-color: ${colors.grey500};
        color: ${theme.disabled};
        cursor: not-allowed;
    }

    .status-icon {
        flex-shrink: 0;
        flex-grow: 0;
        margin-left: ${spacers.dp4};
    }
`

/**
 * @module
 * @param {Input.PropTypes} props
 * @returns {React.Component}
 *
 * @example import { Input } from '@dhis2/ui-core'
 *
 * @see Specification: {@link https://github.com/dhis2/design-system/blob/master/atoms/inputfield.md|Design system}
 * @see Live demo: {@link /demo/?path=/story/inputfield--default|Storybook}
 */
export class Input extends Component {
    inputRef = React.createRef()

    componentDidMount() {
        if (this.props.initialFocus) {
            this.inputRef.current.focus()
        }
    }

    handleChange = e => {
        const { onChange, readOnly, disabled } = this.props

        if (disabled || readOnly) {
            return
        }

        if (onChange) {
            onChange(
                {
                    value: e.target.value,
                    name: this.props.name,
                },
                e
            )
        }
    }

    handleBlur = e => {
        const { onBlur, disabled } = this.props

        if (disabled) {
            return
        }

        if (onBlur) {
            onBlur(e)
        }
    }

    handleFocus = e => {
        const { onFocus, disabled } = this.props

        if (disabled) {
            return
        }

        if (onFocus) {
            onFocus(e)
        }
    }

    render() {
        const {
            className,
            type,
            dense,
            disabled,
            readOnly,
            placeholder,
            name,
            valid,
            error,
            warning,
            loading,
            value,
            tabIndex,
            width,
        } = this.props
        const inputWidth = typeof width === 'number' ? `${width}px` : width

        return (
            <div className={cx('input', className)}>
                <input
                    id={name}
                    name={name}
                    placeholder={placeholder}
                    ref={this.inputRef}
                    type={type}
                    value={value}
                    disabled={disabled}
                    readOnly={readOnly}
                    tabIndex={tabIndex}
                    onFocus={this.handleFocus}
                    onBlur={this.handleBlur}
                    onChange={this.handleChange}
                    className={cx({
                        dense,
                        disabled,
                        error,
                        valid,
                        warning,
                        'read-only': readOnly,
                    })}
                />

                <div className="status-icon">
                    <StatusIcon
                        error={error}
                        valid={valid}
                        loading={loading}
                        warning={warning}
                    />
                </div>

                <style jsx>{styles}</style>
                <style jsx>{`
                    input {
                        width: ${inputWidth};
                    }
                `}</style>
            </div>
        )
    }
}

Input.defaultProps = {
    type: 'text',
    width: '100%',
}

/**
 * @typedef {Object} PropTypes
 * @static
 *
 * @prop {string} name
 * @prop {string} [type=text]
 * @prop {function} [onChange] - called with the signature `object, event`
 * @prop {function} [onBlur]
 * @prop {function} [onFocus]
 * @prop {string} [className]
 * @prop {string} [placeholder]
 * @prop {string} [value]
 * @prop {string} [tabIndex]
 * @prop {string|number} [width]
 *
 * @prop {boolean} [disabled]
 * @prop {boolean} [readOnly]
 * @prop {boolean} [dense] - Compact mode
 * @prop {boolean} [initialFocus]
 *
 * @prop {boolean} [valid] - `valid`, `warning`, `error`, and `loading`
 * are mutually exclusive
 * @prop {boolean} [warning]
 * @prop {boolean} [error]
 * @prop {boolean} [loading]
 */
Input.propTypes = {
    name: propTypes.string,
    type: propTypes.oneOf([
        'text',
        'number',
        'password',
        'email',
        'url',
        'tel',
    ]),

    className: propTypes.string,

    onChange: propTypes.func,
    onFocus: propTypes.func,
    onBlur: propTypes.func,

    value: propTypes.string,
    placeholder: propTypes.string,
    tabIndex: propTypes.string,
    width: propTypes.oneOfType([propTypes.string, propTypes.number]),

    disabled: propTypes.bool,
    readOnly: propTypes.bool,
    dense: propTypes.bool,

    valid: statusPropType,
    warning: statusPropType,
    error: statusPropType,
    loading: propTypes.bool,

    initialFocus: propTypes.bool,
}
