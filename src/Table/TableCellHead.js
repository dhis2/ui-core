import React from 'react'
import propTypes from 'prop-types'
import css from 'styled-jsx/css'
import cx from 'classnames'

const tableCellHeadStyles = css`
    th {
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

export const TableCellHead = ({ children, colSpan, rowSpan, dense }) => (
    <th colSpan={colSpan} rowSpan={rowSpan} className={cx({ dense })}>
        {children}

        <style jsx>{tableCellHeadStyles}</style>
    </th>
)

TableCellHead.propTypes = {
    colSpan: propTypes.string,
    dense: propTypes.bool,
    rowSpan: propTypes.string,
    label: propTypes.string,
    children: propTypes.node,
}
