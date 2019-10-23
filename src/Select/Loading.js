import React from 'react'
import { colors, spacers, theme } from '../theme.js'
import { CircularLoader } from '../CircularLoader.js'

const Loading = () => (
    <div className="loading">
        <CircularLoader small />
        Loading options
        <style jsx>{`
            .loading {
                display: flex;
                align-items: center;
                justify-content: center;
                color: ${colors.grey700};
                font-family: ${theme.fonts};
                font-size: 13px;
                padding: ${spacers.dp8} ${spacers.dp24};
            }
        `}</style>
    </div>
)

export { Loading }
