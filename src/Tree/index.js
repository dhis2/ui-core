import React from 'react'
import propTypes from 'prop-types'
import cx from 'classnames'
import css, { resolve } from 'styled-jsx/css'

import { ArrowDown } from '../icons/Arrow'

const Label = ({ icon, children }) => <div>{children}</div>

const Contents = ({ children, open }) => (
    <div className={cx({ open })}>
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

const arrowStyle = resolve`
    div > :global(svg){
        fill: #e2e2e2;
    }
`

const Arrow = ({ hasLeafes, open, onToggleOpen }) => {
    const arrowIcon = hasLeafes ? <ArrowDown /> : <span />

    return (
        <div
            className={cx('arrow', arrowStyle.className, {
                open,
                'has-leafes': hasLeafes,
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
                    content: '';
                    background: #e2e2e2;
                    height: calc(100% - 24px);
                    left: 12px;
                    position: absolute;
                    top: 12px;
                    width: 1px;
                    z-index: 1;
                }

                span {
                    display: block;
                    position: relative;
                    transform: rotate(-90deg);
                    z-index: 2;
                }

                .open span {
                    transform: rotate(0);
                }
            `}</style>
            {arrowStyle.styles}
        </div>
    )
}

const Content = ({ children }) => <div>{children}</div>

export const Tree = ({ children, hasLeafes, open, onToggleOpen }) => {
    const className = cx('tree', {
        open,
        'has-leafes': hasLeafes,
    })

    return (
        <div className={className}>
            <Arrow
                open={open}
                hasLeafes={hasLeafes}
                onToggleOpen={onToggleOpen}
            />
            <Content children={children} />

            <style jsx>{`
                div {
                    display: flex;
                }
            `}</style>
        </div>
    )
}

Tree.propTypes = {
    hasLeafes: propTypes.bool,
    onToggleOpen: propTypes.func,
    open: propTypes.bool,
}

Tree.Label = Label
Tree.Contents = Contents
