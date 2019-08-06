import React from 'react'
import propTypes from 'prop-types'

import { Provider } from './tableContext'
import { TableBody } from './TableBody'
import { TableCell } from './TableCell'
import { TableCellHead } from './TableCellHead'
import { Table as TableComponent } from './Table'
import { TableFoot } from './TableFoot'
import { TableHead } from './TableHead'
import { TableRow } from './TableRow'
import { TableRowHead } from './TableRowHead'
import { extractHeaderLabels } from './extractHeaderLabels'

const Table = ({ children, responsiveLayout }) => {
    const headerLabels = responsiveLayout ? extractHeaderLabels(children) : null

    return (
        <div>
            <Provider
                value={{
                    responsiveLayout,
                    headerLabels,
                }}
            >
                <TableComponent>{children}</TableComponent>
            </Provider>

            <style jsx>{`
                div {
                    overflow-x: auto;
                }
            `}</style>
        </div>
    )
}

Table.propTypes = {
    responsiveLayout: propTypes.bool,
}

export {
    Table,
    TableRow,
    TableRowHead,
    TableHead,
    TableBody,
    TableFoot,
    TableCell,
    TableCellHead,
}
