import React from 'react'
import propTypes from '@dhis2/prop-types'
import cx from 'classnames'

import { spacers } from './theme.js'

/**
 * @module
 * @param {ModalTitle.PropTypes} props
 * @returns {React.Component}
 */
export const ModalTitle = ({ children, dataTest }) => (
    <h1 className={cx('title')} data-test={dataTest}>
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

ModalTitle.defaultProps = {
    dataTest: 'dhis2-uicore-modaltitle',
}

/**
 * @typedef {Object} PropTypes
 * @static
 * @prop {string} children
 */
ModalTitle.propTypes = {
    children: propTypes.string.isRequired,
    dataTest: propTypes.string,
}
