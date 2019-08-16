import React from 'react'
import propTypes from 'prop-types'
import css from 'styled-jsx/css'

import { TableRow } from './TableRow'
import { instanceOfComponent } from '../prop-validators/instanceOfComponent'

export const TableBody = ({ children }) => <tbody>{children}</tbody>

const childPropType = instanceOfComponent(TableRow)

TableBody.propTypes = {
    children: propTypes.oneOfType([
        childPropType,
        propTypes.arrayOf(childPropType),
    ]).isRequired,
}
