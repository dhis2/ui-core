import React from 'react'
import propTypes from 'prop-types'
import { colors, spacers } from '../theme.js'

const Placeholder = ({ children }) => (
    <p>
        {children}
        <style jsx>{`
            p {
                margin: 0;
                padding-top: ${spacers.dp4};
                font-size: 14px;
                color: ${colors.grey700};
            }
        `}</style>
    </p>
)

Placeholder.propTypes = {
    children: propTypes.string,
}

export { Placeholder }
