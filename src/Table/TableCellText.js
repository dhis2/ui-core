import React from 'react'
import propTypes from 'prop-types'
import css from 'styled-jsx/css'

import { Consumer } from './tableContext.js'
import { tableCellTextStyles, tableCellTextStylesStacked } from './styles.js'

const TableCellTextStatic = ({ children }) => (
    <span>
        {children}
        <style jsx>{tableCellTextStyles}</style>
    </span>
)

const TableCellTextStacked = ({ children }) => (
    <span>
        {children}
        <style jsx>{tableCellTextStyles}</style>
        <style jsx>{tableCellTextStylesStacked}</style>
    </span>
)

export const TableCellText = ({ children }) => (
    <Consumer>
        {({ stackedLayout }) => {
            const TableCellTextComponent = stackedLayout
                ? TableCellTextStacked
                : TableCellTextStatic

            return <TableCellTextComponent children={children} />
        }}
    </Consumer>
)

TableCellText.propTypes = {
    children: propTypes.node,
}
