import cx from 'classnames'
import propTypes from 'prop-types'
import React, { Component } from 'react'
import css from 'styled-jsx/css'

import { buttonVariantPropType } from './common-prop-types.js'

import { Button } from './Button.js'
import { DropMenu } from './DropMenu.js'
import { ArrowDown, ArrowUp } from './icons/Arrow.js'

import { spacers } from './theme.js'

const rightButton = css.resolve`
    button {
        padding: 0 ${spacers.dp8};
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
            <div ref={this.anchorRef}>
                <Button {...this.props} className={cx(this.props.className)}>
                    {this.props.children}
                </Button>

                <Button
                    {...this.props}
                    onClick={this.onToggle}
                    className={cx(this.props.className, rightButton.className)}
                >
                    {icon}
                </Button>

                {open && (
                    <DropMenu
                        component={this.props.component}
                        onClose={() => this.setState({ open: false })}
                        anchorEl={this.anchorRef.current}
                    />
                )}

                {rightButton.styles}
                <style jsx>{`
                    div {
                        display: inline-flex;
                        position: relative;
                        color: inherit;
                        white-space: nowrap;
                    }

                    div > :global(button:first-child) {
                        margin-left: 0;
                    }

                    div > :global(button:not(:first-child):not(:last-child)) {
                        border-radius: 0;
                        border-right: 0;
                    }

                    div > :global(button:first-child) {
                        border-top-right-radius: 0;
                        border-bottom-right-radius: 0;
                        border-right: 0;
                    }

                    div > :global(button:last-child) {
                        border-top-left-radius: 0;
                        border-bottom-left-radius: 0;
                    }
                `}</style>
            </div>
        )
    }
}

SplitButton.propTypes = {
    children: propTypes.string,
    component: propTypes.element.isRequired,

    onClick: propTypes.func,

    className: propTypes.string,
    name: propTypes.string,
    value: propTypes.string,

    icon: propTypes.element,

    small: propTypes.bool,
    large: propTypes.bool,

    primary: buttonVariantPropType,
    secondary: buttonVariantPropType,
    destructive: buttonVariantPropType,
    disabled: propTypes.bool,
}

export { SplitButton }
