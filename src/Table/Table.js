import React from 'react'
import css from 'styled-jsx/css'
import propTypes from 'prop-types'
import { instanceOfComponent } from '@dhis2/prop-types'

import { Consumer } from './tableContext'
import { TableBody } from './TableBody'
import { TableFoot } from './TableFoot'
import { TableHead } from './TableHead'

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

export const Table = ({ children }) => (
    <Consumer>
        {({ staticLayout }) => {
            const TableComponent = staticLayout ? TableStatic : TableRepsonsive
            return <TableComponent>{children}</TableComponent>
        }}
    </Consumer>
)

const childPropType = propTypes.oneOfType([
    instanceOfComponent(TableHead),
    instanceOfComponent(TableBody),
    instanceOfComponent(TableFoot),
])

Table.propTypes = {
    children: propTypes.oneOfType([
        childPropType,
        propTypes.arrayOf(childPropType),
    ]).isRequired,
}
