import { TableFoot } from './TableFoot'

import React from 'react'
import css from 'styled-jsx/css'

import { TableHead } from './TableHead'
import { TableBody } from './TableBody'
import { TableRow } from './TableRow'
import { TableCell } from './TableCell'
import { TableCellHead } from './TableCellHead'
import { TableCellText } from './TableCellText'

const Table = ({ children }) => (
    <div>
        <table>{children}</table>

        <style jsx>{`
            div {
                overflow-x: auto;
            }

            table {
                border: 1px solid #e8edf2;
                background-color: #ffffff;
                min-width: 100%;
                text-align: left;
                border-collapse: collapse;
                vertical-align: top;
            }

            @media (max-width: 768px) {
                table {
                    display: block;
                    border: 0;
                }
            }
        `}</style>
    </div>
)

Table.propTypes = {}

export {
    Table,
    TableRow,
    TableHead,
    TableBody,
    TableFoot,
    TableCell,
    TableCellHead,
    TableCellText,
}
