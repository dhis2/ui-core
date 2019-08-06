import React from 'react'
import css from 'styled-jsx/css'
import propTypes from 'prop-types'

import { TableCellText } from './TableCellText'
import { colors, spacers } from '../theme'

export const TableCellHead = ({
    children,
    colSpan,
    rowSpan,
    label,
    hideLabel,
}) => (
    <th colSpan={colSpan} rowSpan={rowSpan}>
        {!hideLabel && (
            <div>
                <TableCellText>{children || label}</TableCellText>
            </div>
        )}

        <style jsx>{`
            th {
                border-bottom: 1px solid #{colors.grey300};
                padding: 0 ${spacers.dp12};
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
    hideResponsiveLabel: propTypes.bool,
}
