/** @format */

import React from 'react'
import PropTypes from 'prop-types'
import { bemClassNames } from '../../utils/index'
import './styles.css'

const bem = bemClassNames('paper')

const Paper = ({ elevation, children, padded }) => (
    <div
        className={bem.b(`elevation-${elevation}dp`, {
            padded: padded,
        })}
    >
        {children}
    </div>
)

Paper.propTypes = {
    elevation: PropTypes.oneOf([0, 1, 2, 3, 4, 6, 12, 24]),
    padded: PropTypes.bool,
    children: PropTypes.node,
}

Paper.defaultProps = {
    elevation: 1,
    padded: false,
}

export { Paper }
