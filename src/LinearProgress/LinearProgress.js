/** @format */

import React from 'react'
import PropTypes from 'prop-types'
import { bemClassNames } from '../utils'
import './linear-progress.css'

const bem = bemClassNames('linear-progress')

const LinearProgress = ({ progress, padded }) => {
    const progressClass =
        typeof progress === 'undefined' ? 'indeterminate' : 'determinate'
    const progressStyle = progress ? { width: `${progress}%` } : null

    return (
        <div className={bem.b({ padded: padded })}>
            <div
                className={bem.e('progress', progressClass)}
                style={progressStyle}
            />
        </div>
    )
}

LinearProgress.propTypes = {
    progress: PropTypes.number,
    padded: PropTypes.bool,
}

export default LinearProgress
