import cx from 'classnames'
import propTypes from '@dhis2/prop-types'
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
 * @prop {function} [onClick]
 * @prop {Element} [icon]
 * @prop {boolean} [small] - `small` and `large` are mutually exclusive
 * @prop {boolean} [large]
 * @prop {boolean } [primary] - `primary`, `secondary`, and
 * `destructive` are mutually exclusive boolean props
 * @prop {boolean } [secondary]
 * @prop {boolean } [destructive]
 * @prop {boolean } [disabled]
 */
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
