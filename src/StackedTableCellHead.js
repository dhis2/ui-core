import React from 'react'
import propTypes from 'prop-types'

export const StackedTableCellHead = ({
    children,
    colSpan,
    rowSpan,
    label,
    className,
}) => (
    <th colSpan={colSpan} rowSpan={rowSpan} className={className}>
        {(children || label) && <div>{children || label}</div>}

        <style jsx>{`
            th {
                border-bottom: 1px solid #e8edf2;
                padding: 0 12px;
            }

            div {
                min-height: 36px;
            }
        `}</style>
    </th>
)

StackedTableCellHead.propTypes = {
    children: propTypes.string,
    className: propTypes.string,
    colSpan: propTypes.string,
    label: propTypes.string,
    rowSpan: propTypes.string,
}

StackedTableCellHead.defaultProps = {
    children: '',
}
