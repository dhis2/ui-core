import React from 'react'
import propTypes from 'prop-types'

import { colors, spacers } from '../theme'
import { AttachFile } from '../icons/AttachFile'
import { Loading } from '../icons/Status'

const SelectedFile = ({
    label,
    onRemove,
    removeText,
    loading,
    onCancel,
    cancelText,
}) => (
    <p>
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
                padding-top: ${spacers.dp8};
            }
            .icon > :global(svg) {
                width: 12px;
                height: 12px;
                margin-right: 4px;
                margin-top: 2px;
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
                margin-right: 12px;
                word-break: break-word;
            }
            .action {
                font-size: 12px;
                margin-top: 2px;
                text-decoration: underline;
                cursor: pointer;
                color: ${colors.grey700};
            }
        `}</style>
    </p>
)

SelectedFile.propTypes = {
    label: propTypes.string.isRequired,
    onRemove: propTypes.func.isRequired,
    removeText: propTypes.string.isRequired,
    loading: propTypes.bool,
    onCancel: propTypes.func,
    cancelText: propTypes.string,
}

export { SelectedFile }
