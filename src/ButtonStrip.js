import React from 'react'
import propTypes from '@dhis2/prop-types'
import cx from 'classnames'

import { spacers } from './theme.js'
;('') // TODO: https://github.com/jsdoc/jsdoc/issues/1718

/**
 * @module
 * @param {ButtonStrip.PropTypes} props
 * @returns {React.Component}
 * @example import { ButtonStrip } from @dhis2/ui-core
 * @see Live demo: {@link /demo/?path=/story/buttonstrip--default|Storybook}
 */
const ButtonStrip = ({ className, children, middle, end }) => (
    <div className={cx(className, { middle, end })}>
        {children}

        <style jsx>{`
            div {
                display: flex;
            }
            div.middle {
                justify-content: center;
            }
            div.end {
                justify-content: flex-end;
            }
            div > :global(button) {
                margin-left: ${spacers.dp16};
            }
        `}</style>
    </div>
)

const alignmentPropType = propTypes.mutuallyExclusive(
    ['middle', 'end'],
    propTypes.bool
)

/**
 * @typedef {Object} PropTypes
 * @static
 *
 * @prop {string} [className]
 * @prop {Array.<Button>} [children]
 * @prop {boolean} [middle] - The props `middle`, and `end` are
 * mutually exlusive
 * @prop {boolean} [end]
 */
ButtonStrip.propTypes = {
    children: propTypes.arrayOf(propTypes.element),
    className: propTypes.string,
    end: alignmentPropType,
    middle: alignmentPropType,
}

export { ButtonStrip }
