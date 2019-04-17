import React from 'react'
import propTypes from 'prop-types'
import cx from 'classnames'

import { colors } from '../theme.js'
import styles from './styles.js'

import { Indeterminate, Checked, Unchecked } from '../icons/Checkbox.js'

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
        const { required, status, checked, className } = this.props
        const state = status === 'default' && checked ? 'checked' : status

        let icon = <Unchecked className={icons[state].className} />

        if (this.state.indeterminate) {
            icon = <Indeterminate className={icons[state].className} />
        } else if (this.props.checked) {
            icon = <Checked className={icons[state].className} />
        }

        console.log(icon)

        return (
            <label
                className={cx('base', className, {
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

                {icons[state].styles}
                <style jsx>{styles}</style>
            </label>
        )
    }
}

Checkbox.defaultProps = {
    checked: false,
    required: false,
    disabled: false,
    indeterminate: false,
    status: 'default',
}

Checkbox.propTypes = {
    className: propTypes.string,
    onChange: propTypes.func.isRequired,
    name: propTypes.string.isRequired,
    label: propTypes.string,
    checked: propTypes.bool,
    required: propTypes.bool,
    disabled: propTypes.bool,
    indeterminate: propTypes.bool,
    status: propTypes.oneOf(['default', 'valid', 'warning', 'error']),
}

export { Checkbox }
