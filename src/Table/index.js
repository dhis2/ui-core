import React from 'react'
import propTypes from 'prop-types'

import { Provider } from './tableContext'
import { Table as TableComponent } from './Table'
import { TableHead } from './TableHead'
import { TableBody } from './TableBody'
import { TableFoot } from './TableFoot'
import { TableRow } from './TableRow'
import { TableCell } from './TableCell'
import { TableCellHead } from './TableCellHead'
import { TableCellText } from './TableCellText'

const Table = ({ children, staticLayout }) => (
    <div>
        <Provider value={{ staticLayout }}>
            <TableComponent>{children}</TableComponent>
        </Provider>

        <style jsx>{`
            div {
                overflow-x: auto;
            }
        `}</style>
    </div>
)

Table.propTypes = {
    staticLayout: propTypes.bool,
}

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
