import PropTypes from 'prop-types'
import React, { Fragment } from 'react'
import css from 'styled-jsx/css'
import cx from 'classnames'

import { colors } from '../theme.js'
import { createIcon } from '../icons/helpers'
import {
    iconStatusPropType,
    iconStatuses,
    statusToIcon,
} from '../icons/constants'
import { inputKinds, inputSizes } from '../forms/constants'
import { Input } from './InputField/Input'
import { Label } from './InputField/Label'
import { Fieldset } from './InputField/Fieldset'
import { Field } from './InputField/Field'
import Help from '../Help'
import styles from './styles.js'

const types = {
    TEXT: 'text',
    EMAIL: 'email',
    NUMBER: 'number',
    PASSWORD: 'password',
    URL: 'url',
}

const TrailIcon = ({ status, trail }) =>
    status !== 'default' ? createIcon(statusToIcon[status], status) : trail

TrailIcon.propTypes = {
    status: PropTypes.string,
    fn: PropTypes.func,
}

TrailIcon.defaultProps = {
    trail: '',
}

class InputField extends React.Component {
    state = {
        focused: false,
    }

    componentDidMount() {
        this.setState({
            focused: this.props.focus,
        })
    }

    isFocused() {
        return this.state.focused
    }

    shouldShrink() {
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
        return (
            <div
                className={cx('base', this.props.className, {
                    focused: this.isFocused(),
                    disabled: this.props.disabled,
                })}
            >
                <style jsx>{`
                    div :global(.disabled),
                    div :global(.disabled::placeholder) {
                        color: ${colors.grey500};
                        cursor: not-allowed;
                    }
                `}</style>

                <Field
                    value={this.props.value}
                    size={this.props.size}
                    status={this.props.status}
                    kind={this.props.kind}
                    isFocused={this.isFocused()}
                    isFilled={this.props.kind === 'filled'}
                    isDisabled={this.props.disabled}
                >
                    <Fieldset
                        kind={this.props.kind}
                        status={this.props.status}
                        isFocused={this.isFocused()}
                        hasValue={!!this.props.value}
                    >
                        <Label
                            status={this.props.status}
                            size={this.props.size}
                            kind={this.props.kind}
                            isShrinked={this.shouldShrink()}
                            isFocused={this.isFocused()}
                            isDisabled={this.props.disabled}
                            isRequired={this.props.required}
                            hasValue={!!this.props.value}
                            hasIcon={!!this.props.icon}
                            className={this.props.styles.label}
                            styles={this.props.styles.label}
                            label={this.props.label || this.props.placeholder}
                        />
                    </Fieldset>

                    {createIcon(this.props.icon)}

                    <Input
                        type={this.props.type}
                        value={this.props.value}
                        isFocused={this.props.focus}
                        disabled={this.props.disabled}
                        isFilled={this.props.kind === 'filled'}
                        isDense={this.props.size === 'dense'}
                        onFocus={this.onFocus}
                        onBlur={this.onBlur}
                        onChange={this.onChange}
                    />

                    <TrailIcon
                        status={this.props.status}
                        trail={this.props.trailIcon}
                    />
                </Field>

                {this.props.help && (
                    <Help text={this.props.help} status={this.props.status} />
                )}

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
    styles: {},
}

InputField.propTypes = {
    className: PropTypes.string,
    name: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    label: PropTypes.string,
    placeholder: PropTypes.string,
    help: PropTypes.string,
    icon: PropTypes.element,
    trailIcon: PropTypes.element,
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
    styles: PropTypes.shape({
        label: PropTypes.oneOf([PropTypes.string, PropTypes.object]),
    }),
}

export { InputField }
export default InputField
