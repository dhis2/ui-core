import React from 'react'
import propTypes from 'prop-types'
import cx from 'classnames'
import { theme, spacers } from '../theme.js'

const Legend = ({ className, children, required }) => (
    <legend className={cx(className, { required })}>
        {children}
        <style jsx>{`
            legend {
                font-size: 16px;
                color: ${theme.default};
                margin: ${spacers.dp12} 0 ${spacers.dp12};
            }
            legend.required::after {
                padding-left: ${spacers.dp4};
                content: '*';
            }
        `}</style>
    </legend>
)

Legend.propTypes = {
    className: propTypes.string,
    children: propTypes.node.isRequired,
    required: propTypes.bool,
}

export { Legend }
