import propTypes from '@dhis2/prop-types'
import React, { Component } from 'react'

import { Button } from './Button.js'
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
        const {
            component,
            children,
            className,
            destructive,
            disabled,
            icon,
            large,
            primary,
            secondary,
            small,
            name,
            value,
            tabIndex,
            type,
            initialFocus,
        } = this.props

        const ArrowIcon = open ? <ArrowUp /> : <ArrowDown />

        return (
            <div ref={this.anchorRef}>
                <Button
                    className={className}
                    destructive={destructive}
                    disabled={disabled}
                    icon={icon}
                    large={large}
                    primary={primary}
                    secondary={secondary}
                    small={small}
                    onClick={this.onToggle}
                    name={name}
                    value={value}
                    tabIndex={tabIndex}
                    type={type}
                    initialFocus={initialFocus}
                >
                    {children}
                    {ArrowIcon}
                </Button>

                {open && (
                    <DropMenu
                        className="dropdown-button-dropmenu"
                        component={component}
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
 * @prop {Node} [children] The children to render in the button
 * @prop {function} [onClick] The click handler
 *
 * @prop {string} [className]
 * @prop {string} [name]
 * @prop {string} [value]
 * @prop {string} [tabIndex]
 * @prop {boolean} [small] - `small` and `large` are mutually exclusive
 * @prop {boolean} [large]
 * @prop {string} [type] Type of button: `submit`, `reset`, or
 * `button`
 *
 * @prop {boolean } [primary] - `primary`, `secondary`, and
 * `destructive` are mutually exclusive boolean props
 * @prop {boolean } [secondary]
 * @prop {boolean } [destructive]
 *
 * @prop {boolean} [disabled] Disable the button
 * @prop {Element} [icon]
 *
 * @prop {boolean} [initialFocus] Grants the button the initial focus
 */
DropdownButton.propTypes = {
    ...Button.propTypes,
    component: propTypes.element.isRequired,
}

export { DropdownButton }
