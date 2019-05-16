import React from 'react'
import propTypes from 'prop-types'
import css from 'styled-jsx/css'
import cx from 'classnames'

const ScreenCover = ({ children, onClick }) => (
    <div className="screen-cover">
        <div className="backdrop" onClick={onClick} />

        <div className="children">{children}</div>

        <style jsx>{`
            .screen-cover {
                position: fixed;
                height: 100%;
                width: 100%;

                left: 0;
                top: 0;

                z-index: 10000;
                background: rgba(200, 200, 200, 0.6);
            }

            .backdrop {
                height: 100%;
                width: 100%;
            }

            .children {
                position: absolute;
                top: 50%;
                left: 50%;
                width: auto;
                height: auto;
                transform-origin: -50% -50%;
            }
        `}</style>
    </div>
)

ScreenCover.propTypes = {
    onClick: propTypes.func,
}

export { ScreenCover }
