import React from 'react'
import propTypes from 'prop-types'

/**
 * @module
 * @description Injects the variables prop as CSS custom properties
 * @param {CssVariables.PropTypes} props
 * @returns {React.Component}
 * @example import { CssVariables } from @dhis2/ui-core
 * @see Live demo: {@link /demo/?path=/story/cssvariables--default|Storybook}
 */
const CssVariables = ({ variables }) => {
    if (!variables) {
        return null
    }

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
 * @typedef {Object} PropTypes
 * @static
 * @prop {object} [variables] - An object with the variables to insert
 */
CssVariables.propTypes = {
    variables: propTypes.objectOf(
        propTypes.oneOfType([propTypes.string, propTypes.number])
    ).isRequired,
}

export { CssVariables }
