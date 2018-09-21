/** @format */

import React from 'react'
import PropTypes from 'prop-types'
import './togglefield.css'
import { bemClassNames } from '../utils'

const bem = bemClassNames('d2ui-toggle-field')

const ToggleField = ({ children, disabled, dense }) => (
    <label className={bem.b({ disabled, dense })}>{children}</label>
)

ToggleField.propTypes = {
    children: PropTypes.node,
    disabled: PropTypes.bool,
    dense: PropTypes.bool,
}

export default ToggleField
