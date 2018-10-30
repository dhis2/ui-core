import React from 'react'
import PropTypes from 'prop-types'

// import as part of the UI component to make sure that the font is
// loaded for selective imports which might not import the root index
// ---
// note: import css-files with file exts for regexps in e.g. jest/webpack
import 'typeface-roboto.css'
import 'material-design-icons/iconfont/material-icons.css'

import './base/index.css'
import './theme/index.css'

function UI({ theme, children }) {
    return <div className={theme}>{children}</div>
}

UI.propTypes = {
    theme: PropTypes.string,
    children: PropTypes.node,
}

UI.defaultProps = {
    theme: 'blue',
}

export { UI }
export default UI
