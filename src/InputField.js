import propTypes from 'prop-types'
import React from 'react'
import cx from 'classnames'
import css from 'styled-jsx/css'

import { statusPropType } from './common-prop-types.js'
import { StatusIconNoDefault } from './icons/Status.js'

import { theme, colors, spacers } from './theme.js'

import { Field } from './Field.js'
import { Label } from './Label.js'
import { Input } from './Input.js'
import { Help } from './Help.js'

const styles = css`
    div :global(.disabled),
    div :global(.disabled::placeholder) {
        color: ${theme.disabled};
        cursor: not-allowed;
    }

    .label {
        position: relative;
        color: ${colors.grey700};
    }

    .content {
        align-items: center;
        box-sizing: border-box;
        display: flex;
        height: 42px;
        left: 1px;
        position: relative;
        border: 1px solid ${theme.default};
        border-radius: 4px;
        font-size: 14px;
    }

    .dense .content {
        height: 34px;
    }

    .focus .content {
        border-color: ${colors.teal400};
    }

    .valid .content {
        border-color: ${theme.valid};
    }

    .warning .content {
        border-color: ${theme.warning};
    }

    .error .content {
        border-color: ${theme.error};
    }

    .disabled .content {
        border-color: ${theme.disabled};
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
`

/**
 * @module
 * @param {InputField.PropTypes} props
 * @returns {React.Component}
 *
 * @example import { InputField } from '@dhis2/ui-core'
 *
 * @see Specification: {@link https://github.com/dhis2/design-system/blob/master/atoms/inputfield.md|Design system}
 * @see Live demo: {@link /demo/?path=/story/input-regular--no-placeholder-no-value|Storybook}
 */
class InputField extends React.Component {
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

    render() {
        const {
            className,
            onChange,
            type,
            dense,
            required,
            label,
            disabled,
            placeholder,
            name,
            valid,
            error,
            warning,
            loading,
            value,
            tabIndex,
            helpText,
            validationText,
        } = this.props
        const { focus } = this.state

        return (
            <Field>
                <div
                    className={cx(className, {
                        disabled,
                        focus,
                        dense,
                        valid,
                        warning,
                        error,
                        value,
                    })}
                >
                    {label ? (
                        <Label
                            focus={focus}
                            required={required}
                            valid={valid}
                            warning={warning}
                            error={error}
                            dense={dense}
                            disabled={disabled}
                            value={focus || value}
                            label={label}
                            htmlFor={name}
                        />
                    ) : null}

                    <div className="content">
                        <Input
                            focus={focus}
                            onFocus={this.onFocus}
                            onBlur={this.onBlur}
                            onChange={onChange}
                            name={name}
                            type={type}
                            value={value || ''}
                            placeholder={placeholder}
                            disabled={disabled}
                            valid={valid}
                            warning={warning}
                            error={error}
                            loading={loading}
                            dense={dense}
                            tabIndex={tabIndex}
                        />

                        <div className="status-icon">
                            <StatusIconNoDefault
                                error={error}
                                valid={valid}
                                loading={loading}
                                warning={warning}
                            />
                        </div>
                    </div>

                    {helpText ? <Help>{helpText}</Help> : null}

                    {validationText ? (
                        <Help error={error} warning={warning} valid={valid}>
                            {validationText}
                        </Help>
                    ) : null}
                </div>

                <style jsx>{styles}</style>
            </Field>
        )
    }
}

InputField.defaultProps = {
    type: 'text',
    onBlur: () => {},
    onFocus: () => {},
}

/**
 * @typedef {Object} PropTypes
 * @static
 *
 * @prop {string} name
 * @prop {string} [type=text]
 * @prop {function} onChange
 * @prop {function} [onBlur=() => {}]
 * @prop {function} [onFocus=() => {}]
 * @prop {string} [label]
 * @prop {string} [className]
 * @prop {string} [placeholder]
 * @prop {string} [value]
 * @prop {string} [tabIndex]
 *
 * @prop {boolean} [required]
 * @prop {boolean} [disabled]
 * @prop {boolean} [dense] - Compact mode
 * @prop {boolean} [initialFocus]
 *
 * @prop {boolean} [valid] - `valid`, `warning`, `error`, and `loading`
 * are mutually exclusive
 * @prop {boolean} [warning]
 * @prop {boolean} [error]
 * @prop {boolean} [loading]
 */
InputField.propTypes = {
    onChange: propTypes.func.isRequired,
    name: propTypes.string.isRequired,
    label: propTypes.string,
    helpText: propTypes.string,
    validationText: propTypes.string,

    className: propTypes.string,
    placeholder: propTypes.string,
    value: propTypes.string,
    tabIndex: propTypes.string,

    required: propTypes.bool,
    disabled: propTypes.bool,
    dense: propTypes.bool,
    valid: statusPropType,
    warning: statusPropType,
    error: statusPropType,
    loading: propTypes.bool,
    initialFocus: propTypes.bool,

    onBlur: propTypes.func,
    onFocus: propTypes.func,

    type: propTypes.oneOf(['text', 'email', 'number', 'password', 'url']),
}

export { InputField }
