import React from 'react'
import PropTypes from 'prop-types'
import Icon from '../Icon'
import { Label, Help } from '../helpers'
import s from './styles'

class InputField extends React.Component {
    state = {
        focused: false,
    }

    onChange = evt => {
        if (!this.props.disabled) {
            this.props.onChange(this.props.name, evt.target.value)
        }
    }

    onClick = () => {
        if (this.ref && !this.props.disabled) {
            this.ref.focus()
            this.setState({ focused: true })
        }
    }

    onFocus = evt => {
        if (this.props.disabled) {
            evt.target.blur()
            return
        }

        this.setState({ focused: true })
    }

    onBlur = () => this.setState({ focused: false })

    render() {
        return (
            <div
                className={s('reset', 'base', {
                    disabled: this.props.disabled,
                    'is-empty': !(
                        this.props.value ||
                        this.props.placeholder ||
                        this.state.focused
                    ),
                })}
                onClick={this.onClick}
            >
                <div
                    className={s('reset', 'field', {
                        focused: this.state.focused,
                        [`kind-${this.props.kind}`]: true,
                        [`size-${this.props.size}`]: true,
                        [`status-${this.props.status}`]: true,
                    })}
                >
                    {this.props.icon && (
                        <div className={s('reset', 'icon-field')}>
                            <Icon
                                name={this.props.icon}
                                className={s('icon')}
                            />
                        </div>
                    )}
                    <div className={s('reset', 'input-field')}>
                        <input
                            ref={c => (this.ref = c)}
                            className={s('reset', 'input', {
                                disabled: this.props.disabled,
                            })}
                            type={this.props.type}
                            value={this.props.value}
                            onChange={this.onChange}
                            onFocus={this.onFocus}
                            onBlur={this.onBlur}
                            placeholder={this.props.placeholder}
                            disabled={this.props.disabled}
                        />
                        <Label
                            size={this.props.size}
                            kind={this.props.kind}
                            text={this.props.label}
                            status={this.props.status}
                            focused={this.state.focused}
                            disabled={this.props.disabled}
                            hasIcon={!!this.props.icon}
                            state={
                                this.props.placeholder ||
                                this.props.value ||
                                this.state.focused
                                    ? 'minimized'
                                    : 'default'
                            }
                        />
                    </div>
                </div>
                {this.props.help && (
                    <Help text={this.props.help} status={this.props.status} />
                )}
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
