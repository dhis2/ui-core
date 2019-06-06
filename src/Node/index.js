import React from 'react'
import propTypes from 'prop-types'
import cx from 'classnames'
import css, { resolve } from 'styled-jsx/css'

import { ArrowDown } from '../icons/Arrow'
import { colors, spacers } from '../theme'

const Label = ({ icon, children }) => (
    <div className="tree__label">
        {children}

        <style jsx>{`
            div {
                min-height: 24px;
                padding: ${spacers.dp4} 0;
            }
        `}</style>
    </div>
)

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

const Content = ({ open, children, label }) => (
    <div>
        {label}
        <Contents open={open}>{children}</Contents>
    </div>
)

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

            <Content open={open} label={component} children={children} />

            <style jsx>{`
                div {
                    display: flex;
                }
            `}</style>
        </div>
    )
}

Node.propTypes = {
    component: propTypes.element.isRequired,
    open: propTypes.bool,
    onOpen: propTypes.func,
    onClose: propTypes.func,
}
