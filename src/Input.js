import propTypes from 'prop-types'
import React from 'react'

import { statusPropType } from './common-prop-types.js'

import { LabelFilled, LabelRegular } from './FieldLabel.js'
import { theme } from './theme.js'
import { InternalInput } from './Input/InternalInput.js'

class Input extends React.Component {
    state = {
        focus: this.props.initialFocus,
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
            className,
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
            tabIndex,
        } = this.props
        const { focus } = this.state

        const Container = filled ? LabelFilled : LabelRegular

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
                className={className}
            >
                <InternalInput
                    focus={focus}
                    onFocus={this.onFocus}
                    onBlur={this.onBlur}
                    onChange={onChange}
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
                    tabIndex={tabIndex}
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

Input.defaultProps = {
    type: 'text',
    onBlur: () => {},
    onFocus: () => {},
}

Input.propTypes = {
    onChange: propTypes.func.isRequired,
    name: propTypes.string.isRequired,
    label: propTypes.string,

    className: propTypes.string,
    placeholder: propTypes.string,
    value: propTypes.string,
    tabIndex: propTypes.string,

    required: propTypes.bool,
    disabled: propTypes.bool,
    filled: propTypes.bool,
    dense: propTypes.bool,
    valid: statusPropType,
    warning: statusPropType,
    error: statusPropType,
    loading: propTypes.bool,
    initialFocus: propTypes.bool,

    onBlur: propTypes.func,
    onFocus: propTypes.func,

    type: propTypes.oneOf(['text', 'email', 'number', 'password', 'url']),
}

export { Input }
