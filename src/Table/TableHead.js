import React from 'react'
import propTypes from 'prop-types'
import css from 'styled-jsx/css'
import { instanceOfComponent } from '@dhis2/prop-types'

import { TableRowHead } from './TableRowHead'

export const TableHead = ({ children }) => <thead>{children}</thead>

const childPropType = instanceOfComponent(TableRowHead)

TableHead.propTypes = {
    children: propTypes.oneOfType([
        childPropType,
        propTypes.arrayOf(childPropType),
    ]).isRequired,
}
