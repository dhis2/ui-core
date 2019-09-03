import React from 'react'
import propTypes from 'prop-types'

import { colors, spacers } from './theme.js'

const Divider = ({ margin, className }) => (
    <div className={className}>
        <style jsx>{`
            div {
                display: inline-block;
                width: 100%;
                height: 1px;
                background-color: ${colors.grey300};
            }
        `}</style>
        <style jsx>{`
            div {
                margin: ${margin};
            }
        `}</style>
    </div>
)

Divider.defaultProps = {
    margin: `${spacers.dp8} 0`,
}

Divider.propTypes = {
    className: propTypes.string,
    margin: propTypes.string,
}

export { Divider }