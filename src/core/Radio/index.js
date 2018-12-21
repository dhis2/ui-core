import React from 'react'
import PropTypes from 'prop-types'

import Icon from '../Icon'
import cx, { rx } from './styles'

class Radio extends React.Component {
    onChange = () => this.props.onChange(this.props.name, this.props.value)

    render() {
        const { required, status } = this.props
        const icon = (
            <Icon
                name={
                    this.props.checked
                        ? 'radio_button_checked'
                        : 'radio_button_unchecked'
                }
                className={cx('icon', `${status}-icon`, {
                    disabled: this.props.disabled,
                    checked: this.props.checked,
                })}
            />
        )

        return (
            <label
                className={rx('base', {
                    disabled: this.props.disabled,
                })}
            >
                <input
                    type="radio"
                    name={this.props.name}
                    value={this.props.value}
                    checked={this.props.checked}
                    disabled={this.props.disabled}
                    onChange={this.onChange}
                />
                {icon}
                <span className={rx('label', { required })}>
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
