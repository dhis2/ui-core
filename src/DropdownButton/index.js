import React, { Component } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Button from '../Button'
import Menu from '../Menu'
import Icon from '../Icon'
import { isPointInRect } from '../utils'

import buttons from '../Button/styles.js'
import styles from './styles.js'

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
            <div ref={c => (this.elContainer = c)}>
                <button
                    disabled={this.props.disabled}
                    onClick={this.onToggle}
                    className={cx(
                        'base',
                        `kind-${this.props.kind}`,
                        `size-${this.props.size}`,
                        {
                            'icon-only':
                                this.props.icon &&
                                !this.props.label &&
                                !this.props.children,
                            icon: this.props.icon,
                        }
                    )}
                >
                    {this.props.icon && (
                        <span className="button-icon">{this.props.icon}</span>
                    )}

                    <span className="menu-label">{this.props.label}</span>
                    <Icon className="menu-icon" name={icon} />
                </button>

                {open && (
                    <div className="menu" ref={c => (this.elMenu = c)}>
                        <Menu
                            list={this.props.list}
                            onClick={this.props.onClick}
                        />
                    </div>
                )}

                <style jsx>{buttons}</style>
                <style jsx>{styles}</style>
            </div>
        )
    }
}

DropdownButton.defaultProps = {
    size: 'medium',
    kind: 'basic',
    disabled: false,
    width: '',
    icon: null,
}

DropdownButton.propTypes = {
    list: PropTypes.array.isRequired,

    width: PropTypes.string,
    icon: PropTypes.element,

    label: PropTypes.string,
    kind: PropTypes.oneOf(['basic', 'primary', 'secondary', 'destructive']),
    type: PropTypes.oneOf(['submit', 'reset', 'button']),
    size: PropTypes.oneOf(['small', 'medium', 'large']),
    disabled: PropTypes.bool,
    onClick: PropTypes.func,
}

export { DropdownButton }
export default DropdownButton
