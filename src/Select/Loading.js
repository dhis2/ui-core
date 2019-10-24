import React from 'react'
import propTypes from '@dhis2/prop-types'
import { colors, spacers, theme } from '../theme.js'
import { CircularLoader } from '../CircularLoader.js'

const Loading = ({ message, className }) => (
    <div className={className}>
        <CircularLoader small />
        {message}
        <style jsx>{`
            div {
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

Loading.propTypes = {
    className: propTypes.string,
    message: propTypes.string,
}

export { Loading }
