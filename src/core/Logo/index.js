/** @format */

import React from 'react'
import PropTypes from 'prop-types'

import './styles.css'
import iconBlue from './svg/icon-blue.svg'
import iconWhite from './svg/icon-white.svg'
import logoBlue from './svg/logo-blue.svg'
import logoWhite from './svg/logo-white.svg'

import classNames from 'classnames/bind'
import './styles.css'
import styles from './styles.json'

const cx = classNames.bind(styles)

const images = {
    'icon-blue': iconBlue,
    'icon-white': iconWhite,
    'logo-blue': logoBlue,
    'logo-white': logoWhite,
}

function Logo({ type, color, width, alt }) {
    const src = images[`${type}-${color}`]
    const style = width ? { width } : null

    return <img alt={alt} src={src} className={`${cx(type)}`} style={style} />
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
