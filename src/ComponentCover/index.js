import React, { Fragment } from 'react'
import propTypes from 'prop-types'
import css from 'styled-jsx/css'
import cx from 'classnames'

import { layers } from '../theme.js'

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

                z-index: ${layers.applicationTop - 1};
                background: rgba(33, 43, 54, 0.4);
            }
        `}</style>
    </div>
)

ComponentCover.propTypes = {
    children: propTypes.node,
    className: propTypes.string,
}

export { ComponentCover }
