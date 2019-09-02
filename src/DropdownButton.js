import propTypes from 'prop-types'
import React, { Component } from 'react'

import { Button } from './Button.js'
import { buttonVariantPropType, sizePropType } from './common-prop-types.js'
import { DropMenu } from './DropMenu.js'
import { ArrowDown, ArrowUp } from './icons/Arrow.js'

class DropdownButton extends Component {
    state = {
        open: false,
    }
    anchorRef = React.createRef()

    onToggle = () => this.setState({ open: !this.state.open })

    render() {
        const { open } = this.state

        const ArrowIcon = open ? <ArrowUp /> : <ArrowDown />

        return (
            <div ref={this.anchorRef}>
                <Button onClick={this.onToggle} {...this.props}>
                    {this.props.children}

                    {ArrowIcon}
                </Button>

                {open && (
                    <DropMenu
                        component={this.props.component}
                        onClose={() => this.setState({ open: false })}
                        anchorEl={this.anchorRef.current}
                    />
                )}

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

DropdownButton.propTypes = {
    className: propTypes.string,
    component: propTypes.element.isRequired,
    icon: propTypes.element,
    children: propTypes.string,

    small: sizePropType,
    large: sizePropType,

    primary: buttonVariantPropType,
    secondary: buttonVariantPropType,
    destructive: buttonVariantPropType,
    disabled: propTypes.bool,
}

export { DropdownButton }
