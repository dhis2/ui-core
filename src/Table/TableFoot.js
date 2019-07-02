import React from 'react'
import css from 'styled-jsx/css'
import propTypes from 'prop-types'

import { Consumer } from './tableContext'
import { TableRow } from './TableRow'
import { instanceOfComponent } from '../prop-validators/instanceOfComponent'

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

const childPropType = instanceOfComponent(TableRow)

TableFoot.propTypes = {
    children: propTypes.oneOfType([
        childPropType,
        propTypes.arrayOf(childPropType),
    ]).isRequired,
}
