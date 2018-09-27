/** @format */

import React from 'react'
import PropTypes from 'prop-types'
import { bemClassNames } from '../../utils'
import './styles.css'

const bem = bemClassNames('linear-progress')

function LinearProgress({ amount, padded }) {
    const type = typeof amount === 'undefined' ? 'indeterminate' : 'determinate'
    const style = amount ? { width: `${amount}%` } : null

    return (
        <div className={bem.b({ padded })}>
            <div style={style} className={bem.e('progress', type)} />
        </div>
    )
}

LinearProgress.propTypes = {
    amount: PropTypes.number,
    padded: PropTypes.bool,
}

export { LinearProgress }
export default LinearProgress
