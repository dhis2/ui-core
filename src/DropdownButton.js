import propTypes from '@dhis2/prop-types'
import React, { Component } from 'react'

import { Button } from './Button.js'
import { buttonVariantPropType, sizePropType } from './common-prop-types.js'
import { DropMenu } from './DropMenu.js'
import { ArrowDown, ArrowUp } from './icons/Arrow.js'

/**
 * @module
 * @param {DropdownButton.PropTypes} props
 * @returns {React.Component}
 * @example import { DropdownButton } from @dhis2/ui-core
 * @see Live demo: {@link /demo/?path=/story/dropdownbutton-basic--default|Storybook}
 */
class DropdownButton extends Component {
    state = {
        open: false,
    }
    anchorRef = React.createRef()

    onToggle = (_, event) => {
        this.setState({ open: !this.state.open }, () => {
            if (this.props.onClick) {
                this.props.onClick({ open: this.state.open }, event)
            }
        })
    }

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

/**
 * @typedef {Object} PropTypes
 * @static
 * @prop {Element} component
 *
 * @prop {string} [className]
 * @prop {string} [children]
 * @prop {Element} [icon]
 *
 * @prop {boolean} [small] - `small` and `large` are mutually exclusive
 * @prop {boolean} [large]
 *
 * @prop {boolean } [primary] - `primary`, `secondary`, and
 * `destructive` are mutually exclusive boolean props
 * @prop {boolean } [secondary]
 * @prop {boolean } [destructive]
 *
 * @prop {boolean} [disabled] Disable the button
 */
DropdownButton.propTypes = {
    className: propTypes.string,
    component: propTypes.element.isRequired,
    icon: propTypes.element,
    children: propTypes.string,

    onClick: propTypes.func,

    small: sizePropType,
    large: sizePropType,

    primary: buttonVariantPropType,
    secondary: buttonVariantPropType,
    destructive: buttonVariantPropType,
    disabled: propTypes.bool,
}

export { DropdownButton }
