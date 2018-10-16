import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Button from './Button'
import s from './styles'
import Menu from '../Menu'
import { isPointInRect } from '../../utils'

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

    render() {
        const { open } = this.state
        let width = this.props.width
        if (!width) {
            width = this.elContainer
                ? this.elContainer.getBoundingClientRect()['width']
                : 'inherit'
        }

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
                            width={width}
                            size={this.props.size}
                            list={this.props.list}
                            onClick={this.props.onClick}
                        />
                    </div>
                )}
            </div>
        )
    }
}

DropdownButton.defaultProps = {
    size: 'default',
    kind: 'primary',
    active: false,
    disabled: false,
}

DropdownButton.propTypes = {
    width: PropTypes.string,
    kind: PropTypes.string,
    icon: PropTypes.string,
    active: PropTypes.bool,
    disabled: PropTypes.bool,
    size: PropTypes.oneOf(['default', 'dense']),
    label: PropTypes.string.isRequired,
    list: PropTypes.array.isRequired,
    onClick: PropTypes.func.isRequired,
}

export { DropdownButton }
export default DropdownButton
