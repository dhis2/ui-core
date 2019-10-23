import React from 'react'
import { colors, spacers, theme } from '../theme.js'

const Empty = () => (
    <div>
        No data
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

export { Empty }
