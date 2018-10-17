import React from 'react'
import PropTypes from 'prop-types'

import Icon from '../Icon'
import { inputColorClass } from '../../utils'
import s from './styles'

class Checkbox extends React.Component {
    state = {
        indeterminate: this.props.indeterminate,
    }

    onChange = () => {
        this.props.onChange(this.props.name, !this.props.checked)

        if (this.state.indeterminate) {
            this.setState({ indeterminate: false })
        }
    }

    render() {
        const { required, status } = this.props
        let name = 'check_box_outline_blank'
        if (this.state.indeterminate) {
            name = 'indeterminate_check_box'
        } else if (this.props.checked) {
            name = 'check_box'
        }

        const icon = (
            <Icon
                name={name}
                className={`${inputColorClass(
                    this.props.checked,
                    this.props.disabled
                )} ${status}`}
            />
        )

        return (
            <label className={s('container')}>
                <input
                    type="checkbox"
                    onChange={this.onChange}
                    checked={this.props.checked}
                    disabled={this.props.disabled}
                />
                {icon}
                <span className={s('label', status, { required })}>
                    {this.props.label}
                </span>
            </label>
        )
    }
}

Checkbox.defaultProps = {
    label: '',
    checked: false,
    required: false,
    disabled: false,
    indeterminate: false,
    status: 'default',
}

Checkbox.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string,
    checked: PropTypes.bool,
    required: PropTypes.bool,
    disabled: PropTypes.bool,
    indeterminate: PropTypes.bool,
    status: PropTypes.oneOf(['default', 'valid', 'warning', 'error']),
    onChange: PropTypes.func.isRequired,
}

export { Checkbox }
export default Checkbox
