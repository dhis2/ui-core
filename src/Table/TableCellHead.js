import React from 'react'
import css from 'styled-jsx/css'
import propTypes from 'prop-types'

import { TableCellText } from './TableCellText'

export const TableCellHead = ({
    children,
    colSpan,
    rowSpan,
    label,
    hideLabel,
}) => (
    <th colSpan={colSpan} rowSpan={rowSpan}>
        {!hideLabel && (
            <div>{children ? children : <TableCellText label={label} />}</div>
        )}

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

TableCellHead.propTypes = {
    colSpan: propTypes.string,
    rowSpan: propTypes.string,
    label: propTypes.string,
    noTitle: propTypes.bool,
}
