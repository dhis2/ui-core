/** @format */

import React from 'react'
import PropTypes from 'prop-types'
import { bemClassNames } from '../../utils/index'

import '../theme/index.css'

const bem = bemClassNames('app')

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

export { UI }
export default UI
