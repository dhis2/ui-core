import cx from 'classnames'
import propTypes from '@dhis2/prop-types'
import React, { Component, createRef } from 'react'

import { statusPropType } from './common-prop-types.js'
import { Regular, Dense } from './icons/Radio.js'
import { colors, theme } from './theme.js'

/**
 * @module
 *
 * @param {Radio.PropTypes} props
 * @returns {React.Component}
 *
 * @example import { Radio } from '@dhis2/ui-core'
 *
 * @see Specification: {@link https://github.com/dhis2/design-system/blob/master/atoms/radio.md|Design system}
 * @see Live demo: {@link /demo/?path=/story/radio--default|Storybook}
 */
class Radio extends Component {
    ref = createRef()

    componentDidMount() {
        if (this.props.initialFocus) {
            this.ref.current.focus()
        }
    }

    handleChange = e => {
        const { onChange } = this.props

        if (onChange) {
            onChange(
                {
                    value: this.props.value,
                    name: this.props.name,
                    checked: !this.props.checked,
                },
                e
            )
        }
    }

    handleBlur = e => {
        const { onBlur } = this.props

        if (onBlur) {
            onBlur(e)
        }
    }

    handleFocus = e => {
        const { onFocus } = this.props

        if (onFocus) {
            onFocus(e)
        }
    }

    render() {
        const {
            checked = false,
            className,
            disabled,
            error,
            label,
            name,
            tabIndex,
            valid,
            value,
            warning,
            dense,
        } = this.props

        const classes = cx({
            checked,
            disabled,
            valid,
            error,
            warning,
        })

        return (
            <label
                className={cx(className, {
                    disabled,
                    dense,
                })}
            >
                <input
                    type="radio"
                    ref={this.ref}
                    name={name}
                    value={value}
                    checked={checked}
                    disabled={disabled}
                    tabIndex={tabIndex}
                    onChange={this.handleChange}
                    onFocus={this.handleFocus}
                    onBlur={this.handleBlur}
                />

                <div className={cx('icon', { dense })}>
                    {dense ? (
                        <Dense className={classes} />
                    ) : (
                        <Regular className={classes} />
                    )}
                </div>

                {label}

                <style jsx>{`
                    label {
                        display: flex;
                        flex-direction: row;
                        align-items: center;
                        justify-content: flex-start;
                        cursor: pointer;
                        pointer-events: all;
                        user-select: none;
                        color: ${colors.grey900};
                        font-size: 16px;
                        line-height: 20px;
                    }

                    label.grouped,
                    label.grouped.dense:first-of-type {
                        padding-top: 4px;
                    }

                    label.grouped.dense {
                        padding-top: 2px;
                    }

                    label.dense {
                        font-size: 14px;
                        line-height: 16px;
                    }

                    label.disabled {
                        cursor: not-allowed;
                        color: ${theme.disabled};
                    }
                    input {
                        opacity: 0;
                        pointer-events: none;
                        position: absolute;
                    }

                    .icon {
                        pointer-events: none;
                        user-select: none;
                        margin-right: 5px;
                        border: 2px solid transparent;
                        padding: 1px;
                        border-radius: 50%;
                    }

                    label.dense .icon {
                        margin-right: 3px;
                    }

                    input:focus + .icon {
                        border-color: ${colors.blue600};
                    }
                `}</style>
            </label>
        )
    }
}

/**
 * @typedef {Object} PropTypes
 * @static
 * @prop {string} value
 * @prop {Node} label
 * @prop {function} [onChange] - called with the signature `object, event`
 * @prop {string} [name]
 * @prop {string} [className]
 * @prop {string} [tabIndex]
 *
 * @prop {boolean} [disabled]
 * @prop {boolean} [checked]
 * @prop {boolean} [initialFocus]
 *
 * @prop {boolean} [valid] - `valid`, `warning`, and `error` are
 * mutually exclusive
 * @prop {boolean} [warning]
 * @prop {boolean} [error]
 *
 * @prop {boolean} [dense]
 *
 * @prop {function} [onFocus]
 * @prop {function} [onBlur]
 */
Radio.propTypes = {
    value: propTypes.string.isRequired,
    label: propTypes.node.isRequired,

    name: propTypes.string,
    className: propTypes.string,
    tabIndex: propTypes.string,

    onChange: propTypes.func,
    onFocus: propTypes.func,
    onBlur: propTypes.func,

    checked: propTypes.bool,
    disabled: propTypes.bool,
    valid: statusPropType,
    warning: statusPropType,
    error: statusPropType,

    dense: propTypes.bool,

    initialFocus: propTypes.bool,
}

export { Radio }
