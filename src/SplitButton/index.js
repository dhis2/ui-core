import React, { Component } from 'react'
import propTypes from 'prop-types'

import css from 'styled-jsx/css'

import buttons from '../Button/styles.js'

import { ArrowUp, ArrowDown } from '../icons/Arrow.js'
import { DropMenu } from '../DropMenu'

import cx from 'classnames'

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

                {open && <DropMenu component={this.props.component} />}

                <style jsx>{buttons}</style>
                <style jsx>{`
                    div {
                        display: inline-flex;
                        position: relative;
                        color: inherit;
                        white-space: nowrap;
                    }

                    button:first-child {
                        border-top-right-radius: 0;
                        border-bottom-right-radius: 0;
                    }

                    button:nth-child(2) {
                        padding: 0 9px;
                        border-top-left-radius: 0;
                        border-bottom-left-radius: 0;
                    }
                `}</style>
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
