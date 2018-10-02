/** @format */

import React from 'react'
import PropTypes from 'prop-types'

import { bemClassNames } from '../../../utils'

import './styles.css'

const bem = bemClassNames('toggle-field')

function ToggleField({ children, disabled, dense }) {
    return <label className={bem.b({ disabled, dense })}>{children}</label>
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
