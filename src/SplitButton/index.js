import React, { Component } from 'react'
import propTypes from 'prop-types'
import Menu from '../Menu'

import css from 'styled-jsx/css'

import buttons from '../Button/styles.js'

import { ArrowUp, ArrowDown } from '../icons/Arrow.js'

import cx from 'classnames'
import styles from './styles'

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
                    onClick={this.props.onClick}
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
                    {icon}
                </button>

                {open && (
                    <div className="menu">
                        {this.props.component && this.props.component}
                    </div>
                )}

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
}

SplitButton.propTypes = {
    component: propTypes.element.isRequired,
    label: propTypes.string.isRequired,
    onClick: propTypes.func.isRequired,

    className: propTypes.string,
    kind: propTypes.oneOf(['basic', 'primary']),
    icon: propTypes.element,
    disabled: propTypes.bool,
    size: propTypes.oneOf(['small', 'medium', 'large']),
}

export { SplitButton }
export default SplitButton
