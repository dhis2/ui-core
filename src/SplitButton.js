import cx from 'classnames'
import propTypes from '@dhis2/prop-types'
import React, { Component } from 'react'
import css from 'styled-jsx/css'
import { Button } from './Button.js'
import { DropMenu } from './DropMenu.js'
import { ArrowDown, ArrowUp } from './icons/Arrow.js'

import { spacers } from './theme.js'

const rightButton = css.resolve`
    button {
        padding: 0 ${spacers.dp8};
    }
`

/**
 * @module
 *
 * @param {SplitButton.PropTypes} props
 * @returns {React.Component}
 *
 * @example import { SplitButton } from '@dhis2/ui-core'
 *
 * @see Specification: {@link https://github.com/dhis2/design-system/blob/master/atoms/button.md|Design system}
 * @see Live demo: {@link /demo/?path=/story/splitbutton-basic--default|Storybook}
 */
class SplitButton extends Component {
    state = {
        open: false,
    }
    anchorRef = React.createRef()

    onClick = (payload, event) => {
        if (this.props.onClick) {
            this.props.onClick(
                {
                    name: payload.name,
                    value: payload.value,
                    open: this.state.open,
                },
                event
            )
        }
    }

    onToggle = () => this.setState({ open: !this.state.open })

    render() {
        const { open } = this.state
        const {
            component,
            children,
            className,
            name,
            value,
            icon,
            small,
            large,
            primary,
            secondary,
            destructive,
            disabled,
            type,
            tabIndex,
        } = this.props

        const arrow = open ? <ArrowUp /> : <ArrowDown />

        return (
            <div ref={this.anchorRef}>
                <Button
                    name={name}
                    value={value}
                    icon={icon}
                    small={small}
                    large={large}
                    primary={primary}
                    secondary={secondary}
                    destructive={destructive}
                    disabled={disabled}
                    onClick={this.onClick}
                    type={type}
                    tabIndex={tabIndex}
                    className={cx(className)}
                >
                    {children}
                </Button>

                <Button
                    name={name}
                    value={value}
                    icon={icon}
                    small={small}
                    large={large}
                    primary={primary}
                    secondary={secondary}
                    destructive={destructive}
                    disabled={disabled}
                    onClick={this.onToggle}
                    type={type}
                    tabIndex={tabIndex}
                    className={cx(className, rightButton.className)}
                >
                    {arrow}
                </Button>

                {open && (
                    <DropMenu
                        className="split-button-dropmenu"
                        component={component}
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

/**
 * @typedef {Object} PropTypes
 * @static
 * @prop {Element} component
 * @prop {string} [children]
 * @prop {string} [className]
 * @prop {string} [name]
 * @prop {string} [value]
 * @prop {string} [tabIndex]
 * @prop {function} [onClick]
 * @prop {Element} [icon]
 * @prop {boolean} [small] - `small` and `large` are mutually exclusive
 * @prop {boolean} [large]
 * @prop {string} [type] Type of button: `submit`, `reset`, or
 * `button`
 * @prop {boolean } [primary] - `primary`, `secondary`, and
 * `destructive` are mutually exclusive boolean props
 * @prop {boolean } [secondary]
 * @prop {boolean } [destructive]
 * @prop {boolean } [disabled]
 * @prop {boolean} [initialFocus] Grants the button the initial focus
 */
SplitButton.propTypes = {
    ...Button.propTypes,
    component: propTypes.element.isRequired,
    children: propTypes.string,
}

export { SplitButton }
