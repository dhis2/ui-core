import React from 'react'
import propTypes from '@dhis2/prop-types'

import { ToggleGroup } from './ToggleGroup.js'
import { Checkbox } from './Checkbox.js'

/**
 * @module
 * @param {CheckboxGroup.PropTypes} props
 * @returns {React.Component}
 *
 * @example import { CheckboxGroup } from '@dhis2/ui-core'
 *
 * @see Specification: {@link https://github.com/dhis2/design-system/blob/master/atoms/checkbox.md|Design system}
 * @see Live demo: {@link /demo/?path=/story/checkboxgroup--default|Storybook}
 */

const CheckboxGroup = props => <ToggleGroup {...props} />

/**
 * @typedef {Object} PropTypes
 * @static
 * @prop {Array.<Checkbox>} children
 * @prop {function} [onChange]
 * @prop {string} name
 *
 * @prop {Array.<String>} [value]
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
CheckboxGroup.propTypes = {
    ...ToggleGroup.propTypes,
    children: propTypes.arrayOf(propTypes.instanceOfComponent(Checkbox))
        .isRequired,
    value: propTypes.arrayOf(propTypes.string),
}

export { CheckboxGroup }
