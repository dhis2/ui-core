/** @format */

import React from 'react'
import PropTypes from 'prop-types'
import { bemClassNames } from '../../utils'

// import as part of the UI component to make sure that the font is
// loaded for selective imports which might not import the root index
import 'typeface-roboto'
import 'material-design-icons/iconfont/material-icons.css'

import './theme/index.css'

const bem = bemClassNames('app')

function UI({ theme, children }) {
    return <div className={bem.b(theme)}>{children}</div>
}

UI.propTypes = {
    theme: PropTypes.string,
    children: PropTypes.node,
}

UI.defaultProps = {
    theme: 'default',
}

export { UI }
export default UI
