import React, { Fragment } from 'react'
import propTypes from 'prop-types'
import css from 'styled-jsx/css'
import cx from 'classnames'

export const Content = ({ children, scrollable }) => (
    <div className={cx({ scrollable })}>
        {children}

        <style jsx>{`
            div {
                flex-grow: 1;
                margin-bottom: 35px;
                overflow-y: auto;
                padding: 0 24px;
            }

            div:first-child {
                padding-top: 20px;
            }
        `}</style>
    </div>
)

Content.propTypes = {
    children: propTypes.node.isRequired,
}
