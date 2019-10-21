import React from 'react'
import propTypes from 'prop-types'
import { colors, spacers, theme } from '../../theme.js'

const NoMatch = ({ filter }) => (
    <div>
        Nothing found for &quot;{filter}&quot;
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
    filter: propTypes.string.isRequired,
}

export { NoMatch }
