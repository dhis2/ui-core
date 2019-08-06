import React from 'react'
import css from 'styled-jsx/css'
import propTypes from 'prop-types'

import { TableCellText } from './TableCellText.js'
import { tableCellHeadStyles } from './styles.js'

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

        <style jsx>{tableCellHeadStyles}</style>
    </th>
)

TableCellHead.propTypes = {
    colSpan: propTypes.string,
    rowSpan: propTypes.string,
    label: propTypes.string,
    hideResponsiveLabel: propTypes.bool,
}
