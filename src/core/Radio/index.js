import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import { colors } from '../colors.js'
import styles from './styles.js'

import { Checked, Unchecked } from '../../icons/Radio.js'

import css from 'styled-jsx/css'

const icons = {
    default: css.resolve`i { color: ${colors.grey700}; }`,
    checked: css.resolve`i { color: ${colors.teal400}; }`,
    valid: css.resolve`i { color: ${colors.blue600}; }`,
    warning: css.resolve`i { color: ${colors.yellow500}; }`,
    error: css.resolve`i { color: ${colors.red500}; }`,
}

class Radio extends React.Component {
    onChange = () => this.props.onChange(this.props.name, this.props.value)

    render() {
        const { required, status, checked, className } = this.props

        const state = status === 'default' && checked ? 'checked' : status
        const icon = this.props.checked ? (
            <Checked className={icons[state].className} />
        ) : (
            <Unchecked className={icons[state].className} />
        )

        return (
            <label
                className={cx('base', className, {
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
                <span className={cx('label', { required })}>
                    {this.props.label}
                </span>

                {icons[state].styles}
                <style jsx>{styles}</style>
            </label>
        )
    }
}

Radio.defaultProps = {
    checked: false,
    status: 'default',
    disabled: false,
}

Radio.propTypes = {
    className: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    label: PropTypes.string,
    checked: PropTypes.bool,
    disabled: PropTypes.bool,
    status: PropTypes.oneOf(['default', 'valid', 'warning', 'error']),
}

export { Radio }
export default Radio
