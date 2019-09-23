import React from 'react'
import propTypes from 'prop-types'
import css from 'styled-jsx/css'
import cx from 'classnames'

const tableCellStyles = css`
    td {
        border-bottom: 1px solid #e8edf2;
        font-size: 14px;
        line-height: 18px;
        padding: 13px 12px;
        height: 45px;
    }

    .dense {
        padding: 9px 12px;
        height: 36px;
    }
`

/**
 * @module
 * @param {TableCell.PropTypes} props
 * @returns {React.Component}
 * @example import { TableCell } from '@dhis2/ui-core'
 * @see Live demo: {@link /demo/?path=/story/table--static-layout|Storybook}
 */
export const TableCell = ({ children, colSpan, rowSpan, dense }) => (
    <td colSpan={colSpan} rowSpan={rowSpan} className={cx({ dense })}>
        {children}

        <style jsx>{tableCellStyles}</style>
    </td>
)

/**
 * @typedef {Object} PropTypes
 * @static
 * @prop {string} [colSpan]
 * @prop {string} [rowSpan]
 * @prop {bool} [dense]
 * @prop {Node} [children]
 */
TableCell.propTypes = {
    colSpan: propTypes.string,
    rowSpan: propTypes.string,
    children: propTypes.node,
    dense: propTypes.bool,
}
