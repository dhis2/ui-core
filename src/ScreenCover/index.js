import React, { Fragment } from 'react'
import propTypes from 'prop-types'
import css from 'styled-jsx/css'
import cx from 'classnames'

export const ScreenCover = ({ onClick }) => (
    <div className="screen-cover" onClick={onClick}>
        <style jsx>{`
            div {
                background: rgba(200, 200, 200, 0.6);
                height: 100%;
                left: 0;
                position: absolute;
                top: 0;
                width: 100%;
            }
        `}</style>
    </div>
)

ScreenCover.propTypes = {
    onClick: propTypes.func,
}
