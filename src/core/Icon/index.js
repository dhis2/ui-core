/** @format */

import React from 'react'
import PropTypes from 'prop-types'
import s from './styles'

function Icon({ name, className, onClick }) {
    return (
        <i
            className={s('container', className, { [name]: true })}
            onClick={onClick}
        >
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
