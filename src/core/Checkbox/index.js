import React from 'react'
import PropTypes from 'prop-types'

import Icon from '../Icon'

import { Label, Help } from '../helpers'

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

    icons = {
        indeterminate: <Icon name="indeterminate_check_box" className="grey" />,
        unchecked: <Icon name="check_box_outline_blank" className="grey" />,
        checked: <Icon name="check_box" className="secondary-light" />,
        disabled: (
            <Icon name="check_box_outline_blank" className="grey-light" />
        ),
    }

    render() {
        let icon
        if (this.state.indeterminate) {
            icon = this.icons.indeterminate
        } else if (this.props.disabled) {
            icon = this.icons.disabled
        } else if (this.state.checked) {
            icon = this.icons.checked
        } else {
            icon = this.icons.unchecked
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
