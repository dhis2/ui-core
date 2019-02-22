import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Menu from '../Menu'
import Icon from '../Icon'
import { isPointInRect } from '../utils'

import css from 'styled-jsx/css'

import buttons from '../Button/styles.js'

import cx from 'classnames'
import styles from './styles'

const menuIcon = css.resolve`
    i {
        color: inherit;
        font-size: 24px;
        vertical-align: middle;
        pointer-events: none;
    }
`

class SplitButton extends Component {
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

        return (
            <div ref={c => (this.elContainer = c)}>
                <button
                    disabled={this.props.disabled}
                    onClick={this.props.onClick}
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
                    {this.props.label || this.props.children}
                </button>

                <button
                    disabled={this.props.disabled}
                    onClick={this.onToggle}
                    className={cx(
                        'base',
                        `kind-${this.props.kind}`,
                        `size-${this.props.size}`
                    )}
                >
                    <Icon
                        className={menuIcon.className}
                        name={open ? 'arrow_drop_up' : 'arrow_drop_down'}
                    />
                </button>

                {open && (
                    <div className="menu" ref={c => (this.elMenu = c)}>
                        <Menu
                            width={`${width}px`}
                            list={this.props.list}
                            onClick={this.props.onClick}
                        />
                    </div>
                )}
                {menuIcon.styles}
                <style jsx>{buttons}</style>
                <style jsx>{styles}</style>
            </div>
        )
    }
}

SplitButton.defaultProps = {
    size: 'medium',
    kind: 'basic',
    disabled: false,
    width: '',
}

SplitButton.propTypes = {
    onClick: PropTypes.func.isRequired,
    label: PropTypes.string.isRequired,
    list: PropTypes.array.isRequired,

    width: PropTypes.string,
    kind: PropTypes.oneOf(['basic', 'primary']),
    icon: PropTypes.element,
    disabled: PropTypes.bool,
    size: PropTypes.oneOf(['small', 'medium', 'large']),
}

export { SplitButton }
export default SplitButton
