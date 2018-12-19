import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Button from '../Button'
import cx, { rx } from './styles'
import Menu from '../Menu'
import Icon from '../Icon'
import { isPointInRect } from '../../utils'

class DropdownButton extends Component {
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

    onToggle = () => this.setState({ open: !this.state.open })

    render() {
        const { open } = this.state

        let width = this.props.width
        if (!width) {
            width = this.elContainer
                ? this.elContainer.getBoundingClientRect()['width']
                : 'inherit'
        }

        const icon = open ? 'arrow_drop_up' : 'arrow_drop_down'

        return (
            <div
                className={rx('base', `${this.props.size}`)}
                ref={c => (this.elContainer = c)}
            >
                <Button
                    icon={this.props.icon}
                    kind={this.props.kind}
                    active={this.props.active}
                    disabled={this.props.disabled}
                    onClick={this.onToggle}
                >
                    <span className={rx('menu-label')}>{this.props.label}</span>
                    <Icon className={cx('menu-icon')} name={icon} />
                </Button>

                {open && (
                    <div className={rx('menu')} ref={c => (this.elMenu = c)}>
                        <Menu
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
    kind: 'basic',
    active: false,
    disabled: false,
}

DropdownButton.propTypes = {
    width: PropTypes.string,
    kind: PropTypes.oneOf(['basic', 'primary']),
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
