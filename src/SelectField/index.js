import propTypes from 'prop-types'
import React, { Fragment } from 'react'
import css from 'styled-jsx/css'
import cx from 'classnames'

import { ArrowDown } from '../icons/Arrow'
import { LabelFilled, LabelOutlined } from '../FieldLabel'
import { Select } from './Select'
import { colors } from '../theme'
import { iconStatusPropType, iconStatuses } from '../icons/constants'
import { inputKinds, inputSizes } from '../forms/constants'
import { Help } from '../Help'

const styles = css`
    .base {
        display: inline-block;
        position: relative;
        width: 100%;
        background-color: inherit;
        color: ${colors.grey700};
        pointer-events: all;
        user-select: none;
    }

    .disabled {
        cursor: not-allowed;
        opacity: 1;
    }
`

const TailIcon = () => (
    <div>
        <ArrowDown />
        <style jsx>{`
            div {
                pointer-events: none;
                position: absolute;
                right: 4px;
            }
        `}</style>
    </div>
)

class SelectField extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            focused: props.focused,
        }
    }

    onChange = event => {
        if (!this.props.disabled) {
            const { value } = event.target
            this.props.onChange(this.props.name, value)
        }
    }

    onFocus = e => {
        this.setState({ focused: true })

        if (this.props.onFocus) {
            this.props.onFocus(e)
        }
    }

    onBlur = e => {
        this.setState({ focused: false })

        if (this.props.onBlur) {
            this.props.onBlur(e)
        }
    }

    isFocused() {
        return this.state.focused
    }

    render() {
        const isFilled = this.props.kind === inputKinds.FILLED
        const isDense = this.props.size === inputSizes.DENSE
        const Container =
            this.props.kind === inputKinds.FILLED ? LabelFilled : LabelOutlined

        return (
            <div
                className={cx('base', this.props.className, {
                    selected: !!this.props.value,
                    disabled: this.props.disabled,
                    [`size-${this.props.size}`]: true,
                })}
            >
                <Container
                    label={this.props.label}
                    isFocused={this.isFocused()}
                    hasValue={true}
                    htmlFor={this.props.name}
                    required={this.props.required}
                    disabled={this.props.disabled}
                    status={this.props.status}
                    size={this.props.size}
                    onClick={this.onFocus}
                >
                    <Select
                        value={this.props.value}
                        disabled={this.props.disabled}
                        list={this.props.list}
                        kind={this.props.kind}
                        size={this.props.size}
                        onChange={this.onChange}
                        onFocus={this.onFocus}
                        onBlur={this.onBlur}
                    />

                    <TailIcon />
                </Container>

                {this.props.help && (
                    <Help text={this.props.help} status={this.props.status} />
                )}

                <style jsx>{styles}</style>
            </div>
        )
    }
}

SelectField.defaultProps = {
    size: inputSizes.DEFAULT,
    kind: inputKinds.FILLED,
    status: iconStatuses.DEFAULT,
    help: '',
    className: '',
    disabled: false,
    required: false,
}

SelectField.propTypes = {
    name: propTypes.string.isRequired,
    onChange: propTypes.func.isRequired,
    label: propTypes.string.isRequired,
    value: propTypes.string.isRequired,
    list: Select.propTypes.list,

    help: propTypes.string,
    className: propTypes.string,
    disabled: propTypes.bool,
    required: propTypes.bool,
    focus: propTypes.bool,
    size: propTypes.oneOf([inputSizes.DEFAULT, inputSizes.DENSE]),
    kind: propTypes.oneOf([inputKinds.FILLED, inputKinds.OUTLINED]),
    status: iconStatusPropType,

    onFocus: propTypes.func,
    onBlur: propTypes.func,
}

export { SelectField }
