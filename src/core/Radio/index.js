import React from 'react'
import PropTypes from 'prop-types'

import Icon from '../Icon'

import s from './styles'

class Radio extends React.Component {
    onChange = evt => {
        return this.props.onChange(this.props.name, this.props.value)
    }

    render() {
        let icoColor = this.props.disabled ? 'grey-light' : 'grey'
        let icoName

        if (this.props.checked) {
            icoName = 'radio_button_checked'
        } else {
            icoName = 'radio_button_unchecked'
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
    disabled: false,
    checked: false,
    status: 'default',
    label: '',
}

Radio.propTypes = {
    label: PropTypes.string,
    name: PropTypes.string.isRequired,
    checked: PropTypes.bool,
    disabled: PropTypes.bool,
    onChange: PropTypes.func.isRequired,
    status: PropTypes.oneOf(['default', 'valid', 'warning', 'error']),
}

export { Radio }
export default Radio
