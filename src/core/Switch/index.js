import React from 'react'
import PropTypes from 'prop-types'

import cx, { rx } from './styles'

class Switch extends React.Component {
    onChange = () => {
        if (this.props.disabled) {
            return
        }

        this.props.onChange(this.props.name, !this.props.checked)
    }

    render() {
        const { status, disabled } = this.props
        return (
            <label
                className={rx(status, { disabled })}
                onChange={this.onChange}
            >
                <input
                    type="checkbox"
                    className={cx('input')}
                    checked={this.props.checked}
                    disabled={disabled}
                />
                <span
                    className={rx('label', {
                        [`status-${status}`]: true,
                    })}
                >
                    {this.props.label}
                </span>
                {this.props.required && <span className={rx('required')} />}
            </label>
        )
    }
}

Switch.defaultProps = {
    label: '',
    checked: false,
    disabled: false,
    status: 'default',
}

Switch.propTypes = {
    name: PropTypes.string.isRequired,
    checked: PropTypes.bool,
    label: PropTypes.string,
    disabled: PropTypes.bool,
    status: PropTypes.oneOf(['default', 'valid', 'warning', 'error']),
    onChange: PropTypes.func.isRequired,
}

export { Switch }
export default Switch
