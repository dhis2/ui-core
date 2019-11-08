import React from 'react'
import propTypes from '@dhis2/prop-types'

import { ToggleGroupField } from './ToggleGroupField.js'
import { Checkbox } from './Checkbox.js'

/**
 * @module
 * @param {CheckboxGroupField.PropTypes} props
 * @returns {React.Component}
 *
 * @example import { CheckboxGroupField } from '@dhis2/ui-core'
 *
 * @see Specification: {@link https://github.com/dhis2/design-system/blob/master/atoms/checkbox.md|Design system}
 * @see Live demo: {@link /demo/?path=/story/checkboxgroupfield--default|Storybook}
 */
const CheckboxGroupField = props => <ToggleGroupField {...props} />

/**
 * @typedef {Object} PropTypes
 * @static
 * @prop {Array.<Switch>} children
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
 * @prop {string} [label]
 * @prop {string} [helpText]
 * @prop {string} [validationText]
 * @prop {boolean} [required]
 */
CheckboxGroupField.propTypes = {
    ...ToggleGroupField.propTypes,
    children: propTypes.arrayOf(propTypes.instanceOfComponent(Checkbox))
        .isRequired,
    value: propTypes.arrayOf(propTypes.string),
}

export { CheckboxGroupField }
