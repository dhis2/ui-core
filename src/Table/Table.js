import React from 'react'
import css from 'styled-jsx/css'

import { useTableContext } from './tableContext'

const tableStyles = css`
    table {
        border: 1px solid #e8edf2;
        background-color: #ffffff;
        min-width: 100%;
        text-align: left;
        border-collapse: collapse;
        vertical-align: top;
    }
`

const tableStylesResponsive = css`
    @media (max-width: 768px) {
        table {
            display: block;
            border: 0;
        }
    }
`

const TableRepsonsive = ({ children }) => (
    <table>
        {children}

        <style jsx>{tableStyles}</style>
        <style jsx>{tableStylesResponsive}</style>
    </table>
)

const TableStatic = ({ children }) => (
    <table>
        {children}

        <style jsx>{tableStyles}</style>
    </table>
)

export const Table = ({ children }) => {
    const { staticLayout } = useTableContext()
    const TableComponent = staticLayout ? TableStatic : TableRepsonsive

    return <TableComponent>{children}</TableComponent>
}
