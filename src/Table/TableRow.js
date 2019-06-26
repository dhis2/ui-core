import React from 'react'
import css from 'styled-jsx/css'

import { useTableContext } from './tableContext'

const tableRowStyles = css`
    tr {
        min-height: 45px;
    }

    tr:nth-child(even) {
        background: #fbfcfd;
    }

    :global(thead) tr,
    :global(tbody) tr {
        min-height: 36px;
    }
`

const tableRowStylesResponsive = css`
    @media (max-width: 768px) {
        tr {
            display: table;
            width: 100%;
            border: 1px solid #e8edf2;
        }

        tr + tr {
            margin-top: 16px;
        }
    }

    @media (max-width: 400px) {
        tr {
            display: block;
        }

        tr:nth-child(even) {
            background: none;
        }

        tr + tr {
            margin-top: 32px;
        }

        tr:nth-child(even) :global(td) {
            background: #fbfcfd;
        }
    }
`

const TableRowStatic = ({ children }) => (
    <tr>
        {children}
        <style jsx>{tableRowStyles}</style>
    </tr>
)

const TableRowResponsive = ({ children }) => (
    <tr>
        {children}
        <style jsx>{tableRowStyles}</style>
        <style jsx>{tableRowStylesResponsive}</style>
    </tr>
)

export const TableRow = ({ children }) => {
    const { staticLayout } = useTableContext()
    const TableRowComponent = staticLayout ? TableRowStatic : TableRowResponsive

    return <TableRowComponent>{children}</TableRowComponent>
}
