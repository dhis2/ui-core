import propTypes from 'prop-types'
import React, { Fragment } from 'react'
import css from 'styled-jsx/css'

import { Input } from '../Input'
import { LabelFilled, LabelOutlined } from '../FieldLabel'
import { colors } from '../theme'
import { iconStatusPropType, iconStatuses } from '../icons/constants'
import { inputKinds, inputSizes } from '../forms/constants'

const types = {
    TEXT: 'text',
    EMAIL: 'email',
    NUMBER: 'number',
    PASSWORD: 'password',
    URL: 'url',
}

class InputField extends React.Component {
    state = {
        focused: false,
    }

    constructor(props) {
        super(props)

        this.state = {
            focused: props.focus,
        }
    }

    isFocused() {
        return this.state.focused
    }

    onFocus = evt => {
        this.setState({ focused: true })

        if (this.props.onFocus) {
            this.props.onFocus(evt)
        }
    }

    onBlur = evt => {
        this.setState({ focused: false })

        if (this.props.onBlur) {
            this.props.onBlur(evt)
        }
    }

    onChange = evt => {
        if (this.props.disabled) {
            return
        }

        this.props.onChange(this.props.name, evt.target.value)
    }

    render() {
        const isFilled = this.props.kind === inputKinds.FILLED
        const isDense = this.props.size === inputSizes.DENSE
        const Container =
            this.props.kind === inputKinds.FILLED ? LabelFilled : LabelOutlined

        return (
            <Container
                label={this.props.label}
                isFocused={this.state.focused}
                hasValue={!!this.props.value || this.props.placeholder}
                htmlFor={this.props.name}
                required={this.props.required}
                disabled={this.props.disabled}
                status={this.props.status}
                size={this.props.size}
            >
                <Input
                    name={this.props.name}
                    type={this.props.type}
                    kind={this.props.kind}
                    value={this.props.value}
                    placeholder={this.props.placeholder}
                    isFocused={this.state.focused}
                    disabled={this.props.disabled}
                    isFilled={isFilled}
                    isDense={isDense}
                    onFocus={this.onFocus}
                    onBlur={this.onBlur}
                    onChange={this.onChange}
                />
                <style jsx>{`
                    div :global(.disabled),
                    div :global(.disabled::placeholder) {
                        color: ${colors.grey500};
                        cursor: not-allowed;
                    }
                `}</style>
            </Container>
        )
    }
}

InputField.defaultProps = {
    status: iconStatuses.DEFAULT,
    size: inputSizes.DEFAULT,
    kind: inputKinds.FILLED,
    type: types.TEXT,
    focus: false,
    disabled: false,
    required: false,
    placeholder: '',
}

InputField.propTypes = {
    name: propTypes.string.isRequired,
    onChange: propTypes.func.isRequired,
    label: propTypes.string.isRequired,
    value: propTypes.string.isRequired,

    className: propTypes.string,
    disabled: propTypes.bool,
    required: propTypes.bool,
    focus: propTypes.bool,
    status: iconStatusPropType,
    size: propTypes.oneOf([inputSizes.DEFAULT, inputSizes.DENSE]),
    kind: propTypes.oneOf([inputKinds.FILLED, inputKinds.OUTLINED]),

    onFocus: propTypes.func,
    onBlur: propTypes.func,

    placeholder: propTypes.string,
    type: propTypes.oneOf([
        types.TEXT,
        types.EMAIL,
        types.NUMBER,
        types.PASSWORD,
        types.URL,
    ]),
}

export { InputField }
