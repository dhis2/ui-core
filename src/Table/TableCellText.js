import React from 'react'
import propTypes from 'prop-types'
import css from 'styled-jsx/css'

import { Consumer } from './tableContext'

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

const tableCellTextStylesResponsive = css`
    @media (max-width: 400px) {
        :global(tbody) span {
            padding: 3px 0;
        }
    }
`

const TableCellTextStatic = ({ label }) => (
    <span>
        {label}
        <style jsx>{tableCellTextStyles}</style>
    </span>
)

const TableCellTextResponsive = ({ label }) => (
    <span>
        {label}
        <style jsx>{tableCellTextStyles}</style>
        <style jsx>{tableCellTextStylesResponsive}</style>
    </span>
)

export const TableCellText = ({ label }) => (
    <Consumer>
        {({ staticLayout }) => {
            const TableCellTextComponent = staticLayout
                ? TableCellTextStatic
                : TableCellTextResponsive

            return <TableCellTextComponent label={label} />
        }}
    </Consumer>
)

TableCellText.propTypes = {
    label: propTypes.string,
}
