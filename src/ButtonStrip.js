import React from 'react'
import propTypes from 'prop-types'
import cx from 'classnames'

import { instanceOfComponent, mutuallyExclusive } from '@dhis2/prop-types'

import { Button } from './Button.js'
import styles from './ButtonStrip/styles.js'

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

        <style jsx>{styles}</style>
    </div>
)

const alignmentPropType = mutuallyExclusive(['middle', 'end'], propTypes.bool)

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
    children: propTypes.arrayOf(instanceOfComponent(Button)),
    middle: alignmentPropType,
    end: alignmentPropType,
}

export { ButtonStrip }
