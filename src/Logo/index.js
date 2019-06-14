import React from 'react'

import { LogoSvg } from './LogoSvg'
import { LogoIconSvg } from './LogoIconSvg'

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

export const LogoIconWhite = ({ className }) => (
    <LogoIconSvg iconColor={white} className={className} />
)

export const Logo = ({ className }) => (
    <LogoSvg iconColor={blue} textColor={dark} className={className} />
)

export const LogoWhite = ({ className }) => (
    <LogoSvg iconColor={white} textColor={white} className={className} />
)
