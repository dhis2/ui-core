import React, { Component } from 'react'
import propTypes from 'prop-types'

import css from 'styled-jsx/css'

import { ArrowUp, ArrowDown } from '../icons/Arrow.js'

import { DropMenu } from '../DropMenu'
import { Button } from '../Button'

import cx from 'classnames'

const leftButton = css.resolve`
    button {
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
    }
`

const rightButton = css.resolve`
    button {
        padding: 0 9px;
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
    }
`

class SplitButton extends Component {
    state = {
        open: false,
    }
    anchorRef = React.createRef()

    onToggle = () => this.setState({ open: !this.state.open })

    render() {
        const { open } = this.state

        const icon = open ? <ArrowUp /> : <ArrowDown />

        return (
            <div>
                <Button
                    {...this.props}
                    onClick={evt =>
                        this.props.onClick(this.props.name, this.props.value)
                    }
                    className={cx(this.props.className, leftButton.className)}
                    ref={this.anchorRef}
                >
                    {this.props.children}
                </Button>

                <Button
                    {...this.props}
                    className={cx(this.props.className, rightButton.className)}
                    onClick={this.onToggle}
                >
                    {icon}
                </Button>

                {open && (
                    <DropMenu
                        component={this.props.component}
                        onClose={() => this.setState({ open: false })}
                        anchorRef={this.anchorRef}
                    />
                )}

                {leftButton.styles}
                {rightButton.styles}
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

SplitButton.propTypes = {
    component: propTypes.element.isRequired,
    onClick: propTypes.func.isRequired,

    className: propTypes.string,
    name: propTypes.string,
    value: propTypes.string,

    icon: propTypes.element,

    small: propTypes.bool,
    large: propTypes.bool,

    primary: propTypes.bool,
    secondary: propTypes.bool,
    destructive: propTypes.bool,
    disabled: propTypes.bool,
}

export { SplitButton }
