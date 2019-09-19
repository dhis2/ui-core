import React from 'react'
import propTypes from 'prop-types'
import { instanceOfComponent } from '@dhis2/prop-types'

import { FileListItem } from './FileList/FileListItem'
import { FileListPlaceholder } from './FileList/FileListPlaceholder'

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

FileList.propTypes = {
    children: propTypes.oneOfType([
        instanceOfComponent(FileListPlaceholder),
        instanceOfComponent(FileListItem),
        propTypes.arrayOf(instanceOfComponent(FileListItem)),
    ]),
    className: propTypes.string,
}

export { FileList, FileListItem, FileListPlaceholder }
