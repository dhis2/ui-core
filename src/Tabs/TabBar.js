import React from 'react'
import propTypes from 'prop-types'
import { colors } from '../theme'
import cx from 'classnames'

/**
 * @module
 * @param {TabBar.PropTypes} props
 * @returns {React.Component}
 *
 * @example import { TabBar } from '@dhis2/ui-core'
 *
 * @see Specification: {@link https://github.com/dhis2/design-system/blob/master/molecules/tab.md|Design system}
 * @see Live demo: {@link /demo/?path=/story/tabs--default-fluid|Storybook}
 */
const TabBar = ({ fixed, children }) => (
    <div className={cx('tab-bar', { fixed })}>
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
 * @prop {Node} children
 * @prop {boolean} [fixed]
 */
TabBar.propTypes = {
    children: propTypes.node.isRequired,
    fixed: propTypes.bool,
}

export { TabBar }
