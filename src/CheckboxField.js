import React from 'react'

import { ToggleField, toggleFieldPropTypes } from './ToggleField.js'
import { Checkbox } from './Checkbox.js'

/**
 * @module
 * @param {CheckboxField.PropTypes} props
 * @returns {React.Component}
 *
 * @example import { CheckboxField } from '@dhis2/ui-core'
 *
 * @see Specification: {@link https://github.com/dhis2/design-system/blob/master/atoms/checkbox.md|Design system}
 * @see Live demo: {@link /demo/?path=/story/checkboxfield--default|Storybook}
 */

const CheckboxField = props => (
    <ToggleField {...props} toggleComponent={Checkbox} />
)

/**
 * @typedef {Object} PropTypes
 * @static
 * @prop {string} value
 * @prop {string} label
 *
 * @prop {string} [name]
 * @prop {string} [className]
 * @prop {string} [tabIndex]
 *
 * @prop {function} [onChange]
 * @prop {function} [onFocus]
 * @prop {function} [onBlur]
 *
 * @prop {boolean} [checked]
 * @prop {boolean} [disabled]
 *
 * @prop {boolean} [valid] - `valid`, `warning`, and `error` are
 * mutually exclusive
 * @prop {boolean} [warning]
 * @prop {boolean} [error]
 *
 * @prop {boolean} [dense]
 * @prop {boolean} [initialFocus]
 * @prop {boolean} [required]
 * @prop {string} [helpText]
 * @prop {string} [validationText]
 */
CheckboxField.propTypes = toggleFieldPropTypes

export { CheckboxField }