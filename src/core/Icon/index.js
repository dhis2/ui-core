/** @format */

import React from 'react'
import PropTypes from 'prop-types'
import './styles.css'

const Icon = ({ name, className, onClick }) => (
    <i className={`material-icons ${className}`} onClick={onClick}>
        {name}
    </i>
)

Icon.defaultProps = {
    className: ''
}

Icon.propTypes = {
    name: PropTypes.string.isRequired,
    className: PropTypes.string,
    onClick: PropTypes.func,
}

export { Icon }
export default Icon
