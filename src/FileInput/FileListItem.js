import React from 'react'
import propTypes from 'prop-types'
import cx from 'classnames'

import { colors, spacers } from '../theme.js'
import { AttachFile } from '../icons/AttachFile.js'
import { Loading } from '../icons/Status.js'

const FileListItem = ({
    className,
    label,
    onRemove,
    removeText,
    loading,
    onCancel,
    cancelText,
}) => (
    <p className={cx('selected-file', className)}>
        <span className="icon">{loading ? <Loading /> : <AttachFile />}</span>

        <span className="text">
            <span className="label">{label}</span>

            {loading && onCancel && cancelText && (
                <span className="action" onClick={onCancel}>
                    {cancelText}
                </span>
            )}

            {!loading && (
                <span className="action" onClick={onRemove}>
                    {removeText}
                </span>
            )}
        </span>

        <style jsx>{`
            p {
                display: flex;
                margin: 0;
                padding-top: ${spacers.dp4};
                line-height: 18px;
            }
            .icon > :global(svg) {
                width: 12px;
                height: 12px;
                line-height: 12px;
                margin-right: 4px;
                flex-grow: 0;
                flex-shrink: 0;
            }
            .text {
                flex-grow: 1;
                flex-shrink: 1;
            }
            .label {
                font-size: 14px;
                color: ${colors.grey900};
                word-break: break-all;
            }
            .label::after {
                content: ' ';
                display: inline-block;
                width: 12px;
            }
            .action {
                font-size: 12px;
                line-height: 12px;
                margin-top: 0;
                text-decoration: underline;
                cursor: pointer;
                color: ${colors.grey700};
            }
        `}</style>
    </p>
)

FileListItem.propTypes = {
    className: propTypes.string,
    label: propTypes.string.isRequired,
    onRemove: propTypes.func.isRequired,
    removeText: propTypes.string.isRequired,
    loading: propTypes.bool,
    onCancel: propTypes.func,
    cancelText: propTypes.string,
}

export { FileListItem }
