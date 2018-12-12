import React from 'react'
import PropTypes from 'prop-types'
import Icon from '../Icon'
import Menu from '../Menu'
import { Label, Help } from '../helpers'
import { isPointInRect } from '../../utils'
import s from './styles'

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
    }

    componentDidMount() {
        document.addEventListener('click', this.onDocClick)
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

    render() {
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
                className={s('reset', 'base', {
                    selected: !!this.props.value,
                    disabled: this.props.disabled,
                    [`size-${this.props.size}`]: true,
                })}
            >
                <div
                    ref={c => (this.elSelect = c)}
                    className={s('reset', 'select', {
                        [`kind-${this.props.kind}`]: true,
                        [`status-${this.props.status}`]: true,
                    })}
                    onClick={this.onToggle}
                >
                    {this.props.icon && (
                        <div className={s('reset', 'lead-icon-field')}>
                            <Icon
                                name={this.props.icon}
                                className={s('icon')}
                            />
                        </div>
                    )}
                    <div className={s('reset', 'input-field')}>
                        <div className={s('reset', 'value')}>{selected}</div>
                        <Label
                            type="select"
                            size={this.props.size}
                            kind={this.props.kind}
                            text={this.props.label}
                            status={this.props.status}
                            hasIcon={!!this.props.icon}
                            disabled={this.props.disabled}
                            state={selected ? 'minimized' : 'default'}
                        />
                    </div>
                    <div className={s('reset', 'trail-icon-field')}>
                        <Icon
                            name={open ? 'arrow_drop_up' : 'arrow_drop_down'}
                            className={s('icon')}
                        />
                    </div>
                </div>
                {this.props.help && (
                    <Help text={this.props.help} status={this.props.status} />
                )}
                {open && (
                    <div
                        className={s('reset', 'menu')}
                        ref={c => (this.elMenu = c)}
                    >
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
