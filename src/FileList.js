import React from 'react'
import propTypes from '@dhis2/prop-types'

import { FileListItem } from './FileListItem'
import { FileListPlaceholder } from './FileListPlaceholder'

/**
 * @module
 * @param {FileList.PropTypes} props
 * @returns {React.Component}
 *
 * @example import { FileList } from '@dhis2/ui-core'
 */
const FileList = ({ children, className }) => (
    <div className={className}>
        {children}
        <style jsx>{`
            div {
                padding-top: 4px;
            }
            :global(.file-input) + div {
                padding-top: 0;
            }
        `}</style>
    </div>
)

/**
 * @typedef {Object} PropTypes
 * @static
 *
 * @prop {string} [className]
 * @prop {FileListPlaceholder|FileListItem|Array.<FileListItem>} [children]
 */
FileList.propTypes = {
    children: propTypes.oneOfType([
        propTypes.instanceOfComponent(FileListPlaceholder),
        propTypes.instanceOfComponent(FileListItem),
        propTypes.arrayOf(propTypes.instanceOfComponent(FileListItem)),
    ]),
    className: propTypes.string,
}

export { FileList }
