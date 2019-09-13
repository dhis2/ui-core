import React from 'react'
import propTypes from 'prop-types'
import cx from 'classnames'

import { spacers } from '../theme.js'

/**
 * @module
 * @param {Title.PropTypes} props
 * @returns {React.Component}
 */
export const Title = ({ children }) => (
    <h1 className={cx('title')}>
        {children}

        <style jsx>{`
            h1 {
                font-size: 20px;
                font-weight: 500;
                line-height: 24px;
                padding: ${spacers.dp24} ${spacers.dp24} 0;
                margin: 0 0 ${spacers.dp16};
            }
        `}</style>
    </h1>
)

/**
 * @typedef {Object} PropTypes
 * @static
 * @prop {string} children
 */
Title.propTypes = {
    children: propTypes.string.isRequired,
}
