/** @format */

import React from 'react'
import PropTypes from 'prop-types'
import s from './styles'

function ToggleField({ children, disabled, dense }) {
    return (
        <label className={s('container', { disabled, dense })}>
            {children}
        </label>
    )
}

ToggleField.propTypes = {
    children: PropTypes.node,
    disabled: PropTypes.bool,
    dense: PropTypes.bool,
}

ToggleField.defaultProps = {
    disabled: false,
}

export { ToggleField }
export default ToggleField
