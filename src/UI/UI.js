/** @format */

import React from 'react'
import PropTypes from 'prop-types'
import { bemClassNames } from '../utils'

import '../theme/index.css'

const bem = bemClassNames('d2ui-app')

const UI = ({ theme, children }) => (
    <div className={bem.b(theme)}>{children}</div>
)

UI.propTypes = {
    theme: PropTypes.string,
    children: PropTypes.node,
}

UI.defaultProps = {
    theme: 'default',
}

export default UI
