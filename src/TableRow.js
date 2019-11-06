import React from 'react'
import css from 'styled-jsx/css'
import propTypes, { instanceOfComponent } from '@dhis2/prop-types'

import { TableCell } from './TableCell.js'
import { TableCellHead } from './TableCellHead.js'

const tableRowStyles = css`
    tr:nth-child(even) {
        background: #fbfcfd;
    }
`

/**
 * @module
 * @param {TableRow.PropTypes} props
 * @returns {React.Component}
 * @example import { TableRow } from '@dhis2/ui-core'
 * @see Live demo: {@link /demo/?path=/story/table--static-layout|Storybook}
 */
export const TableRow = ({ children, className }) => (
    <tr className={className}>
        {children}

        <style jsx>{tableRowStyles}</style>
    </tr>
)

const childPropType = propTypes.oneOfType([
    instanceOfComponent(TableCell),
    instanceOfComponent(TableCellHead),
])

/**
 * @typedef {Object} PropTypes
 * @static
 * @prop {TableCell|TableCellHead|Array.<TableCell|TableCellHead>} children
 * @prop {string} [className]
 */
TableRow.propTypes = {
    children: propTypes.oneOfType([
        childPropType,
        propTypes.arrayOf(childPropType),
    ]).isRequired,
    className: propTypes.string,
}
