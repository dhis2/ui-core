import React from 'react'
import propTypes from 'prop-types'

const Selected = ({ icon: Icon, label }) => {
    return (
        <span>
            {Icon && <Icon />}
            {label}
        </span>
    )
}

Selected.propTypes = {
    icon: propTypes.element,
    label: propTypes.string.isRequired,
}

export { Selected }
