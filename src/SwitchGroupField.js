import React from 'react'
import propTypes from '@dhis2/prop-types'

import { ToggleGroupField } from './ToggleGroupField.js'
import { Switch } from './Switch.js'

/**
 * @module
 * @param {SwitchGroupField.PropTypes} props
 * @returns {React.Component}
 *
 * @example import { SwitchGroupField } from '@dhis2/ui-core'
 *
 * @see Specification: {@link https://github.com/dhis2/design-system/blob/master/atoms/switch.md|Design system}
 * @see Live demo: {@link /demo/?path=/story/switchgroupfield--default|Storybook}
 */

const SwitchGroupField = props => <ToggleGroupField {...props} />

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
SwitchGroupField.propTypes = {
    ...ToggleGroupField.propTypes,
    children: propTypes.arrayOf(propTypes.instanceOfComponent(Switch))
        .isRequired,
    value: propTypes.arrayOf(propTypes.string),
}

export { SwitchGroupField }
