import React from 'react'
import propTypes from 'prop-types'
import css from 'styled-jsx/css'

import { TableRowHead } from './TableRowHead'
import { instanceOfComponent } from '../prop-validators/instanceOfComponent'

export const TableHead = ({ children }) => <thead>{children}</thead>

const childPropType = instanceOfComponent(TableRowHead)

TableHead.propTypes = {
    children: propTypes.oneOfType([
        childPropType,
        propTypes.arrayOf(childPropType),
    ]).isRequired,
}
