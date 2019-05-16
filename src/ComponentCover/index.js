import React, { Fragment } from 'react'
import propTypes from 'prop-types'
import css from 'styled-jsx/css'
import cx from 'classnames'

const ComponentCover = ({ children, className }) => (
    <div className={className}>
        {children}
        <style jsx>{`
            div {
                display: flex;
                align-items: center;
                justify-content: center;

                position: absolute;

                height: inherit;
                width: inherit;

                z-index: 900;
                background: rgba(200, 200, 200, 0.6);
            }
        `}</style>
    </div>
)

ComponentCover.propTypes = {
    children: propTypes.node,
    className: propTypes.string,
}

export { ComponentCover }
