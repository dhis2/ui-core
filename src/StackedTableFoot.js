import React from 'react'
import css from 'styled-jsx/css'
import propTypes from 'prop-types'
import { instanceOfComponent } from '@dhis2/prop-types'

import { StackedTableRow } from './StackedTableRow.js'

const tableFootStyles = css`
    tfoot {
        display: block;
        margin-top: 32px;
    }
`

export const StackedTableFoot = ({ children, className }) => (
    <tfoot className={className}>
        {children}
        <style jsx>{tableFootStyles}</style>
    </tfoot>
)

const childPropType = instanceOfComponent(StackedTableRow)

StackedTableFoot.propTypes = {
    children: propTypes.oneOfType([
        childPropType,
        propTypes.arrayOf(childPropType),
    ]).isRequired,
    className: propTypes.string,
}
