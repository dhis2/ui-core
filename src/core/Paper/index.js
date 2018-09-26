/** @format */

import React from 'react'
import PropTypes from 'prop-types'
import { bemClassNames } from '../../utils'
import './styles.css'

const bem = bemClassNames('paper')

function Paper({ elevation, children, width, height, padding }) {
    const style = {
        width,
        height,
        padding,
    }

    return (
        <div className={bem.b(`elevation-${elevation}`)} style={style}>
            {children}
        </div>
    )
}

Paper.propTypes = {
    elevation: PropTypes.oneOf([0, 1, 2, 3, 4, 6, 12, 24]),
    padding: PropTypes.string,
    width: PropTypes.string,
    height: PropTypes.string,
    children: PropTypes.node,
}

Paper.defaultProps = {
    elevation: 1,
    padding: '2rem 5rem 4rem',
    width: 'auto',
    height: 'auto',
}

export { Paper }
export default Paper
