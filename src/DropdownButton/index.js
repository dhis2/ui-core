import React, { Component } from 'react'
import propTypes from 'prop-types'
import css from 'styled-jsx/css'
import cx from 'classnames'

import { ArrowUp, ArrowDown } from '../icons/Arrow.js'
import { DropMenu } from '../DropMenu'

import buttons from '../Button/styles.js'

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

                {open && <DropMenu component={this.props.component} />}

                <style jsx>{buttons}</style>
                <style jsx>{`
                    div {
                        display: inline-flex;
                        position: relative;
                        color: inherit;
                        white-space: nowrap;
                    }
                `}</style>
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
    className: propTypes.string,
    component: propTypes.element.isRequired,
    width: propTypes.string,
    icon: propTypes.element,
    label: propTypes.string,
    children: propTypes.string,
    kind: propTypes.oneOf(['basic', 'primary', 'secondary', 'destructive']),
    type: propTypes.oneOf(['submit', 'reset', 'button']),
    size: propTypes.oneOf(['small', 'medium', 'large']),
    disabled: propTypes.bool,
    onClick: propTypes.func,
}

export { DropdownButton }
