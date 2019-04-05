import PropTypes from 'prop-types'
import React, { Fragment } from 'react'
import css from 'styled-jsx/css'
import cx from 'classnames'

import { Field } from './InputField/Field'
import { Fieldset } from './InputField/Fieldset'
import { Input } from './InputField/Input'
import { Label } from './InputField/Label'
import { LabelFilled } from '../forms/LabelFilled'
import { LabelOutlined } from '../forms/LabelOutlined'
import { TrailIcon } from './InputField/TrailIcon'
import { colors } from '../theme.js'
import { createIcon } from '../icons/helpers'
import { iconStatusPropType, iconStatuses } from '../icons/constants'
import { inputKinds, inputSizes } from '../forms/constants'
import Help from '../Help'
import styles from './styles.js'

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

    componentDidMount() {
        this.setState({
            focused: this.props.focus,
        })
    }

    isFocused() {
        return this.state.focused
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
        const isFilled = this.props.kind === inputKinds.FILLED
        const isDense = this.props.size === inputSizes.DENSE
        const Container =
            this.props.kind === inputKinds.FILLED ? LabelFilled : LabelOutlined

        return (
            <div
                className={cx('base', this.props.className, {
                    focused: this.isFocused(),
                    disabled: this.props.disabled,
                })}
                onClick={this.onFocus}
            >
                <Container
                    label={this.props.label || this.props.placeholder}
                    isFocused={this.state.focused}
                    hasValue={!!this.props.value || this.props.placeholder}
                    htmlFor={this.props.name}
                    required={this.props.required}
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
    className: PropTypes.string,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    label: PropTypes.string,
    placeholder: PropTypes.string,
    help: PropTypes.string,
    status: iconStatusPropType,
    size: PropTypes.oneOf([inputSizes.DEFAULT, inputSizes.DENSE]),
    kind: PropTypes.oneOf([inputKinds.FILLED, inputKinds.OUTLINED]),
    type: PropTypes.oneOf([
        types.TEXT,
        types.EMAIL,
        types.NUMBER,
        types.PASSWORD,
        types.URL,
    ]),
    focus: PropTypes.bool,
    disabled: PropTypes.bool,
    required: PropTypes.bool,
}

export { InputField }
export default InputField
