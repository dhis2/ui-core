import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import Menu from '../Menu'
import Help from '../Help'
import { isPointInRect } from '../../utils/math'

import cx from 'classnames'

import styles from './styles.js'
import css from 'styled-jsx/css'
import { colors } from '../theme.js'

import { Valid, Warning, Error } from '../icons/Status.js'
import { ArrowUp, ArrowDown } from '../icons/Arrow.js'

const arrowIcon = css.resolve`
    svg {
        fill: inherit;
        height: 24px;
        width: 24px;
        vertical-align: middle;
        pointer-events: none;
    }
`

const menuOverride = css.resolve`
    max-height: 300px;
    overflow-y: auto;
`

const statusToIcon = {
    valid: <Valid />,
    warning: <Warning />,
    error: <Error />,
}

const icons = {
    default: css.resolve`
		svg {
			fill: ${colors.grey700};
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
function icon(Icon, action = null, extra = 'default') {
    if (Icon) {
        return (
            <Fragment>
                <Icon.type
                    {...Icon.props}
                    onClick={action}
                    className={icons[extra].className}
                />
                {icons[extra].styles}
            </Fragment>
        )
    }
    return null
}

function trailIcon(status, trail, fn) {
    if (status !== 'default') {
        return icon(statusToIcon[status], fn, status)
    } else {
        return icon(trail, fn)
    }
}

function markActive(list, value) {
    if (!value) {
        return list
    }

    return list.slice(0).map(item => {
        item.active = item.value && item.value === value

        if (Array.isArray(item.list)) {
            item.list = markActive(item.list, value)
        }

        return item
    })
}

class SelectField extends React.Component {
    state = {
        open: false,
        labelWidth: 0,
    }

    constructor(props) {
        super(props)
        this.labelRef = React.createRef()
    }

    componentDidMount() {
        document.addEventListener('click', this.onDocClick)

        this.setState({ labelWidth: this.labelRef.current.offsetWidth })
    }

    componentWillUnmount() {
        document.removeEventListener('click', this.onDocClick)
    }

    onDocClick = evt => {
        if (this.elContainer && this.elMenu) {
            const target = { x: evt.clientX, y: evt.clientY }
            const menu = this.elMenu.getBoundingClientRect()
            const container = this.elContainer.getBoundingClientRect()

            if (
                !isPointInRect(target, menu) &&
                !isPointInRect(target, container)
            ) {
                this.setState({ open: false })
            }
        }
    }

    onToggle = () => {
        if (this.props.disabled) {
            return false
        }

        this.setState({ open: !this.state.open })
    }

    onClick = value => {
        if (this.props.disabled) {
            return false
        }

        this.setState({ open: false })
        this.props.onChange(this.props.name, value)
    }

    getLabel() {
        if (!this.props.value) {
            return false
        }

        const selected = this.props.list.filter(
            ({ value }) => this.props.value === value
        )
        return selected.length > 0 ? selected[0]['label'] : null
    }

    isFocused() {
        return this.state.focused
    }

    shrink() {
        return !!(
            this.isFocused() ||
            this.props.value ||
            this.props.placeholder
        )
    }

    render() {
        const legendWidth = this.shrink()
            ? { width: `${this.state.labelWidth}px` }
            : { width: '0.01px' }

        const { open } = this.state

        let width = 'inherit'
        if (open && this.elSelect) {
            width = `${this.elSelect.getBoundingClientRect().width}px`
        }

        const selected = this.getLabel()
        const list = markActive(this.props.list, this.props.value)

        const Arrow = open ? (
            <ArrowUp className={arrowIcon.className} />
        ) : (
            <ArrowDown className={arrowIcon.className} />
        )

        return (
            <div
                ref={c => (this.elContainer = c)}
                className={cx('base', this.props.className, {
                    selected: !!this.props.value,
                    disabled: this.props.disabled,
                    [`size-${this.props.size}`]: true,
                })}
            >
                <div
                    ref={c => (this.elSelect = c)}
                    className={cx('select', {
                        [`kind-${this.props.kind}`]: true,
                        [`status-${this.props.status}`]: true,
                        disabled: this.props.disabled,
                    })}
                    onClick={this.onToggle}
                >
                    <label
                        ref={this.labelRef}
                        className={cx('label', {
                            [`${this.props.status}`]: true,
                            [`${this.props.size}`]: true,
                            [`${this.props.kind}`]: true,
                            'has-icon': !!this.props.icon,
                            required: this.props.required,
                            disabled: this.props.disabled,
                            focused: this.isFocused(),
                            shrink: !!selected,
                        })}
                    >
                        {this.props.label}
                    </label>
                    {this.props.kind === 'outlined' && (
                        <fieldset
                            className={cx('flatline', {
                                [`${this.props.status}`]: true,
                                focused: this.isFocused(),
                                idle: !this.isFocused(),
                                filled: this.state.text,
                            })}
                        >
                            <legend className="legend" style={legendWidth}>
                                <span>&#8203;</span>
                            </legend>
                        </fieldset>
                    )}

                    {this.props.icon && (
                        <div className="lead-icon-field">{this.props.icon}</div>
                    )}

                    <div
                        className={cx('input-field', {
                            disabled: this.props.disabled,
                        })}
                    >
                        <div className="value">{selected}</div>
                    </div>

                    <div className="trail-icon-field">
                        {this.props.status !== 'default' &&
                            trailIcon(this.props.status)}
                    </div>

                    <div
                        className={cx('trail-icon-field', {
                            disabled: this.props.disabled,
                        })}
                    >
                        {Arrow}
                    </div>
                </div>
                {this.props.help && (
                    <Help text={this.props.help} status={this.props.status} />
                )}
                {open && (
                    <div className="menu" ref={c => (this.elMenu = c)}>
                        <Menu
                            list={list}
                            size={this.props.size}
                            onClick={this.onClick}
                            className={menuOverride.className}
                        />
                    </div>
                )}
                {menuOverride.styles}
                {arrowIcon.styles}
                <style jsx>{styles}</style>
            </div>
        )
    }
}

SelectField.defaultProps = {
    size: 'default',
    kind: 'filled',
    status: 'default',
    disabled: false,
    required: false,
}

SelectField.propTypes = {
    className: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    list: PropTypes.arrayOf(
        PropTypes.shape({
            label: PropTypes.string.isRequired,
            value: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
                .isRequired,
        })
    ).isRequired,

    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    icon: PropTypes.element,
    help: PropTypes.string,
    size: PropTypes.oneOf(['default', 'dense']),
    kind: PropTypes.oneOf(['filled', 'outlined']),
    status: PropTypes.oneOf(['default', 'valid', 'warning', 'error']),

    disabled: PropTypes.bool,
    required: PropTypes.bool,
}

export { SelectField }
export default SelectField
