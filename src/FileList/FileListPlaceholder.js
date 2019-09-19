import React from 'react'
import propTypes from 'prop-types'
import { colors, spacers } from '../theme.js'

const FileListPlaceholder = ({ children }) => (
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

FileListPlaceholder.propTypes = {
    children: propTypes.string,
}

export { FileListPlaceholder }
