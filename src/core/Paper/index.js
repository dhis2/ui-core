/** @format */

import React from 'react'
import PropTypes from 'prop-types'
import s from './styles'

function Paper({ width, height, elevation, children }) {
    const style = { width, height }
    return (
        <div style={style} className={s('container', `elevation-${elevation}`)}>
            {children}
        </div>
    )
}

Paper.defaultProps = {
    elevation: 1,
    width: 'inherit',
    height: 'inherit',
}

Paper.propTypes = {
    width: PropTypes.string,
    height: PropTypes.string,
    elevation: PropTypes.oneOf([0, 1, 2, 3, 4, 6, 12, 24]),
    className: PropTypes.string,
    children: PropTypes.node,
}

export { Paper }
export default Paper
