import React, { Fragment } from 'react'
import propTypes from 'prop-types'
import css from 'styled-jsx/css'
import cx from 'classnames'

export const ScreenCover = ({ onClick, withoutBackgroundColor }) => (
    <div
        className={cx({
            'with-background-color': !withoutBackgroundColor,
        })}
        onClick={onClick}
    >
        <style jsx>{`
            div {
                height: 100%;
                left: 0;
                position: absolute;
                top: 0;
                width: 100%;
            }

            .with-background-color {
                background: rgba(200, 200, 200, 0.6);
            }
        `}</style>
    </div>
)

ScreenCover.propTypes = {
    onClick: propTypes.func,
    withoutBackgroundColor: propTypes.bool,
}
