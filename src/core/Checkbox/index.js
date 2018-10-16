import React from 'react'
import PropTypes from 'prop-types'

import Icon from '../Icon'

import s from './styles'

class Checkbox extends React.Component {
    state = {
        checked: !!this.props.checked,
        indeterminate: !!this.props.indeterminate,
    }

    onClick = () => {
        const checked = !this.state.checked
        this.props.onChange(this.props.name, checked)
        this.setState({ checked, indeterminate: false })
    }

    render() {
        let icon
        if (this.state.indeterminate) {
            icon = (
                <Icon
                    name="indeterminate_check_box"
                    className={`grey ${this.props.status}`}
                />
            )
        } else if (this.props.disabled) {
            icon = (
                <Icon
                    name="check_box_outline_blank"
                    className={`grey-light ${this.props.status}`}
                />
            )
        } else if (this.state.checked) {
            icon = (
                <Icon
                    name="check_box"
                    className={`secondary-light ${this.props.status}`}
                />
            )
        } else {
            icon = (
                <Icon
                    name="check_box_outline_blank"
                    className={`grey ${this.props.status}`}
                />
            )
        }

        return (
            <label htmlFor={this.props.name} className={s('container')}>
                <input
                    type="checkbox"
                    id={this.props.name}
                    onClick={this.onClick}
                    checked={this.state.checked}
                    disabled={this.props.disabled}
                />
                {icon}
                <span
                    className={s('label', {
                        required: this.props.required,
                        [this.props.status]: true,
                    })}
                >
                    {this.props.label}
                </span>
            </label>
        )
    }
}

Checkbox.defaultProps = {
    disabled: false,
    indeterminate: false,
    checked: false,
    required: false,
    label: '',
}

Checkbox.propTypes = {
    label: PropTypes.string,
    name: PropTypes.string.isRequired,
    checked: PropTypes.bool,
    disabled: PropTypes.bool,
    indeterminate: PropTypes.bool,
    required: PropTypes.bool,
    onChange: PropTypes.func.isRequired,
    status: PropTypes.oneOf(['default', 'valid', 'warning', 'error']),
}

export { Checkbox }
export default Checkbox
