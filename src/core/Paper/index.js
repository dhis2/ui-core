/** @format */

import React from 'react'
import PropTypes from 'prop-types'

import classNames from '../../utils/css'
import './styles.css'
import styles from './styles.json'

const cx = classNames(styles)

function Paper({ elevation, children, className }) {
    const classes = cx({
        [`elevation-${elevation}`]: true,
        defaults: true,
    })

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
