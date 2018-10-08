/** @format */

import React from 'react'
import PropTypes from 'prop-types'
import Icon from '../Icon'
import { Label } from '../helpers'
import s from './styles'

// TODO Helper Text component
// TODO disabled state
// TODO kind: Normal, Dense

class InputField extends React.Component {
    state = {
        focused: false,
    }

    onChange = evt => this.props.onChange(this.props.name, evt.target.value)

    onClick = () => {
        if (this.ref) {
            this.ref.focus()
            this.setState({ focused: true })
        }
    }

    onFocus = () => this.setState({ focused: true })
    onBlur = () => this.setState({ focused: false })

    render() {
        return (
            <div
                ref={c => (this.elContainer = c)}
                className={s('container')}
                onClick={this.onClick}
            >
                {this.props.icon && (
                    <div className={s('icon')}>
                        <Icon name={this.props.icon} />
                    </div>
                )}
                <input
                    ref={c => (this.ref = c)}
                    className={s('input')}
                    type={this.props.type}
                    value={this.props.value}
                    onChange={this.onChange}
                    onFocus={this.onFocus}
                    onBlur={this.onBlur}
                    placeholder={this.props.placeholder}
                />
                <Label
                    height="44px"
                    hasIcon={!!this.props.icon}
                    text={this.props.label}
                    status={this.props.status}
                    border={this.props.border}
                    size={
                        this.props.placeholder ||
                        this.props.value ||
                        this.state.focused
                            ? 'minimized'
                            : 'default'
                    }
                />
            </div>
        )
    }
}

InputField.defaultProps = {
    disabled: false,
    label: '',
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
    type: PropTypes.oneOf(['text', 'email', 'number', 'password', 'url']),
    border: PropTypes.oneOf(['none', 'solid', 'dashed']),
    status: PropTypes.oneOf(['default', 'valid', 'warning', 'error']),
}

export { InputField }
export default InputField
