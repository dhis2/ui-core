import cx from 'classnames'
import propTypes from 'prop-types'
import React, { Component, createRef } from 'react'

import { statusPropType } from '../common-prop-types'
import { styles, switchIconStyles } from './styles'

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
