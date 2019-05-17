import React from 'react'
import propTypes from 'prop-types'
import css from 'styled-jsx/css'
import cx from 'classnames'

const Backdrop = ({ onClick, withoutBackgroundColor }) => (
    <div className="backdrop" onClick={onClick}>
        <style jsx>{`
            div {
                height: 100%;
                width: 100%;

                background: ${withoutBackgroundColor
                    ? 'none'
                    : 'rgba(200, 200, 200, 0.6)'};
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

const ScreenCover = ({
    children,
    onClick,
    className,
    withoutBackgroundColor,
}) => (
    <div className={className}>
        <Backdrop
            onClick={onClick}
            withoutBackgroundColor={withoutBackgroundColor}
        />
        <Content>{children}</Content>

        <style jsx>{`
            div {
                position: fixed;
                height: 100%;
                width: 100%;

                left: 0;
                top: 0;

                z-index: 10000;
            }
        `}</style>
    </div>
)

ScreenCover.propTypes = {
    onClick: propTypes.func,
    className: propTypes.string,
    children: propTypes.node,
    withoutBackgroundColor: propTypes.bool,
}

export { ScreenCover }
