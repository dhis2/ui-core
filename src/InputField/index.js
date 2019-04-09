import PropTypes from 'prop-types'
import React, { Fragment } from 'react'
import css from 'styled-jsx/css'
import cx from 'classnames'

import { Input } from './InputField/Input'
import { LabelFilled } from '../forms/LabelFilled'
import { LabelOutlined } from '../forms/LabelOutlined'
import { colors } from '../theme'
import { iconStatusPropType, iconStatuses } from '../icons/constants'
import { inputKinds, inputSizes } from '../forms/constants'
import Help from '../Help'

const styles = css`
    .base {
        display: inline-block;
        width: 100%;
        color: ${colors.grey700};
    }
`

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
            <div
                className={cx('base', this.props.className, {
                    disabled: this.props.disabled,
                })}
                onClick={this.onFocus}
            >
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
                </Container>

                {this.props.help && (
                    <Help text={this.props.help} status={this.props.status} />
                )}

                <style jsx>{`
                    div :global(.disabled),
                    div :global(.disabled::placeholder) {
                        color: ${colors.grey500};
                        cursor: not-allowed;
                    }
                `}</style>

                <style jsx>{styles}</style>
            </div>
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
    name: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    label: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,

    help: PropTypes.string,
    className: PropTypes.string,
    disabled: PropTypes.bool,
    required: PropTypes.bool,
    focus: PropTypes.bool,
    status: iconStatusPropType,
    size: PropTypes.oneOf([inputSizes.DEFAULT, inputSizes.DENSE]),
    kind: PropTypes.oneOf([inputKinds.FILLED, inputKinds.OUTLINED]),

    onFocus: PropTypes.func,
    onBlur: PropTypes.func,

    placeholder: PropTypes.string,
    type: PropTypes.oneOf([
        types.TEXT,
        types.EMAIL,
        types.NUMBER,
        types.PASSWORD,
        types.URL,
    ]),
}

export { InputField }
export default InputField
