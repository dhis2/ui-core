import React from 'react'
import propTypes from 'prop-types'
import cx from 'classnames'
import css from 'styled-jsx/css'

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

const Arrow = ({ hasLeafes, open, onToggleOpen }) => {
    const arrowIcon = hasLeafes ? <ArrowDown /> : <span />

    return (
        <div className={cx('arrow', { open, 'has-leafes': hasLeafes })}>
            <span onClick={onToggleOpen}>{arrowIcon}</span>

            <style jsx>{`
                div {
                    width: 24px;
                }

                span {
                    display: block;
                    transform: rotate(-90deg);
                }

                .open span {
                    transform: rotate(0);
                }
            `}</style>
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
