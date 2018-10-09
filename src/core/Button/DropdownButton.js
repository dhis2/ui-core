import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Button from './Button'
import s from './styles'
import Menu from '../Menu/Menu'
import { isPointInRect } from '../../utils'

/**
 * list of menu items opens up on clicking KeyDown icon on the right side
 */
class DropdownButton extends Component {
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

    render() {
        const { open } = this.state
        return (
            <div className={s('dropdown')} ref={c => (this.elContainer = c)}>
                <Button
                    icon={this.props.icon}
                    kind={this.props.kind}
                    label={this.props.label}
                    active={this.props.active}
                    disabled={this.props.disabled}
                    onClick={this.props.onClick}
                />

                <Button
                    kind={this.props.kind}
                    active={this.props.active}
                    disabled={this.props.disabled}
                    onClick={this.onToggle}
                    icon={open ? 'arrow_drop_up' : 'arrow_drop_down'}
                />

                {open && (
                    <div className={s('menu')} ref={c => (this.elMenu = c)}>
                        <Menu
                            list={this.props.list}
                            onClose={this.onClose}
                            onSelect={this.props.onSelect}
                        />
                    </div>
                )}
            </div>
        )
    }
}

DropdownButton.defaultProps = {
    icon: '',
    label: '',
    kind: 'primary',
    active: false,
    disabled: false,
}

DropdownButton.propTypes = {
    icon: PropTypes.string,
    label: PropTypes.string,
    list: PropTypes.array.isRequired,
    active: PropTypes.bool,
    disabled: PropTypes.bool,
    kind: PropTypes.oneOf(['flat', 'raised', 'primary', 'outlined', 'circle']),
    onClick: PropTypes.func.isRequired,
    onSelect: PropTypes.func.isRequired,
}

export { DropdownButton }
export default DropdownButton
