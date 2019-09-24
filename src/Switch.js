import cx from 'classnames'
import propTypes from '@dhis2/prop-types'
import React, { Component, createRef } from 'react'

import { statusPropType } from './common-prop-types.js'
import { styles, switchIconStyles } from './Switch/styles.js'

const Input = React.forwardRef((props, ref) => (
    <div>
        <input type="checkbox" ref={ref} {...props} />

        <style jsx>{`
            div {
                height: 0;
                width: 0;
                overflow: hidden;
            }
        `}</style>
    </div>
))
Input.displayName = 'Input'

const SwitchIcon = ({ checked, valid, warning, error, disabled, focus }) => {
    const classes = cx({
        checked,
        disabled,
        valid,
        error,
        warning,
        focus,
    })

    return (
        <div className={classes}>
            <span className="path" />
            <span className="toggle" />

            <style jsx>{switchIconStyles}</style>
        </div>
    )
}

SwitchIcon.propTypes = {
    checked: propTypes.bool,
    disabled: propTypes.bool,
    valid: propTypes.bool,
    warning: propTypes.bool,
    error: propTypes.bool,
    focus: propTypes.bool,
}

/**
 * @module
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
    state = {
        focus: this.props.initialFocus,
    }

    componentDidMount() {
        if (this.state.focus) {
            this.ref.current.focus()
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
            className,
            label,
            required,
            checked = false,
            disabled,
            valid,
            warning,
            error,
        } = this.props
        const { focus } = this.state

        return (
            <label
                className={cx(className, {
                    disabled,
                    focus,
                })}
            >
                <Input
                    ref={this.ref}
                    name={name}
                    onBlur={this.onBlur}
                    onFocus={this.onFocus}
                    checked={checked}
                    disabled={disabled}
                    onChange={onChange}
                />

                <SwitchIcon
                    checked={checked}
                    disabled={disabled}
                    valid={valid}
                    warning={warning}
                    error={error}
                    focus={focus}
                />

                <span className={cx({ required, disabled })}>{label}</span>

                <style jsx>{styles}</style>
            </label>
        )
    }
}

/**
 * @typedef {Object} PropTypes
 * @static
 *
 * @prop {function} onChange
 * @prop {string} name
 * @prop {string} [className]
 * @prop {string} [label]
 * @prop {boolean} [required]
 * @prop {boolean} [checked]
 * @prop {boolean} [disabled]
 * @prop {boolean} [initialFocus]
 *
 * @prop {function} [onFocus]
 * @prop {function} [onBlur]
 *
 * @prop {boolean} [valid] - `valid`, `warning`, and `error`, are mutually exclusive
 * @prop {boolean} [warning]
 * @prop {boolean} [error]
 */
Switch.propTypes = {
    onChange: propTypes.func.isRequired,
    name: propTypes.string.isRequired,

    className: propTypes.string,
    label: propTypes.string,

    required: propTypes.bool,
    checked: propTypes.bool,
    disabled: propTypes.bool,
    valid: statusPropType,
    warning: statusPropType,
    error: statusPropType,
    initialFocus: propTypes.bool,

    onFocus: propTypes.func,
    onBlur: propTypes.func,
}

export { Switch }
