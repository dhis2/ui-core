import React from 'react'
import propTypes from '@dhis2/prop-types'

import { Arrow } from './Node/Arrow.js'
import { Spacer } from './Node/Spacer.js'
import { Content } from './Node/Content.js'

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
export const Node = ({
    open,
    className,
    component,
    children,
    onOpen,
    onClose,
}) => {
    const hasLeaves = !!React.Children.toArray(children).filter(i => i).length

    return (
        <div className={className}>
            {hasLeaves ? (
                <Arrow open={open} onOpen={onOpen} onClose={onClose} />
            ) : (
                <Spacer />
            )}

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

/**
 * @typedef {Object} PropTypes
 * @static
 * @prop {Element} component
 * @prop {className} [string]
 * @prop {Node} [children]
 * @prop {boolean} [open]
 * @prop {function} [onOpen]
 * @prop {funtion} [onClose]
 */
Node.propTypes = {
    component: propTypes.element.isRequired,
    children: propTypes.node,
    className: propTypes.string,
    open: propTypes.bool,
    onClose: propTypes.func,
    onOpen: propTypes.func,
}
