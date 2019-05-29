import React from 'react'
import propTypes from 'prop-types'
import css from 'styled-jsx/css'
import cx from 'classnames'

import { layers } from '../theme.js'

const Backdrop = ({ onClick }) => (
    <div className="backdrop" onClick={onClick}>
        <style jsx>{`
            div {
                height: 100%;
                width: 100%;

                background: rgba(33, 43, 54, 0.4);
            }
        `}</style>
    </div>
)

const Content = ({ children }) => (
    <div>
        {children}
        <style jsx>{`
            div {
                position: absolute;
                top: 50%;
                left: 50%;
                width: auto;
                height: auto;
                transform: translate(-50%, -50%);
            }
        `}</style>
    </div>
)

const ScreenCover = ({ children, onClick, className }) => (
    <div className={className}>
        <Backdrop onClick={onClick} />
        <Content>{children}</Content>

        <style jsx>{`
            div {
                position: fixed;
                height: 100%;
                width: 100%;

                left: 0;
                top: 0;

                z-index: ${layers.blocking};
            }
        `}</style>
    </div>
)

ScreenCover.propTypes = {
    onClick: propTypes.func,
    className: propTypes.string,
    children: propTypes.node,
}

export { ScreenCover }
