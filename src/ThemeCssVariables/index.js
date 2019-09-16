import React from 'react'
import { CssVariables } from '../CssVariables'
import * as theme from '../theme.js'

/**
 * @module
 * @description Injects our theme as CSS custom properties
 * @returns {React.Component}
 * @example import { ThemeCssVariables } from @dhis2/ui-core
 * @see Live demo: {@link /demo/?path=/story/themecssvariables--default|Storybook}
 */
const ThemeCssVariables = () => {
    const flattenedTheme = {}

    Object.entries(theme).forEach(([prefix, variables]) => {
        Object.entries(variables).forEach(([key, value]) => {
            flattenedTheme[`${prefix}-${key}`] = value
        })
    })

    return <CssVariables variables={flattenedTheme} />
}

export { ThemeCssVariables }
