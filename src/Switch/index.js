import React from 'react'
import propTypes from 'prop-types'
import cx from 'classnames'

import styles from './styles'

import { Help } from '..'

class Switch extends React.Component {
    onChange = () => {
        if (this.props.disabled) {
            return
        }

        this.props.onChange(!this.props.checked)
    }

    render() {
        const { status, help, disabled, className } = this.props
        return (
            <div>
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

                {this.props.help && (
                    <Help text={this.props.help} status={this.props.status} />
                )}
            </div>
        )
    }
}

Switch.defaultProps = {
    checked: false,
    disabled: false,
    status: 'default',
}

Switch.propTypes = {
    name: propTypes.string.isRequired,
    onChange: propTypes.func.isRequired,
    className: propTypes.string,
    checked: propTypes.bool,
    label: propTypes.string,
    help: propTypes.string,
    disabled: propTypes.bool,
    status: propTypes.oneOf(['default', 'valid', 'warning', 'error']),
}

export { Switch }
