/** @format */

import React from 'react'
import PropTypes from 'prop-types'
import Icon from '../Icon'
import Menu from '../Menu/Menu'
import { Label } from '../helpers'
import { isPointInRect } from '../../utils'
import s from './styles'

// TODO Helper Text component
// TODO disabled state
// TODO Normal, Dense

class SelectField extends React.Component {
    state = {
        open: false,
    }

    componentDidMount() {
        document.addEventListener('click', this.onDocClick)
    }

    componentWillMount() {
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

    onToggle = () => this.setState({ open: !this.state.open })

    onClose = () => this.setState({ open: false })

    onSelect = (evt, value, option) => {
        this.setState({ open: false })
        this.props.onChange(evt, value, option)
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

        const value = this.getLabel()

        return (
            <div ref={c => (this.elContainer = c)} className={s('container')}>
                <div
                    ref={c => (this.elSelect = c)}
                    className={s('select')}
                    onClick={this.onToggle}
                >
                    {this.props.icon && (
                        <div className={s('icon')}>
                            <Icon name={this.props.icon} />
                        </div>
                    )}
                    <div className={s('value')}>{this.getLabel()}</div>
                    <Label
                        height="44px"
                        hasIcon={!!this.props.icon}
                        text={this.props.label}
                        status={this.props.status}
                        border={this.props.border}
                        size={value ? 'minimized' : 'default'}
                    />
                    <Icon
                        name={open ? 'arrow_drop_up' : 'arrow_drop_down'}
                        className={s('dropdown-icon')}
                    />
                </div>
                {open && (
                    <div className={s('menu')} ref={c => (this.elMenu = c)}>
                        <Menu
                            width={width}
                            list={this.props.list}
                            onClose={this.onClose}
                            onSelect={this.onSelect}
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
}

SelectField.propTypes = {
    list: PropTypes.arrayOf(
        PropTypes.shape({
            label: PropTypes.string.isRequired,
            value: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
                .isRequired,
        })
    ),
    label: PropTypes.string.isRequired,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    onChange: PropTypes.func.isRequired,
    icon: PropTypes.string,
    help: PropTypes.string,
    disabled: PropTypes.bool,
    required: PropTypes.bool,
    border: PropTypes.oneOf(['none', 'solid', 'dashed']),
    status: PropTypes.oneOf(['default', 'valid', 'warning', 'error']),
}

export { SelectField }
export default SelectField
