import React, { Component } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Button from '../Button'

import { ArrowUp, ArrowDown } from '../icons/Arrow.js'

import buttons from '../Button/styles.js'
import styles from './styles.js'

import css from 'styled-jsx/css'

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
        if (this.elContainer && !this.elContainer.contains(evt.target)) {
            this.setState({ open: false })
        }
    }

    onToggle = () => this.setState({ open: !this.state.open })

    render() {
        const { open } = this.state

        const icon = open ? <ArrowUp /> : <ArrowDown />

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

                    {this.props.label || this.props.children}
                    {icon}
                </button>

                {open && <div className="menu">{this.props.component}</div>}

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
    component: PropTypes.element.isRequired,
    width: PropTypes.string,
    icon: PropTypes.element,
    label: PropTypes.string,
    children: PropTypes.string,
    kind: PropTypes.oneOf(['basic', 'primary', 'secondary', 'destructive']),
    type: PropTypes.oneOf(['submit', 'reset', 'button']),
    size: PropTypes.oneOf(['small', 'medium', 'large']),
    disabled: PropTypes.bool,
    onClick: PropTypes.func,
}

export { DropdownButton }
export default DropdownButton
