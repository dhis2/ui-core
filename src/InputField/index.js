import PropTypes from 'prop-types'
import React, { Fragment } from 'react'
import css from 'styled-jsx/css'
import cx from 'classnames'

import { Default, Error, Valid, Warning } from '../icons/Status.js'
import { createIcon } from '../icons/helpers'
import { colors } from '../theme.js'
import Help from '../Help'
import styles from './styles.js'

const statusToIcon = {
    valid: Valid,
    warning: Warning,
    error: Error,
}

function createTrailIcon(status, trail, fn) {
    if (status !== 'default') {
        return createIcon(statusToIcon[status], { action: fn })
    } else {
        return trail
    }
}

class InputField extends React.Component {
    state = {
        focused: false,
        labelWidth: 0,
    }

    constructor(props) {
        super(props)

        this.labelRef = React.createRef()
        this.inputRef = React.createRef()
    }

    componentDidMount() {
        this.setState({
            labelWidth: this.labelRef.current.offsetWidth,
            focused: this.props.focus,
        })

        if (this.props.focus) {
            this.inputRef.current.focus()
        }
    }

    isFocused() {
        return this.state.focused
    }

    shrink() {
        return !!(
            this.isFocused() ||
            this.props.value ||
            this.props.placeholder
        )
    }

    onFocus = evt => {
        this.setState({ focused: true })
    }

    onBlur = evt => {
        this.setState({ focused: false })
    }

    onChange = evt => {
        if (this.props.disabled) {
            return
        }

        this.props.onChange(this.props.name, evt.target.value)
    }

    render() {
        const legendWidth = this.shrink()
            ? { width: `${this.state.labelWidth}px` }
            : { width: '0.01px' }

        return (
            <div
                className={cx('base', this.props.className, {
                    focused: this.isFocused(),
                    disabled: this.props.disabled,
                })}
            >
                <div
                    className={cx('field', {
                        [`size-${this.props.size}`]: true,
                        [`status-${this.props.status}`]: true,
                        [`kind-${this.props.kind}`]: true,
                        focused: this.isFocused(),
                        filled: this.props.value,
                        disabled: this.props.disabled,
                    })}
                >
                    <label
                        ref={this.labelRef}
                        className={cx('label', {
                            [`${this.props.status}`]: true,
                            [`${this.props.size}`]: true,
                            [`${this.props.kind}`]: true,
                            'has-icon': !!this.props.icon,
                            required: this.props.required,
                            disabled: this.props.disabled,
                            focused: this.isFocused(),
                            shrink: this.shrink(),
                        })}
                    >
                        {this.props.label}
                    </label>

                    {this.props.kind === 'outlined' && (
                        <fieldset
                            className={cx('flatline', {
                                [`${this.props.status}`]: true,
                                focused: this.isFocused(),
                                idle: !this.isFocused(),
                                filled: this.props.value,
                            })}
                        >
                            <legend className="legend" style={legendWidth}>
                                <span>&#8203;</span>
                            </legend>
                        </fieldset>
                    )}

                    {createIcon(this.props.icon)}

                    <input
                        className={cx({
                            disabled: this.props.disabled,
                        })}
                        ref={this.inputRef}
                        type={this.props.type}
                        placeholder={this.props.placeholder}
                        disabled={this.props.disabled}
                        value={this.props.value}
                        onFocus={this.onFocus}
                        onBlur={this.onBlur}
                        onChange={this.onChange}
                    />

                    {createTrailIcon(this.props.status, this.props.trailIcon)}
                </div>

                {this.props.help && (
                    <Help text={this.props.help} status={this.props.status} />
                )}

                <style jsx>{styles}</style>
            </div>
        )
    }
}

InputField.defaultProps = {
    status: 'default',
    size: 'default',
    kind: 'filled',
    type: 'text',
    focus: false,
    disabled: false,
    required: false,
}

InputField.propTypes = {
    className: PropTypes.string,
    name: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    label: PropTypes.string,
    placeholder: PropTypes.string,
    help: PropTypes.string,
    icon: PropTypes.element,
    trailIcon: PropTypes.element,
    status: PropTypes.oneOf(['default', 'valid', 'warning', 'error']),
    size: PropTypes.oneOf(['default', 'dense']),
    kind: PropTypes.oneOf(['filled', 'outlined']),
    type: PropTypes.oneOf(['text', 'email', 'number', 'password', 'url']),
    focus: PropTypes.bool,
    disabled: PropTypes.bool,
    required: PropTypes.bool,
}

export { InputField }
export default InputField
