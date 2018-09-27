/** @format */

import React from 'react'
import PropTypes from 'prop-types'
import { bemClassNames } from '../../utils'
import './styles.css'

const bem = bemClassNames('paper')

function Paper({ elevation, children, className }) {
    const bemClass = bem.b(`elevation-${elevation}`)
    return <div className={`${bemClass} ${className}`}>{children}</div>
}

Paper.propTypes = {
    elevation: PropTypes.oneOf([0, 1, 2, 3, 4, 6, 12, 24]),
    className: PropTypes.string,
    children: PropTypes.node,
}

Paper.defaultProps = {
    elevation: 1,
    className: 'd2ui-paper-defaults',
}

export { Paper }
export default Paper
