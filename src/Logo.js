import React from 'react'
import propTypes from '@dhis2/prop-types'

import { LogoSvg } from './Logo/LogoSvg'
import { LogoIconSvg } from './Logo/LogoIconSvg'

/*
 * This should likely not live in ui-core, but in ui-widgets
 */

/**
 * @module
 * @deprecated
 * @param {Logo.PropTypes} props
 * @returns {React.Component}
 */

/**
 * @typedef {Object} PropTypes
 * @static
 * @prop {string} [className]
 */

/*
 * These are official colors for dhis2 logos.
 *
 * They are isolated here and not in `theme.js` as they should not be
 * shared with any other components.
 *
 * https://github.com/dhis2/dhis2-identity
 *
 */
const blue = '#0080d4'
const white = '#ffffff'
const dark = '#212225'

export const LogoIcon = ({ className }) => (
    <LogoIconSvg iconColor={blue} className={className} />
)
LogoIcon.propTypes = {
    className: propTypes.string,
}

export const LogoIconWhite = ({ className }) => (
    <LogoIconSvg iconColor={white} className={className} />
)
LogoIconWhite.propTypes = {
    className: propTypes.string,
}

export const Logo = ({ className }) => (
    <LogoSvg iconColor={blue} textColor={dark} className={className} />
)
Logo.propTypes = {
    className: propTypes.string,
}

export const LogoWhite = ({ className }) => (
    <LogoSvg iconColor={white} textColor={white} className={className} />
)
LogoWhite.propTypes = {
    className: propTypes.string,
}
