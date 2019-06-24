import React from 'react'
import css from 'styled-jsx/css'
import propTypes from 'prop-types'
import { instanceOfComponent } from '@dhis2/prop-types'

import { StackedTableRow } from './StackedTableRow.js'

const tableBodyStylesResponsive = css`
    tbody {
        display: block;
    }
`

export const StackedTableBody = ({ children, className }) => (
    <tbody className={className}>
        {children}
        <style jsx>{tableBodyStylesResponsive}</style>
    </tbody>
)

const childPropType = instanceOfComponent(StackedTableRow)

StackedTableBody.propTypes = {
    children: propTypes.oneOfType([
        childPropType,
        propTypes.arrayOf(childPropType),
    ]).isRequired,
    className: propTypes.string,
}
