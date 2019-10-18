import cx from 'classnames'
import propTypes from '@dhis2/prop-types'
import React, { Component, createRef } from 'react'

import { statusPropType } from './common-prop-types.js'
import { Regular } from './icons/Switch.js'
import { colors, theme } from './theme.js'

/**
 * @module
 *
 * @param {Switch.PropTypes} props
 * @returns {React.Component}
 *
 * @example import { Switch } from '@dhis2/ui-core'
 *
 * @see Specification: {@link https://github.com/dhis2/design-system/blob/master/atoms/switch.md|Design system}
 * @see Live demo: {@link /demo/?path=/story/switch--default|Storybook}
 */
class Switch extends Component {
    ref = createRef()

    componentDidMount() {
        if (this.props.initialFocus) {
            this.ref.current.focus()
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
            onChange,
            tabIndex,
            valid,
            value,
            warning,
            onFocus,
            onBlur,
            dense,
        } = this.props

        const classes = cx({
            checked,
            disabled,
            valid,
            error,
            warning,
            dense,
        })

        return (
            <label
                className={cx(className, {
                    disabled,
                    dense,
                })}
            >
                <input
                    type="switch"
                    ref={this.ref}
                    name={name}
                    value={value}
                    checked={checked}
                    disabled={disabled}
                    tabIndex={tabIndex}
                    onChange={onChange}
                    onFocus={onFocus}
                    onBlur={onBlur}
                />

                <div className={cx('icon', { dense })}>
                    <Regular className={classes} />
                </div>

                {label}

                <style jsx>{`
                    label {
                        position: relative;
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
                        position: absolute;
                        opacity: 0;
                        pointer-events: none;
                    }

                    .icon {
                        pointer-events: none;
                        user-select: none;
                        margin-right: 5px;
                        border: 2px solid transparent;
                        padding: 1px;
                        border-radius: 14px;
                    }

                    label.dense .icon {
                        margin-right: 3px;
                        border-radius: 12px;
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
 * @prop {function} [onChange]
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
Switch.propTypes = {
    value: propTypes.string,
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

export { Switch }
