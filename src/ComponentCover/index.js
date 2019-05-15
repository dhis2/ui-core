import React, { Fragment } from 'react'
import propTypes from 'prop-types'
import css from 'styled-jsx/css'
import cx from 'classnames'

const ComponentCover = ({ children }) => (
    <div className="component-cover">
        {children}
        <style jsx>{`
            div {
                display: flex;
                align-items: center;
                justify-content: center;

                position: relative;
                left: 0;
                top: 0;

                height: 100%;
                width: 100%;

                z-index: 900;
                background: rgba(200, 200, 200, 0.6);
            }
        `}</style>
    </div>
)

ComponentCover.propTypes = {
    children: propTypes.node,
}

export { ComponentCover }
