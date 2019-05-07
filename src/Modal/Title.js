import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import css from 'styled-jsx/css'
import cx from 'classnames'

export const Title = ({ children }) => (
    <h1 className={cx('title')}>
        {children}

        <style jsx>{`
            .title {
                font-size: 20px;
                font-weight: 500;
                line-height: 24px;
                padding: 20px 24px 0;
                margin: 0 0 17px;
            }
        `}</style>
    </h1>
)

Title.propTypes = {
    children: PropTypes.string.isRequired,
}
