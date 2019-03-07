import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import { colors, fonts } from '../theme.js'
import styles from './styles.js'

import { Indeterminate, Checked, Unchecked } from '../../icons/Checkbox.js'

import css from 'styled-jsx/css'

const icons = {
    default: css.resolve`
		svg {
			fill: ${colors.grey700};
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
                <style jsx>{fonts}</style>
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
    className: PropTypes.string,
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
