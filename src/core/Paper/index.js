/** @format */

import React from 'react'
import PropTypes from 'prop-types'
import { componentStyles } from '../../utils'

import './styles.css'
import styles from './styles.json'
const myst = componentStyles(styles)

function Paper({ elevation, children, className }) {
    const ele = `elevation-${elevation}`
    const classes = `${myst(ele)} ${myst('defaults')}`

    return <div className={classes}>{children}</div>
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
