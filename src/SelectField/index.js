import PropTypes from 'prop-types'
import React, { Fragment } from 'react'
import css from 'styled-jsx/css'
import cx from 'classnames'

import { Arrow } from './Arrow'
import { LabelFilled } from '../forms/LabelFilled'
import { LabelOutlined } from '../forms/LabelOutlined'
import { Select } from './Select'
import { colors } from '../theme'
import { iconStatusPropType, iconStatuses } from '../icons/constants'
import { inputKinds, inputSizes } from '../forms/constants'
import { isPointInRect } from '../utils/math'
import Help from '../Help'

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

class SelectField extends React.Component {
    elContainer = React.createRef()

    constructor(props) {
        super(props)

        this.state = {
            focused: props.focused,
            open: false,
        }
    }

    componentDidMount() {
        document.addEventListener('click', this.onDocClick)
    }

    componentWillUnmount() {
        document.removeEventListener('click', this.onDocClick)
    }

    onDocClick = evt => {
        if (this.focused && this.elContainer) {
            const target = { x: evt.clientX, y: evt.clientY }
            const container = this.elContainer.getBoundingClientRect()

            if (!isPointInRect(target, container)) {
                this.setState({ focused: false, open: false })
            }
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

    shrink() {
        return !!(this.isFocused() || this.props.value)
    }

    render() {
        const { open } = this.state
        const isFilled = this.props.kind === inputKinds.FILLED
        const isDense = this.props.size === inputSizes.DENSE
        const Container =
            this.props.kind === inputKinds.FILLED ? LabelFilled : LabelOutlined

        return (
            <div
                ref={c => (this.elContainer = c)}
                className={cx('base', this.props.className, {
                    selected: !!this.props.value,
                    disabled: this.props.disabled,
                    [`size-${this.props.size}`]: true,
                })}
            >
                <Container
                    label={this.props.label}
                    isFocused={this.state.focused}
                    hasValue={true}
                    htmlFor={this.props.name}
                    required={this.props.required}
                    disabled={this.props.disabled}
                    status={this.props.status}
                    size={this.props.size}
                    tailIcon={() => <Arrow open={this.state.open} />}
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
    onFocus: null,
    onBlur: null,
}

SelectField.propTypes = {
    name: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    label: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    list: Select.propTypes.list,

    help: PropTypes.string,
    className: PropTypes.string,
    disabled: PropTypes.bool,
    required: PropTypes.bool,
    focus: PropTypes.bool,
    size: PropTypes.oneOf([inputSizes.DEFAULT, inputSizes.DENSE]),
    kind: PropTypes.oneOf([inputKinds.FILLED, inputKinds.OUTLINED]),
    status: iconStatusPropType,

    onFocus: PropTypes.func,
    onBlur: PropTypes.func,
}

export { SelectField }
export default SelectField
