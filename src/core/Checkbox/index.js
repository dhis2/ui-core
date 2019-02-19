import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Icon from '../Icon'
import styles from './styles.js'

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
                className={cx('icon', `${status}-icon`, {
                    disabled: this.props.disabled,
                    checked: this.props.checked,
                })}
            />
        )

        return (
            <label
                className={cx('base', {
                    disabled: this.props.disabled,
                })}
            >
                <input
                    type="checkbox"
                    onChange={this.onChange}
                    checked={this.props.checked}
                    disabled={this.props.disabled}
                />
                {icon}
                <span className={cx('label', { required })}>
                    {this.props.label}
                </span>

                <style jsx>{styles}</style>
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
    onChange: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired,

    label: PropTypes.string,
    checked: PropTypes.bool,
    required: PropTypes.bool,
    disabled: PropTypes.bool,
    indeterminate: PropTypes.bool,
    status: PropTypes.oneOf(['default', 'valid', 'warning', 'error']),
}

export { Checkbox }
export default Checkbox
