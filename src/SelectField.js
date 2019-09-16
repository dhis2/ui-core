import propTypes from 'prop-types'
import React from 'react'
import cx from 'classnames'
import css from 'styled-jsx/css'

import { statusPropType } from './common-prop-types.js'
import { ArrowDown } from './icons/Arrow.js'
import { StatusIconNoDefault } from './icons/Status.js'

import { theme, colors, spacers } from './theme.js'

import { Field } from './Field.js'
import { Label } from './Label.js'
import { Help } from './Help.js'
import { Select } from './Select.js'

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
        margin-right: ${spacers.dp32};
    }
`

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

/**
 * @module
 *
 * @param {SelectField.PropTypes} props
 * @returns {React.Component}
 *
 * @example import { SelectField } from '@dhis2/ui-core'
 *
 * @see Specification: {@link https://github.com/dhis2/design-system/blob/master/molecules/select.md|Design system}
 * @see Live demo: {@link /demo/?path=/story/select-regular--no-value|Storybook}
 */
class SelectField extends React.Component {
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

    render() {
        const {
            className,
            onChange,
            dense,
            required,
            label,
            disabled,
            name,
            valid,
            error,
            warning,
            loading,
            value,
            tabIndex,
            helpText,
            validationText,
            children,
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
                        <Select
                            focus={focus}
                            name={name}
                            value={value}
                            disabled={disabled}
                            dense={dense}
                            tabIndex={tabIndex}
                            onChange={onChange}
                            onFocus={this.onFocus}
                            onBlur={this.onBlur}
                        >
                            {children}
                        </Select>

                        <div className="status-icon">
                            <TailIcon />

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

/**
 * @typedef {Object} PropTypes
 * @static
 *
 * @prop {string} name
 * @prop {function} onChange
 * @prop {string} label
 * @prop {string} [value]
 * @prop {string} [className]
 * @prop {string} [tabIndex]
 * @prop {Array|Object} [children]
 * @prop {boolean} [required]
 * @prop {boolean} [disabled]
 * @prop {boolean} [dense]
 * @prop {boolean} [valid] - `valid`, `warning`, `error`, `loading`, are
 * mutually exclusive
 * @prop {boolean} [warning]
 * @prop {boolean} [error]
 * @prop {boolean} [loading]
 * @prop {function} [onFocus]
 * @prop {function} [onBlur]
 *
 * @prop {string} [validationText]
 * @prop {string} [helpText]
 * @prop {Object|Array} [children]
 */
SelectField.propTypes = {
    name: propTypes.string.isRequired,
    onChange: propTypes.func.isRequired,

    label: propTypes.string,
    value: propTypes.string,
    className: propTypes.string,
    tabIndex: propTypes.string,

    helpText: propTypes.string,
    validationText: propTypes.string,

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

    required: propTypes.bool,
    disabled: propTypes.bool,
    dense: propTypes.bool,
    valid: statusPropType,
    warning: statusPropType,
    error: statusPropType,
    loading: propTypes.bool,
    initialFocus: propTypes.bool,

    onFocus: propTypes.func,
    onBlur: propTypes.func,
}

export { SelectField }
