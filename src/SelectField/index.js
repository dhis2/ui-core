import PropTypes from 'prop-types'
import React, { Fragment } from 'react'
import css from 'styled-jsx/css'
import cx from 'classnames'

import { ArrowUp, ArrowDown } from '../icons/Arrow'
import { Valid, Warning, Error } from '../icons/Status'
import { colors, fonts } from '../theme'
import { createIcon } from '../icons/helpers'
import {
    iconStatusPropType,
    iconStatuses,
    statusToIcon,
} from '../icons/constants'
import { inputKinds, inputSizes } from '../forms/constants'
import { isPointInRect } from '../utils/math'
import Help from '../Help'
import Menu from '../Menu'
import styles, { arrowIcon, menuOverride, selectIconStyles } from './styles'

function createTrailIcon(status, trail, fn) {
    const icon = status !== iconStatuses.DEFAULT ? statusToIcon[status] : trail
    const options = {
        action: fn,
        className: selectIconStyles.className,
    }

    return createIcon(icon, options)
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
        const { open } = this.state
        const selected = this.getLabel()
        const list = markActive(this.props.list, this.props.value)

        const legendWidth = this.shrink()
            ? { width: `${this.state.labelWidth}px` }
            : { width: '0.01px' }

        const width =
            open && this.elSelect
                ? `${this.elSelect.getBoundingClientRect().width}px`
                : 'inherit'

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
                        {this.props.status !== iconStatuses.DEFAULT &&
                            createTrailIcon(this.props.status)}
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

                <style>{menuOverride.styles}</style>
                <style>{arrowIcon.styles}</style>
                <style jsx>{styles}</style>
                <style>{selectIconStyles.styles}</style>
            </div>
        )
    }
}

SelectField.defaultProps = {
    size: inputSizes.DEFAULT,
    kind: inputKinds.FILLED,
    status: iconStatuses.DEFAULT,
    help: '',
    className: '',
    disabled: false,
    required: false,
}

SelectField.propTypes = {
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

    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    help: PropTypes.string,
    className: PropTypes.string,
    disabled: PropTypes.bool,
    required: PropTypes.bool,
    icon: PropTypes.element,
    size: PropTypes.oneOf([inputSizes.DEFAULT, inputSizes.DENSE]),
    kind: PropTypes.oneOf([inputKinds.FILLED, inputKinds.OUTLINED]),
    status: iconStatusPropType,
}

export { SelectField, iconStatuses, inputSizes, inputKinds }
export default SelectField
