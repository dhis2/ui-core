import React from 'react'
import propTypes from 'prop-types'
import css from 'styled-jsx/css'

const tableCellTextStyles = css`
    span {
        display: inline-block;
        padding: 9px 0;
        font-size: 14px;
        line-height: 18px;
    }

    :global(tbody) span {
        padding: 13px 0;
    }
`

export const TableCellText = ({ children }) => (
    <span>
        {children}
        <style jsx>{tableCellTextStyles}</style>
    </span>
)

TableCellText.propTypes = {
    children: propTypes.oneOfType([
        propTypes.node,
        propTypes.arrayOf(propTypes.node),
    ]).isRequired,
}
