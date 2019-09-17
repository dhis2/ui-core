import React from 'react'
import propTypes from 'prop-types'
import * as theme from './theme'

const toPrefixedThemeSection = themeSectionKey =>
    Object.entries(theme[themeSectionKey]).reduce((prefixed, [key, value]) => {
        prefixed[`${themeSectionKey}-${key}`] = value

        return prefixed
    }, {})

const toCustomPropertyString = themeSection =>
    Object.entries(themeSection)
        .map(([key, value]) => `--${key}: ${value};`)
        .join('\n')

/**
 * @module
 * @description Injects our theme variables as CSS custom properties
 * @param {CssVariables.PropTypes} props
 * @returns {React.Component}
 * @example import { CssVariables } from @dhis2/ui-core
 * @see Live demo: {@link /demo/?path=/story/cssvariables--default|Storybook}
 */
const CssVariables = props => {
    const variables = Object.keys(props)
        // Filter all props that are false
        .filter(prop => props[prop])
        // Map props to corresponding theme section and prefixes keys with section name
        .map(toPrefixedThemeSection)
        // Map each section to a single string of css custom property declarations
        .map(toCustomPropertyString)
        // Join all the sections to a single string
        .join('\n')

    return (
        <style jsx global>{`
            html {
                ${variables}
            }
        `}</style>
    )
}

CssVariables.defaultProps = {
    colors: false,
    theme: false,
    layers: false,
    spacers: false,
    elevations: false,
}

/**
 * @typedef {Object} PropTypes
 * @static
 * @prop {boolean} [colors]
 * @prop {boolean} [theme]
 * @prop {boolean} [layers]
 * @prop {boolean} [spacers]
 * @prop {boolean} [elevations]
 */
CssVariables.propTypes = {
    colors: propTypes.bool,
    theme: propTypes.bool,
    layers: propTypes.bool,
    spacers: propTypes.bool,
    elevations: propTypes.bool,
}

export { CssVariables }
