import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import Icon from '../Icon'
import cx, { rx } from './styles'
import { Help } from '../helpers'

const statusToIcon = {
    valid: 'check_circle',
    warning: 'warning',
    error: 'error',
}

function icon(i, action = null, extra = null) {
    if (i) {
        return (
            <div>
                <Icon name={i} onClick={action} className={cx('icon', extra)} />
            </div>
        )
    }
    return null
}

function trailIcon(status, trail, fn) {
    if (status !== 'default') {
        return icon(statusToIcon[status], fn, `icon-${status}`)
    } else {
        return icon(trail, fn)
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
                className={rx('base', {
                    focused: this.isFocused(),
                    disabled: this.props.disabled,
                })}
            >
                <div
                    className={rx('field', {
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
                        className={rx('label', {
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
                            className={rx('flatline', {
                                [`${this.props.status}`]: true,
                                focused: this.isFocused(),
                                idle: !this.isFocused(),
                                filled: this.props.value,
                            })}
                        >
                            <legend
                                className={rx('legend')}
                                style={legendWidth}
                            >
                                <span>&#8203;</span>
                            </legend>
                        </fieldset>
                    )}

                    {icon(this.props.icon)}
                    <input
                        className={rx('input', {
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
                    {trailIcon(
                        this.props.status,
                        this.props.trailIcon,
                        this.props.onTrailIconClick
                    )}
                </div>
                {this.props.help && (
                    <Help text={this.props.help} status={this.props.status} />
                )}
            </div>
        )
    }
}

InputField.defaultProps = {
    value: '',
    label: '',
    help: '',
    placeholder: '',

    icon: '',
    trailIcon: '',

    status: 'default',
    size: 'default',
    kind: 'filled',
    type: 'text',

    focus: false,
    disabled: false,
    required: false,

    onTrailIconClick: null,
}

InputField.propTypes = {
    name: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,

    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    label: PropTypes.string,
    placeholder: PropTypes.string,
    help: PropTypes.string,

    icon: PropTypes.string,
    trailIcon: PropTypes.string,
    onTrailIconClick: PropTypes.func,

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
