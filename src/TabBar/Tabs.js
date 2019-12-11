import React from 'react'
import propTypes from '@dhis2/prop-types'
import cx from 'classnames'

import { colors } from '../theme.js'

/**
 * @module
 * @private
 * @param {Object} PropTypes
 * @returns {React.Component}
 */
const Tabs = ({ children, fixed, dataTest }) => (
    <div className={cx({ fixed })} data-test={dataTest}>
        {children}

        <style jsx>{`
            div {
                display: flex;
                align-items: flex-start;
                position: relative;
                overflow: hidden;
                box-shadow: inset 0 -1px 0 0 ${colors.grey400};
                flex-wrap: nowrap;
                flex-grow: 1;
                background: ${colors.white};
            }
        `}</style>
    </div>
)

/**
 * @typedef {Object} PropTypes
 * @static
 * @prop {Tab|Array.<Tab>} children
 * @prop {boolean} [fixed]
 * @prop {string} [dataTest]
 */
Tabs.propTypes = {
    dataTest: propTypes.string.isRequired,
    children: propTypes.oneOfType([
        propTypes.element,
        propTypes.arrayOf(propTypes.element),
    ]),
    fixed: propTypes.bool,
}

export { Tabs }
