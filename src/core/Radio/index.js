import React from 'react'
import PropTypes from 'prop-types'

import Icon from '../Icon'
import { inputColorClass } from '../../utils'
import s from './styles'

class Radio extends React.Component {
    onChange = () => this.props.onChange(this.props.name, this.props.value)

    render() {
        const icon = (
            <Icon
                name={
                    this.props.checked
                        ? 'radio_button_checked'
                        : 'radio_button_unchecked'
                }
                className={`${inputColorClass(
                    this.props.checked,
                    this.props.disabled
                )} ${this.props.status}`}
            />
        )

        return (
            <label className={s('container')}>
                <input
                    type="radio"
                    name={this.props.name}
                    onChange={this.onChange}
                    checked={this.props.checked}
                    value={this.props.value}
                    disabled={this.props.disabled}
                />
                {icon}
                <span
                    className={s('label', {
                        [this.props.status]: true,
                    })}
                >
                    {this.props.label}
                </span>
            </label>
        )
    }
}

Radio.defaultProps = {
    label: '',
    checked: false,
    status: 'default',
    disabled: false,
}

Radio.propTypes = {
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    label: PropTypes.string,
    checked: PropTypes.bool,
    disabled: PropTypes.bool,
    status: PropTypes.oneOf(['default', 'valid', 'warning', 'error']),
    onChange: PropTypes.func.isRequired,
}

export { Radio }
export default Radio
