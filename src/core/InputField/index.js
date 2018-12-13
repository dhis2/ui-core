import React from 'react'
import PropTypes from 'prop-types'
import Icon from '../Icon'
import s from './styles'

function outlined(kind) {
    return 'outlined' === kind
}

function icon(i, action = null) {
    if (i) {
        return (
            <div>
                <Icon name={i} onClick={action} className={s('icon')} />
            </div>
        )
    }
    return null
}

class InputField extends React.Component {
    state = {
        focused: false,
        text: this.props.value,
        labelWidth: 0,
    }

    constructor(props) {
        super(props)
        this.labelRef = React.createRef()
    }

    componentDidMount() {
        this.setState({ labelWidth: this.labelRef.current.offsetWidth })
    }

    isFocused() {
        return this.state.focused
    }

    shrink() {
        return this.isFocused() || this.state.text || this.props.placeholder
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
        this.setState({ text: evt.target.value })
    }

    render() {
        const legendWidth = this.shrink()
            ? { width: `${this.state.labelWidth}px` }
            : { width: 0 }

        return (
            <div
                className={s('reset', 'base', {
                    focused: this.isFocused(),
                    disabled: this.props.disabled,
                })}
            >
                <label
                    ref={this.labelRef}
                    className={s('reset', 'label', {
                        required: this.props.required,
                        disabled: this.props.disabled,
                        focused: this.isFocused(),
                        shrink: this.shrink(),
                        'has-icon': this.props.icon,
                        [`${this.props.status}`]: true,
                        [`${this.props.size}`]: true,
                        [`${this.props.kind}`]: true,
                    })}
                >
                    {this.props.label}
                </label>
                <div
                    className={s('reset', 'field', {
                        [`size-${this.props.size}`]: true,
                        [`status-${this.props.status}`]: true,
                        [`kind-${this.props.kind}`]: true,
                        focused: this.isFocused(),
                        filled: this.state.text,
                        disabled: this.props.disabled,
                    })}
                >
                    {outlined(this.props.kind) && (
                        <fieldset
                            className={s('reset', 'outline', {
                                focused: this.isFocused(),
                                idle: !this.isFocused(),
                                filled: this.state.text,
                                [`${this.props.status}`]: true,
                            })}
                        >
                            <legend className={s('reset')} style={legendWidth}>
                                &nbsp;
                            </legend>
                        </fieldset>
                    )}
                    {icon(this.props.icon)}
                    <input
                        className={s('reset', 'input', {
                            disabled: this.props.disabled,
                        })}
                        type={this.props.type}
                        placeholder={this.props.placeholder}
                        disabled={this.props.disabled}
                        value={this.state.text}
                        onFocus={this.onFocus}
                        onBlur={this.onBlur}
                        onChange={this.onChange}
                    />
                    {icon(this.props.trailIcon)}
                </div>
                <p
                    className={s('reset', 'help', {
                        [`status-${this.props.status}`]: true,
                    })}
                >
                    {this.props.help}
                </p>
            </div>
        )
    }
}

InputField.defaultProps = {
    disabled: false,
    label: '',
    status: 'default',
    size: 'default',
    kind: 'filled',
}

InputField.propTypes = {
    label: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    name: PropTypes.string.isRequired,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    onChange: PropTypes.func.isRequired,
    icon: PropTypes.string,
    trailIcon: PropTypes.string,
    help: PropTypes.string,
    disabled: PropTypes.bool,
    required: PropTypes.bool,
    size: PropTypes.oneOf(['default', 'dense']),
    kind: PropTypes.oneOf(['filled', 'outlined']),
    type: PropTypes.oneOf(['text', 'email', 'number', 'password', 'url']),
    status: PropTypes.oneOf(['default', 'valid', 'warning', 'error']),
}

export { InputField }
export default InputField
