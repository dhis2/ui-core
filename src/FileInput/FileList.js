import React from 'react'
import propTypes from 'prop-types'
import { instanceOfComponent } from '@dhis2/prop-types'

import { FileListItem } from './FileListItem'

const FileList = ({ children, className }) => (
    <div className={className}>
        {children}
        <style jsx>{`
            div {
                padding-top: 4px;
            }
            div:first-child {
                padding-top: 0;
            }
        `}</style>
    </div>
)

FileList.propTypes = {
    children: propTypes.oneOfType([
        instanceOfComponent(FileListItem),
        propTypes.arrayOf(instanceOfComponent(FileListItem)),
    ]),
    className: propTypes.string,
}

export { FileList }
