import React from 'react'
import css from 'styled-jsx/css'
import propTypes from 'prop-types'
import { instanceOfComponent } from '@dhis2/prop-types'

import { Consumer } from './tableContext'
import { TableRow } from './TableRow'

const tableBodyStylesResponsive = css`
    @media (max-width: 768px) {
        tbody {
            display: block;
        }
    }
`

const TBodyStatic = ({ children }) => <tbody>{children}</tbody>

const TBodyResponsive = ({ children }) => (
    <tbody>
        {children}
        <style jsx>{tableBodyStylesResponsive}</style>
    </tbody>
)

export const TableBody = ({ children }) => (
    <Consumer>
        {({ responsiveLayout }) => {
            const TBody = responsiveLayout ? TBodyResponsive : TBodyStatic
            return <TBody>{children}</TBody>
        }}
    </Consumer>
)

const childPropType = instanceOfComponent(TableRow)

TableBody.propTypes = {
    children: propTypes.oneOfType([
        childPropType,
        propTypes.arrayOf(childPropType),
    ]).isRequired,
}
