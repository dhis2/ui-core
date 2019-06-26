import React from 'react'
import css from 'styled-jsx/css'

import { Consumer } from './tableContext'

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
