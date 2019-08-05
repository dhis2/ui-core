import React from 'react'
import css from 'styled-jsx/css'
import propTypes from 'prop-types'
import { instanceOfComponent } from '@dhis2/prop-types'

import { Consumer } from './tableContext'
import { TableRowHead } from './TableRowHead'

const tableHeadStylesResponsive = css`
    @media (max-width: 768px) {
        thead {
            display: none;
        }
    }
`

const THeadStatic = ({ children }) => <thead>{children}</thead>

const THeadResponsive = ({ children }) => (
    <thead>
        {children}
        <style jsx>{tableHeadStylesResponsive}</style>
    </thead>
)

export const TableHead = ({ children }) => (
    <Consumer>
        {({ staticLayout }) => {
            const THead = staticLayout ? THeadStatic : THeadResponsive
            return <THead>{children}</THead>
        }}
    </Consumer>
)

const childPropType = instanceOfComponent(TableRowHead)

TableHead.propTypes = {
    children: propTypes.oneOfType([
        childPropType,
        propTypes.arrayOf(childPropType),
    ]).isRequired,
}
