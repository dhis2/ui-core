import React from 'react'
import css from 'styled-jsx/css'

import { Consumer } from './tableContext'

const tableFootStylesResponsive = css`
    @media (max-width: 768px) {
        tfoot {
            display: block;
            margin-top: 16px;
        }
    }

    @media (max-width: 400px) {
        tfoot {
            margin-top: 32px;
        }
    }
`

const TFootStatic = ({ children }) => <tfoot>{children}</tfoot>

const TFootResponsive = ({ children }) => (
    <tfoot>
        {children}
        <style jsx>{tableFootStylesResponsive}</style>
    </tfoot>
)

export const TableFoot = ({ children }) => (
    <Consumer>
        {({ staticLayout }) => {
            const TFoot = staticLayout ? TFootStatic : TFootResponsive
            return <TFoot>{children}</TFoot>
        }}
    </Consumer>
)
