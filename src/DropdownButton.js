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

    onToggle = ({ name, value }, event) => {
        this.setState({ open: !this.state.open }, () => {
            if (this.props.onClick) {
                this.props.onClick(
                    {
                        name,
                        value,
                        open: this.state.open,
                    },
                    event
                )
            }
        })
    }

    render() {
        const { open } = this.state

        const ArrowIcon = open ? <ArrowUp /> : <ArrowDown />

        return (
            <div ref={this.anchorRef}>
                <Button {...this.props} onClick={this.onToggle}>
                    {this.props.children}

                    {ArrowIcon}
                </Button>

                {open && (
                    <DropMenu
                        className="dropdown-button-dropmenu"
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
    component: propTypes.element.isRequired,
    children: propTypes.string,
    className: propTypes.string,
    destructive: buttonVariantPropType,

    disabled: propTypes.bool,

    icon: propTypes.element,
    large: sizePropType,

    primary: buttonVariantPropType,
    secondary: buttonVariantPropType,
    small: sizePropType,
    onClick: propTypes.func,
}

export { DropdownButton }
