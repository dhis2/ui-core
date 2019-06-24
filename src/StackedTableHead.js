import React from 'react'
import css from 'styled-jsx/css'
import propTypes from 'prop-types'
import { instanceOfComponent } from '@dhis2/prop-types'

import { StackedTableRowHead } from './StackedTableRowHead.js'

const tableHeadStyles = css`
    thead {
        display: none;
    }
`

export const StackedTableHead = ({ children, className }) => (
    <thead className={className}>
        {children}
        <style jsx>{tableHeadStyles}</style>
    </thead>
)

const childPropType = instanceOfComponent(StackedTableRowHead)

StackedTableHead.propTypes = {
    children: propTypes.oneOfType([
        childPropType,
        propTypes.arrayOf(childPropType),
    ]).isRequired,
    className: propTypes.string,
}
