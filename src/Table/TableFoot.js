import React from 'react'
import propTypes from 'prop-types'
import css from 'styled-jsx/css'

import { TableRow } from './TableRow'
import { instanceOfComponent } from '../prop-validators/instanceOfComponent'

export const TableFoot = ({ children }) => <tfoot>{children}</tfoot>

const childPropType = instanceOfComponent(TableRow)

TableFoot.propTypes = {
    children: propTypes.oneOfType([
        childPropType,
        propTypes.arrayOf(childPropType),
    ]).isRequired,
}
