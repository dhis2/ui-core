import React from 'react'

import 'material-design-icons-iconfont/dist/material-design-icons.css'

function Icon({ name, className, onClick }) {
    return <i className={className}>{name}</i>
}

export { Icon }
export default Icon
