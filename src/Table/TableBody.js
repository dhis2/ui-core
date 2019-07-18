import React from 'react'
import css from 'styled-jsx/css'
import propTypes from 'prop-types'

import { Consumer } from './tableContext'
import { TableRow } from './TableRow'
import { instanceOfComponent } from '../prop-validators/instanceOfComponent'

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
        {({ staticLayout }) => {
            const TBody = staticLayout ? TBodyStatic : TBodyResponsive
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
