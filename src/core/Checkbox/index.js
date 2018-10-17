import React from 'react'
import PropTypes from 'prop-types'

import Icon from '../Icon'
import s from './styles'

class Checkbox extends React.Component {
    state = {
        checked: this.props.checked,
        indeterminate: this.props.indeterminate,
    }

    onChange = () => {
        const checked = !this.state.checked
        this.props.onChange(this.props.name, checked)
        this.setState({ checked, indeterminate: false })
    }

    render() {
        let icoColor = this.props.disabled ? 'grey-light' : 'grey'
        let icoName

        if (this.state.indeterminate) {
            icoName = 'indeterminate_check_box'
        } else if (this.state.checked) {
            icoName = 'check_box'
            icoColor = this.props.disabled ? icoColor : 'secondary-light'
        } else {
            icoName = 'check_box_outline_blank'
        }

        const icon = (
            <Icon
                name={icoName}
                className={`${icoColor} ${this.props.status}`}
            />
        )

        return (
            <label className={s('container')}>
                <input
                    type="checkbox"
                    onChange={this.onChange}
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
