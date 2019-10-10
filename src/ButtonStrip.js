import React, { Children, cloneElement } from 'react'
import propTypes from '@dhis2/prop-types'
import cx from 'classnames'
import { resolve } from 'styled-jsx/css'

import { spacers } from './theme.js'
import { Button } from './Button.js'

const buttonStyles = resolve`
    .start {
        margin-left: ${spacers.dp16};
    }
    .middle {
        margin-left: ${spacers.dp8};
        margin-right: ${spacers.dp8};
    }
    .end {
        margin-right: ${spacers.dp16};
    }
`

/**
 * @module
 * @param {ButtonStrip.PropTypes} props
 * @returns {React.Component}
 * @example import { ButtonStrip } from @dhis2/ui-core
 * @see Live demo: {@link /demo/?path=/story/buttonstrip--default|Storybook}
 */
const ButtonStrip = ({ className, children, middle, end }) => (
    <div className={cx(className, { middle, end })}>
        {Children.map(children, child =>
            cloneElement(child, {
                className: cx(child.props.className, buttonStyles.className, {
                    start: !middle && !end,
                    middle,
                    end,
                }),
            })
        )}
        {buttonStyles.styles}
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
    className: propTypes.string,
    children: propTypes.arrayOf(propTypes.instanceOfComponent(Button)),
    middle: alignmentPropType,
    end: alignmentPropType,
}

export { ButtonStrip }
