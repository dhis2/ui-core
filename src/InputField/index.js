import propTypes from 'prop-types'
import React, { Fragment } from 'react'
import css from 'styled-jsx/css'

import { Input } from '../Input'
import { LabelFilled, LabelOutlined } from '../FieldLabel'
import { theme } from '../theme'

class InputField extends React.Component {
    state = {
        focus: false,
        value: '',
    }

    constructor(props) {
        super(props)

        this.state = {
            focus: props.focus,
            value: props.value || '',
        }
    }

    onFocus = evt => {
        this.setState({ focus: true })

        if (this.props.onFocus) {
            this.props.onFocus(evt)
        }
    }

    onBlur = evt => {
        this.setState({ focus: false })

        if (this.props.onBlur) {
            this.props.onBlur(evt)
        }
    }

    onChange = evt => {
        if (this.props.disabled) {
            return
        }

        this.setState({ value: evt.target.value })
        this.props.onChange(this.props.name, evt.target.value)
    }

    render() {
        const {
            type,
            filled,
            focus,
            dense,
            required,
            label,
            disabled,
            placeholder,
            value,
            name,
            valid,
            error,
            warning,
            loading,
        } = this.props

        const Container = filled ? LabelFilled : LabelOutlined

        return (
            <Container
                focus={this.state.focus}
                label={label}
                value={!!this.state.value || !!placeholder}
                htmlFor={name}
                required={required}
                disabled={disabled}
                valid={valid}
                warning={warning}
                error={error}
                loading={loading}
                dense={dense}
            >
                <Input
                    focus={this.state.focused}
                    onFocus={this.onFocus}
                    onBlur={this.onBlur}
                    onChange={this.onChange}
                    name={name}
                    type={type}
                    value={this.state.value}
                    placeholder={placeholder}
                    filled={filled}
                    disabled={disabled}
                    valid={valid}
                    warning={warning}
                    error={error}
                    loading={loading}
                    dense={dense}
                />
                <style jsx>{`
                    div :global(.disabled),
                    div :global(.disabled::placeholder) {
                        color: ${theme.disabled};
                        cursor: not-allowed;
                    }
                `}</style>
            </Container>
        )
    }
}

InputField.defaultProps = {
    type: 'text',
}

InputField.propTypes = {
    name: propTypes.string.isRequired,
    onChange: propTypes.func.isRequired,
    label: propTypes.string.isRequired,
    value: propTypes.string,

    className: propTypes.string,

    required: propTypes.bool,
    disabled: propTypes.bool,
    filled: propTypes.bool,
    dense: propTypes.bool,
    focus: propTypes.bool,
    valid: propTypes.bool,
    warning: propTypes.bool,
    error: propTypes.bool,
    loading: propTypes.bool,

    onFocus: propTypes.func,
    onBlur: propTypes.func,

    placeholder: propTypes.string,
    type: propTypes.oneOf(['text', 'email', 'number', 'password', 'url']),
}

export { InputField }
