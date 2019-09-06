import cx from 'classnames'
import propTypes from 'prop-types'
import React, { Component, Fragment } from 'react'

import { statusPropType } from './common-prop-types.js'

import { theme } from './theme.js'

import { Icon } from './Checkbox/Icon.js'
import { Input } from './Checkbox/Input.js'
import { Label } from './Checkbox/Label.js'

/**
 * @module
 * @param {Checkbox.PropTypes} props
 * @returns {React.Component}
 * @example import { Checkbox } from @dhis2/ui-core
 * @see Specification: {@link https://github.com/dhis2/design-system/blob/master/atoms/checkbox.md|Design system}
 * @see Live demo: {@link /demo/?path=/story/checkbox--default|Storybook}
 */
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
            checked = false,
            className,
            disabled,
            error,
            icon,
            indeterminate,
            label,
            name,
            onChange,
            required,
            tabIndex,
            valid,
            value,
            warning,
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
                        tabIndex={tabIndex}
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

                    {icon}

                    <Label required={required} disabled={disabled}>
                        {label}
                    </Label>

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

/**
 * @typedef {Object} PropTypes
 * @static
 *
 * @prop {function} onChange - The handler which is triggered when the
 * component changes
 * @prop {string} value
 * @prop {string} name
 * @prop {string} label
 *
 * @prop {string} [tabIndex]
 * @prop {string} [className]
 * @prop {function} [onFocus]
 * @prop {function} [onBlur]
 *
 * @prop {Element} [icon]
 * @prop {boolean} [indeterminate]
 * @prop {boolean} [required]
 * @prop {boolean} [checked]
 * @prop {boolean} [disabled]
 * @prop {boolean} [initialFocus]
 * @prop {boolean} [valid] - `valid`, `warning`, and `error`, are mutually exclusive
 * @prop {boolean} [warning]
 * @prop {boolean} [error]
 */
Checkbox.propTypes = {
    onChange: propTypes.func.isRequired,

    value: propTypes.string,
    name: propTypes.string.isRequired,
    label: propTypes.string.isRequired,
    tabIndex: propTypes.string,
    className: propTypes.string,

    onFocus: propTypes.func,
    onBlur: propTypes.func,

    icon: propTypes.element,

    indeterminate: propTypes.bool,
    required: propTypes.bool,
    checked: propTypes.bool,
    disabled: propTypes.bool,
    valid: statusPropType,
    warning: statusPropType,
    error: statusPropType,
    initialFocus: propTypes.bool,
}

export { Checkbox }
