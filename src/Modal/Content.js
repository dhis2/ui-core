import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import css from 'styled-jsx/css'
import cx from 'classnames'

export const Content = ({ children, scrollable }) => (
    <div className={cx('content', { scrollable })}>
        {children}

        <style jsx>{`
            .content {
                flex-grow: 1;
                margin-bottom: 35px;
                overflow-y: auto;
                padding: 0 24px;
            }

            .content:first-child {
                padding-top: 20px;
            }
        `}</style>
    </div>
)

Content.propTypes = {
    children: PropTypes.node.isRequired,
}
