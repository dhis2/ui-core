import React from 'react'
import * as theme from '../theme.js'

/**
 * Maps over each theme value in a section and converts it to a css custom property (variable)
 * definition. It uses the export name as a prefix, and suffixes that with the key.
 */
const renderThemeSection = ([sectionKey, section]) => {
    const variables = Object.entries(section)

    return variables.map(([ varKey, varVal ]) => (`--${sectionKey}-${varKey}: ${varVal};`)).join('\n')
}

/**
 * Maps over the exported sections of the theme
 */
const renderTheme = () => {
    const sections = Object.entries(theme)

    return sections.map(renderThemeSection).join('\n')
}

/*
 * Inject theme values as CSS variables for users that are using vanilla css.
 */
const CssVariables = () => (
    <style jsx global>{`
        html {
            ${renderTheme()}
        }
    `}</style>
)

export { CssVariables }
