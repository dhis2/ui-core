/** @format */

import React from 'react'
import PropTypes from 'prop-types'
import './styles.css'

const Icon = ({ name, className }) => (
    <i className={`material-icons ${className ? ' ' + className : ''}`}>
        {name}
    </i>
)

Icon.propTypes = {
    name: PropTypes.string.isRequired,
    className: PropTypes.string,
}

export { Icon }
export default Icon
