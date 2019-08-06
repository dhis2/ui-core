import React from 'react'
import propTypes from 'prop-types'
import css from 'styled-jsx/css'

import { Consumer } from './tableContext'

const tableCellTextStyles = css`
    span {
        display: inline-block;
        padding: 9px 0;
    }

    :global(tbody) span {
        padding: 13px 0;
    }
`

const tableCellTextStylesResponsive = css`
    @media (max-width: 768px) {
        :global(tbody) span {
            padding: 3px 0;
        }
    }
`

const TableCellTextStatic = ({ children }) => (
    <span>
        {children}
        <style jsx>{tableCellTextStyles}</style>
    </span>
)

const TableCellTextResponsive = ({ children }) => (
    <span>
        {children}
        <style jsx>{tableCellTextStyles}</style>
        <style jsx>{tableCellTextStylesResponsive}</style>
    </span>
)

export const TableCellText = ({ children }) => (
    <Consumer>
        {({ responsiveLayout }) => {
            const TableCellTextComponent = responsiveLayout
                ? TableCellTextResponsive
                : TableCellTextStatic

            return <TableCellTextComponent children={children} />
        }}
    </Consumer>
)

TableCellText.propTypes = {
    children: propTypes.node,
}
