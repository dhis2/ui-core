/** @format */

import React from 'react'
import PropTypes from 'prop-types'
import './styles.css'

function Icon({ name, className, onClick }) {
    return (
        <i className={`material-icons ${name} ${className}`} onClick={onClick}>
            {name}
        </i>
    )
}

Icon.defaultProps = {
    name: '',
    className: '',
    onClick: () => null,
}

Icon.propTypes = {
    name: PropTypes.string.isRequired,
    className: PropTypes.string,
    onClick: PropTypes.func,
}

export { Icon }
export default Icon
