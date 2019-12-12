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
const Tabs = ({ children, className, fixed, dataTest }) => (
    <div className={cx(className, { fixed })} data-test={dataTest}>
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

Tabs.defaultProps = {
    dataTest: 'dhis2-uicore-tabbar-tabs',
}

/**
 * @typedef {Object} PropTypes
 * @static
 * @prop {Tab|Array.<Tab>} children
 * @prop {string} [className]
 * @prop {boolean} [fixed]
 * @prop {boolean} [scrollable]
 */
Tabs.propTypes = {
    children: propTypes.oneOfType([
        propTypes.element,
        propTypes.arrayOf(propTypes.element),
    ]),
    className: propTypes.string,
    dataTest: propTypes.string,
    fixed: propTypes.bool,
}

export { Tabs }
