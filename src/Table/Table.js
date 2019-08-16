import React from 'react'
import propTypes from 'prop-types'
import css from 'styled-jsx/css'

import { TableBody } from './TableBody'
import { TableFoot } from './TableFoot'
import { TableHead } from './TableHead'
import { instanceOfComponent } from '../prop-validators/instanceOfComponent'

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
export const Table = ({ children }) => (
    <table>
        {children}

        <style jsx>{tableStyles}</style>
    </table>
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
