import React from 'react'
import propTypes from 'prop-types'
import * as theme from '../theme.js'

/**
 * @module
 * @description Injects our theme as CSS custom properties
 * @param {CssVariables.PropTypes} props
 * @returns {React.Component}
 * @example import { CssVariables } from @dhis2/ui-core
 * @see Live demo: {@link /demo/?path=/story/cssvariables--default|Storybook}
 */
const CssVariables = ({ variables }) => {
    const variableString = Object.entries(variables)
        .map(([key, value]) => `--${key}: ${value};`)
        .join('\n')

    return (
        <style jsx global>{`
            html {
                ${variableString}
            }
        `}</style>
    )
}

/**
 * @kind function
 * @description Flattens the sections of our theme, uses the exported name as a prefix for the
 * properties of each section.
 */
const flattenTheme = theme => {
    const flattened = {}

    Object.entries(theme).forEach(([prefix, variables]) => {
        Object.entries(variables).forEach(([key, value]) => {
            flattened[`${prefix}-${key}`] = value
        })
    })

    return flattened
}

CssVariables.defaultProps = {
    variables: flattenTheme(theme),
}

/**
 * @typedef {Object} PropTypes
 * @static
 * @prop {object} [variables] - An object with the variables to insert
 */
CssVariables.propTypes = {
    variables: propTypes.objectOf(
        propTypes.oneOfType([propTypes.string, propTypes.number])
    ),
}

export { CssVariables }
