import React from 'react'
import propTypes from '@dhis2/prop-types'
import { colors, spacers } from './theme.js'
;('') // TODO: https://github.com/jsdoc/jsdoc/issues/1718

/**
 * @module
 * @param {FileListPlaceholder.PropTypes} props
 * @returns {React.Component}
 *
 * @example import { FileListPlaceholder } from '@dhis2/ui-core'
 */
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

/**
 * @typedef {Object} PropTypes
 * @static
 *
 * @prop {string} [children]
 */
FileListPlaceholder.propTypes = {
    children: propTypes.string,
}

export { FileListPlaceholder }
