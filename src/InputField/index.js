import propTypes from 'prop-types'
import React, { Fragment } from 'react'
import css from 'styled-jsx/css'

import { Input } from './Input.js'
import { LabelFilled, LabelOutlined } from '../FieldLabel'
import { theme } from '../theme'

class InputField extends React.Component {
    state = {
        focus: this.props.focus,
    }

    onFocus = e => {
        this.setState({ focus: true })
        this.props.onFocus(e)
    }

    onBlur = e => {
        this.setState({ focus: false })
        this.props.onBlur(e)
    }

    render() {
        const {
            onChange,
            type,
            filled,
            dense,
            required,
            label,
            disabled,
            placeholder,
            name,
            valid,
            error,
            warning,
            loading,
            value,
            focus = this.state.focus,
        } = this.props

        const Container = filled ? LabelFilled : LabelOutlined

        return (
            <Container
                focus={focus}
                label={label}
                value={!!value || !!placeholder}
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
                    focus={focus}
                    onFocus={this.onFocus}
                    onBlur={this.onBlur}
                    onChange={e => onChange(e)}
                    name={name}
                    type={type}
                    value={value || ''}
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
    onBlur: () => {},
    onFocus: () => {},
}

InputField.propTypes = {
    onChange: propTypes.func.isRequired,
    name: propTypes.string.isRequired,
    label: propTypes.string.isRequired,

    className: propTypes.string,
    placeholder: propTypes.string,

    value: propTypes.string,

    required: propTypes.bool,
    disabled: propTypes.bool,
    filled: propTypes.bool,
    dense: propTypes.bool,
    focus: propTypes.bool,
    valid: propTypes.bool,
    warning: propTypes.bool,
    error: propTypes.bool,
    loading: propTypes.bool,

    onBlur: propTypes.func,
    onFocus: propTypes.func,

    type: propTypes.oneOf(['text', 'email', 'number', 'password', 'url']),
}

export { InputField }
