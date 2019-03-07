import React, { Component } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Button from '../Button'
import Menu from '../Menu'
import { isPointInRect } from '../../utils'

import { ArrowUp, ArrowDown } from '../../icons/Arrow.js'

import { fonts } from '../colors.js'
import buttons from '../Button/styles.js'
import styles from './styles.js'

import css from 'styled-jsx/css'

const ArrowIcon = css.resolve`
    svg {
        fill: inherit;
        height: 24px;
        width: 24px;
        vertical-align: middle;
        pointer-events: none;
    }
`

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

        const icon = open ? (
            <ArrowUp className={ArrowIcon.className} />
        ) : (
            <ArrowDown className={ArrowIcon.className} />
        )

        return (
            <div ref={c => (this.elContainer = c)}>
                <button
                    disabled={this.props.disabled}
                    onClick={this.onToggle}
                    className={cx(
                        'base',
                        `kind-${this.props.kind}`,
                        `size-${this.props.size}`,
                        this.props.className,
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
                    {icon}
                </button>

                {open && (
                    <div className="menu" ref={c => (this.elMenu = c)}>
                        <Menu
                            list={this.props.list}
                            onClick={this.props.onClick}
                        />
                    </div>
                )}

                {ArrowIcon.styles}
                <style jsx>{fonts}</style>
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
}

DropdownButton.propTypes = {
    className: PropTypes.string,
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
