import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import css from 'styled-jsx/css'
import cx from 'classnames'

import { Valid, Warning, Error } from '../icons/Status.js'
import { colors } from '../theme.js'
import {
    inputFontSizeValue,
    heightDefault,
    heightDense,
} from '../forms/constants'
import { Input } from './InputField/Input'
import { Label } from './InputField/Label'
import { Fieldset } from './InputField/Fieldset'
import { Field } from './InputField/Field'
import Help from '../Help'
import styles from './styles.js'

const statusToIcon = {
    valid: <Valid />,
    warning: <Warning />,
    error: <Error />,
}

const icons = {
    default: css.resolve`
		svg {
			fill: ${colors.grey700};
			height: 24px;
			width: 24px;
			margin-right: 8px;
		}
	`,
    valid: css.resolve`
		svg {
			fill: ${colors.blue600};
			height: 24px;
			width: 24px;
			margin-right: 8px;
		}
	`,
    warning: css.resolve`
		svg {
			fill: ${colors.yellow500};
			height: 24px;
			width: 24px;
			margin-right: 8px;
		}
	`,
    error: css.resolve`
		svg {
			fill: ${colors.red500};
			height: 24px;
			width: 24px;
			margin-right: 8px;
		}
	`,
}

function icon(Icon, extra = 'default') {
    if (Icon) {
        return (
            <Fragment>
                <Icon.type {...Icon.props} className={icons[extra].className} />
                {icons[extra].styles}
            </Fragment>
        )
    }
    return null
}

const TrailIcon = ({ status, trail }) =>
    status !== 'default' ? icon(statusToIcon[status], status) : trail

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
                    />

                    <Label
                        status={this.props.status}
                        size={this.props.size}
                        kind={this.props.kind}
                        isShrinked={this.shouldShrink()}
                        isFocused={this.isFocused()}
                        isDisabled={this.props.disabled}
                        isRequired={this.props.required}
                        hasIcon={!!this.props.icon}
                        className={this.props.styles.label}
                        styles={this.props.styles.label}
                        label={this.props.label}
                    />

                    {icon(this.props.icon)}

                    <Input
                        type={this.props.type}
                        value={this.props.value}
                        placeholder={this.props.placeholder}
                        isFocused={this.props.focus}
                        disabled={this.props.disabled}
                        filled={this.props.kind === 'filled'}
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
    status: 'default',
    size: 'default',
    kind: 'filled',
    type: 'text',
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
    status: PropTypes.oneOf(['default', 'valid', 'warning', 'error']),
    size: PropTypes.oneOf(['default', 'dense']),
    kind: PropTypes.oneOf(['filled', 'outlined']),
    type: PropTypes.oneOf(['text', 'email', 'number', 'password', 'url']),
    focus: PropTypes.bool,
    disabled: PropTypes.bool,
    required: PropTypes.bool,
    styles: PropTypes.shape({
        label: PropTypes.oneOf([PropTypes.string, PropTypes.object]),
    }),
}

export { InputField }
export default InputField
