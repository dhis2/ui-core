import React from 'react'
import propTypes from 'prop-types'
import cx from 'classnames'

import { ArrowDown } from './icons/Arrow.js'
import { colors } from './theme.js'

const Contents = ({ children, open }) => (
    <div className={cx('tree__contents', { open })}>
        {children}

        <style jsx>{`
            div {
                height: 0;
                overflow: hidden;
                flex-grow: 1;
            }

            .open {
                height: auto;
            }
        `}</style>
    </div>
)
Contents.propTypes = {
    children: propTypes.node,
    open: propTypes.bool,
}

const Arrow = ({ hasLeaves, open, onOpen, onClose }) => {
    const arrowIcon = hasLeaves ? <ArrowDown /> : <span />
    const onClick = open ? onClose : onOpen

    return (
        <div
            className={cx('tree__arrow', {
                open,
                'has-leaves': hasLeaves,
            })}
        >
            <span onClick={onClick}>{arrowIcon}</span>

            <style jsx>{`
                div {
                    width: 24px;
                    position: relative;
                    flex-shrink: 0;
                }

                div:after {
                    background: ${colors.grey400};
                    height: calc(100% - 24px);
                    left: 12px;
                    position: absolute;
                    top: 15px;
                    width: 1px;
                    z-index: 1;
                }

                .has-leaves.open:after {
                    content: '';
                }

                span {
                    display: block;
                    position: relative;
                    z-index: 2;
                    fill: ${colors.grey700};
                }

                div :global(svg) {
                    vertical-align: top;
                    transform: rotate(-90deg);
                }

                .open :global(svg) {
                    transform: rotate(0);
                }
            `}</style>
        </div>
    )
}

Arrow.propTypes = {
    hasLeaves: propTypes.bool,
    open: propTypes.bool,
    onOpen: propTypes.func,
    onClose: propTypes.func,
}

const Content = ({ open, children, label }) => (
    <div>
        {label}
        <Contents open={open}>{children}</Contents>
    </div>
)

Content.propTypes = {
    open: propTypes.bool,
    children: propTypes.node,
    label: propTypes.node,
}

/**
 * @module
 *
 * @param {Node.PropTypes} props
 * @returns {React.Component}
 *
 * @example import { Node } from '@dhis2/ui-core'
 *
 * @see Live demo: {@link /demo/?path=/story/node--multiple-roots|Storybook}
 */
export const Node = ({ open, component, children, onOpen, onClose }) => {
    const hasLeaves = !!React.Children.toArray(children).filter(i => i).length
    const className = cx('tree', {
        open,
        'has-leaves': hasLeaves,
    })

    return (
        <div className={className}>
            <Arrow
                open={open}
                hasLeaves={hasLeaves}
                onOpen={onOpen}
                onClose={onClose}
            />

            <Content open={open} label={component}>
                {children}
            </Content>

            <style jsx>{`
                div {
                    display: flex;
                }
            `}</style>
        </div>
    )
}

Node.propTypes = {
    open: propTypes.bool,
    component: propTypes.element,
    children: propTypes.node,
    onOpen: propTypes.func,
    onClose: propTypes.func,
}

/**
 * @typedef {Object} PropTypes
 * @static
 * @prop {Element} component
 * @prop {boolean} [open]
 * @prop {function} [onOpen]
 * @prop {funtion} [onClose]
 */
Node.propTypes = {
    component: propTypes.element.isRequired,
    open: propTypes.bool,
    onOpen: propTypes.func,
    onClose: propTypes.func,
}
