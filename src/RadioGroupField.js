import React from 'react'
import propTypes from '@dhis2/prop-types'

import { ToggleGroupField } from './ToggleGroupField.js'
import { Radio } from './Radio.js'

/**
 * @module
 * @param {RadioGroupField.PropTypes} props
 * @returns {React.Component}
 *
 * @example import { RadioGroupField } from '@dhis2/ui-core'
 *
 * @see Specification: {@link https://github.com/dhis2/design-system/blob/master/atoms/radio.md|Design system}
 * @see Live demo: {@link /demo/?path=/story/radiogroupfield--default|Storybook}
 */

const RadioGroupField = props => <ToggleGroupField {...props} />

/**
 * @typedef {Object} PropTypes
 * @static
 * @prop {Array.<Radio>} children
 * @prop {function} [onChange]
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
 * @prop {string} [label]
 * @prop {string} [helpText]
 * @prop {string} [validationText]
 * @prop {boolean} [required]
 */
RadioGroupField.propTypes = {
    ...ToggleGroupField.propTypes,
    children: propTypes.arrayOf(propTypes.instanceOfComponent(Radio))
        .isRequired,
    value: propTypes.string,
}

export { RadioGroupField }
