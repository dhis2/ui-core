import React from 'react'
import propTypes from '@dhis2/prop-types'

import { ToggleGroup } from './ToggleGroup.js'
import { Switch } from './Switch.js'

/**
 * @module
 * @param {SwitchGroup.PropTypes} props
 * @returns {React.Component}
 *
 * @example import { SwitchGroup } from '@dhis2/ui-core'
 *
 * @see Specification: {@link https://github.com/dhis2/design-system/blob/master/atoms/switch.md|Design system}
 * @see Live demo: {@link /demo/?path=/story/switchgroup--default|Storybook}
 */

const SwitchGroup = props => <ToggleGroup {...props} />

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
 */
SwitchGroup.propTypes = {
    ...ToggleGroup.propTypes,
    children: propTypes.arrayOf(propTypes.instanceOfComponent(Switch))
        .isRequired,
    value: propTypes.arrayOf(propTypes.string),
}

export { SwitchGroup }
