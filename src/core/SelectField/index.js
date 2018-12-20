import React from 'react'
import PropTypes from 'prop-types'
import Icon from '../Icon'
import Menu from '../Menu'
import { Help } from '../helpers'
import { isPointInRect } from '../../utils'

import cx, { rx } from './styles'

const statusToIcon = {
    valid: 'check_circle',
    warning: 'warning',
    error: 'error',
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
            : { width: 0 }

        const { open } = this.state

        let width = 'inherit'
        if (open && this.elSelect) {
            width = `${this.elSelect.getBoundingClientRect().width}px`
        }

        const selected = this.getLabel()
        const list = markActive(this.props.list, this.props.value)

        return (
            <div
                ref={c => (this.elContainer = c)}
                className={rx('base', {
                    selected: !!this.props.value,
                    disabled: this.props.disabled,
                    [`size-${this.props.size}`]: true,
                })}
            >
                <div
                    ref={c => (this.elSelect = c)}
                    className={rx('select', {
                        [`kind-${this.props.kind}`]: true,
                        [`status-${this.props.status}`]: true,
                        disabled: this.props.disabled,
                    })}
                    onClick={this.onToggle}
                >
                    <label
                        ref={this.labelRef}
                        className={rx('label', {
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
                            className={rx('flatline', {
                                [`${this.props.status}`]: true,
                                focused: this.isFocused(),
                                idle: !this.isFocused(),
                                filled: this.state.text,
                            })}
                        >
                            <legend
                                className={cx('legend')}
                                style={legendWidth}
                            >
                                &nbsp;
                            </legend>
                        </fieldset>
                    )}

                    {this.props.icon && (
                        <div className={cx('lead-icon-field')}>
                            <Icon
                                name={this.props.icon}
                                className={cx('icon')}
                            />
                        </div>
                    )}
                    <div
                        className={rx('input-field', {
                            disabled: this.props.disabled,
                        })}
                    >
                        <div className={rx('value')}>{selected}</div>
                    </div>
                    <div className={rx('trail-icon-field')}>
                        {this.props.status !== 'default' && (
                            <Icon
                                name={statusToIcon[this.props.status]}
                                className={cx('icon', {
                                    [`icon-${this.props.status}`]: true,
                                })}
                            />
                        )}
                    </div>
                    <div
                        className={rx('trail-icon-field', {
                            disabled: this.props.disabled,
                        })}
                    >
                        <Icon
                            name={open ? 'arrow_drop_up' : 'arrow_drop_down'}
                            className={cx('arrow-icon', {
                                disabled: this.props.disabled,
                            })}
                        />
                    </div>
                </div>
                {this.props.help && (
                    <Help text={this.props.help} status={this.props.status} />
                )}
                {open && (
                    <div className={rx('menu')} ref={c => (this.elMenu = c)}>
                        <Menu
                            list={list}
                            size={this.props.size}
                            onClick={this.onClick}
                        />
                    </div>
                )}
            </div>
        )
    }
}

SelectField.defaultProps = {
    disabled: false,
    label: '',
    size: 'default',
    status: 'default',
}

SelectField.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    list: PropTypes.arrayOf(
        PropTypes.shape({
            label: PropTypes.string.isRequired,
            value: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
                .isRequired,
        })
    ),
    icon: PropTypes.string,
    help: PropTypes.string,
    disabled: PropTypes.bool,
    required: PropTypes.bool,
    size: PropTypes.oneOf(['default', 'dense']),
    kind: PropTypes.oneOf(['filled', 'outlined']),
    status: PropTypes.oneOf(['default', 'valid', 'warning', 'error']),
    onChange: PropTypes.func.isRequired,
}

export { SelectField }
export default SelectField
