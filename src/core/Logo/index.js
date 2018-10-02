/** @format */

import React from 'react'
import PropTypes from 'prop-types'

import iconBlue from './svg/icon-blue.svg'
import iconWhite from './svg/icon-white.svg'
import logoBlue from './svg/logo-blue.svg'
import logoWhite from './svg/logo-white.svg'

import s from './styles'

const images = {
    'icon-blue': iconBlue,
    'icon-white': iconWhite,
    'logo-blue': logoBlue,
    'logo-white': logoWhite,
}

function Logo({ type, color, width, alt }) {
    const src = images[`${type}-${color}`]
    const style = width ? { width } : null

    return <img alt={alt} src={src} className={s(type)} style={style} />
}

Logo.propTypes = {
    type: PropTypes.oneOf(['icon', 'logo']),
    color: PropTypes.oneOf(['blue', 'white']),
    reverse: PropTypes.bool,
    width: PropTypes.string,
    alt: PropTypes.string,
}

Logo.defaultProps = {
    type: 'icon',
    color: 'blue',
    alt: 'DHIS2 logo',
}

export { Logo }
export default Logo
