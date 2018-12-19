import React from 'react'
import PropTypes from 'prop-types'
import { rx } from './styles'

import 'material-design-icons-iconfont/dist/material-design-icons.css'

function Icon({ name, className, onClick }) {
    return (
        <i onClick={onClick} className={rx('base', className)}>
            {name}
        </i>
    )
}

Icon.defaultProps = {
    name: '',
    className: '',
    onClick: undefined,
}

Icon.propTypes = {
    name: PropTypes.string.isRequired,
    className: PropTypes.string,
    onClick: PropTypes.func,
}

export { Icon }
export default Icon
