import React from 'react'
import propTypes from 'prop-types'
import cx from 'classnames'

import { colors } from '../theme.js'
import styles from './styles.js'

import { Checked, Unchecked } from '../icons/Radio.js'

import css from 'styled-jsx/css'

const icons = {
    default: css.resolve`
		svg {
			fill: ${colors.grey600};
			height: 24px;
			width: 24px;
		}
	`,
    checked: css.resolve`
		svg {
			fill: ${colors.teal400};
			height: 24px;
			width: 24px;
		}
	`,
    valid: css.resolve`
		svg {
			fill: ${colors.blue600};
			height: 24px;
			width: 24px;
		}
	`,
    warning: css.resolve`
		svg {
			fill: ${colors.yellow500};
			height: 24px;
			width: 24px;
		}
	`,
    error: css.resolve`
		svg {
			fill: ${colors.red500};
			height: 24px;
			width: 24px;
		}
	`,
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
    className: propTypes.string,
    onChange: propTypes.func.isRequired,
    name: propTypes.string.isRequired,
    value: propTypes.string.isRequired,
    label: propTypes.string,
    checked: propTypes.bool,
    disabled: propTypes.bool,
    status: propTypes.oneOf(['default', 'valid', 'warning', 'error']),
}

export { Radio }
