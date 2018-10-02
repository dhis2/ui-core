/** @format */

import React from 'react'
import PropTypes from 'prop-types'
import s from './styles'

function Paper({ elevation, children }) {
    return (
        <div className={s('container', `elevation-${elevation}`)}>
            {children}
        </div>
    )
}

Paper.propTypes = {
    elevation: PropTypes.oneOf([0, 1, 2, 3, 4, 6, 12, 24]),
    className: PropTypes.string,
    children: PropTypes.node,
}

Paper.defaultProps = {
    elevation: 1,
}

export { Paper }
export default Paper
