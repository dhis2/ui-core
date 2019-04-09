import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import styles from './styles'

class Switch extends React.Component {
    onChange = () => {
        if (this.props.disabled) {
            return
        }

        this.props.onChange(!this.props.checked)
    }

    render() {
        const { status, disabled, className } = this.props
        return (
            <label className={cx(status, className, { disabled })}>
                <input
                    type="checkbox"
                    disabled={disabled}
                    name={this.props.name}
                    checked={this.props.checked}
                    onChange={this.onChange}
                />
                <span
                    className={cx('label', {
                        [`status-${status}`]: true,
                    })}
                >
                    {this.props.label}
                </span>
                {this.props.required && <span className="required" />}
                <style jsx>{styles}</style>
            </label>
        )
    }
}

Switch.defaultProps = {
    checked: false,
    disabled: false,
    status: 'default',
}

Switch.propTypes = {
    name: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    className: PropTypes.string,
    checked: PropTypes.bool,
    label: PropTypes.string,
    disabled: PropTypes.bool,
    status: PropTypes.oneOf(['default', 'valid', 'warning', 'error']),
}

export { Switch }
export default Switch
