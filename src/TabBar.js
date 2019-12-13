import React from 'react'
import propTypes from '@dhis2/prop-types'
import cx from 'classnames'

import { colors } from './theme.js'
import { ScrollBar } from './TabBar/ScrollBar.js'
;('') // TODO: https://github.com/jsdoc/jsdoc/issues/1718

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
const TabBar = ({ fixed, children, className, scrollable }) => {
    const Container = scrollable ? ScrollBar : React.Fragment
    return (
        <Container>
            <div className={cx('tab-bar', className, { fixed })}>
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
        </Container>
    )
}

/**
 * @typedef {Object} PropTypes
 * @static
 * @prop {Tab|Array.<Tab>} children
 * @prop {string} [className]
 * @prop {boolean} [fixed]
 * @prop {boolean} [scrollable]
 */
TabBar.propTypes = {
    children: propTypes.oneOfType([
        propTypes.element,
        propTypes.arrayOf(propTypes.element),
    ]),
    className: propTypes.string,
    fixed: propTypes.bool,
    scrollable: propTypes.bool,
}

export { TabBar }
