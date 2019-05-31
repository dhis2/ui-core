import React from 'react'
import propTypes from 'prop-types'
import cx from 'classnames'
import css, { resolve } from 'styled-jsx/css'

import { ArrowDown } from '../icons/Arrow'
import { colors } from '../theme'

const Label = ({ icon, children }) => (
    <div className="tree__label">
        {children}

        <style jsx>{`
            div {
                min-height: 24px;
                padding: 3px 0;
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

const Arrow = ({ hasLeaves, open, onToggleOpen }) => {
    const arrowIcon = hasLeaves ? <ArrowDown /> : <span />

    return (
        <div
            className={cx('tree__arrow', {
                open,
                'has-leaves': hasLeaves,
            })}
        >
            <span onClick={onToggleOpen}>{arrowIcon}</span>

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

const Content = ({ open, children, label: Label }) => (
    <div>
        <Label />
        <Contents open={open}>{children}</Contents>
    </div>
)

export const Tree = ({ open, label, children, onToggleOpen }) => {
    const hasLeaves = !!React.Children.count(children)
    const className = cx('tree', {
        open,
        'has-leaves': hasLeaves,
    })

    return (
        <div className={className}>
            <Arrow
                open={open}
                hasLeaves={hasLeaves}
                onToggleOpen={onToggleOpen}
            />

            <Content open={open} label={label} children={children} />

            <style jsx>{`
                div {
                    display: flex;
                }
            `}</style>
        </div>
    )
}

Tree.propTypes = {
    label: propTypes.func.isRequired,
    open: propTypes.bool,
    onToggleOpen: propTypes.func,
}
