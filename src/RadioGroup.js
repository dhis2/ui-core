import React from 'react'
import propTypes from '@dhis2/prop-types'

import { ToggleGroup } from './ToggleGroup.js'
import { Radio } from './Radio.js'

/**
 * @module
 * @param {RadioGroup.PropTypes} props
 * @returns {React.Component}
 *
 * @example import { RadioGroup } from '@dhis2/ui-core'
 *
 * @see Specification: {@link https://github.com/dhis2/design-system/blob/master/atoms/radio.md|Design system}
 * @see Live demo: {@link /demo/?path=/story/radiogroup--default|Storybook}
 */

const RadioGroup = props => <ToggleGroup {...props} />

/**
 * @typedef {Object} PropTypes
 * @static
 * @prop {Array.<Radio>} children
 * @prop {function} onChange
 * @prop {string} name
 *
 * @prop {string} [value]
 * @prop {string} [className]
 *
 * @prop {boolean} [disabled]
 * @prop {boolean} [valid] - `valid`, `warning`, and `error` are
 * mutually exclusive
 * @prop {boolean} [warning]
 * @prop {boolean} [error]
 *
 * @prop {boolean} [dense]
 */
RadioGroup.propTypes = {
    ...ToggleGroup.propTypes,
    children: propTypes.arrayOf(propTypes.instanceOfComponent(Radio))
        .isRequired,
    value: propTypes.string,
}

export { RadioGroup }
