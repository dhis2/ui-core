import React from 'react'
import propTypes from 'prop-types'
import { colors, spacers, theme } from '../theme.js'

const NoMatch = ({ message, filter }) => (
    <div>
        {message.replace('%%FILTER%%', filter)}
        <style jsx>{`
            div {
                color: ${colors.grey700};
                font-family: ${theme.fonts};
                font-size: 13px;
                line-height: 16px;
                padding: ${spacers.dp8} ${spacers.dp24};
                text-align: center;
            }
        `}</style>
    </div>
)

NoMatch.propTypes = {
    message: propTypes.string.isRequired,
    filter: propTypes.string.isRequired,
}

export { NoMatch }
