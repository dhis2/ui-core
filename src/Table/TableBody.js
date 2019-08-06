import React from 'react'
import css from 'styled-jsx/css'
import propTypes from 'prop-types'
import { instanceOfComponent } from '@dhis2/prop-types'

import { Consumer } from './tableContext.js'
import { TableRow } from './TableRow.js'
import { tableBodyStylesStacked } from './styles.js'

const TBodyStatic = ({ children }) => <tbody>{children}</tbody>

const TBodyStacked = ({ children }) => (
    <tbody>
        {children}
        <style jsx>{tableBodyStylesStacked}</style>
    </tbody>
)

export const TableBody = ({ children }) => (
    <Consumer>
        {({ stackedLayout }) => {
            const TBody = stackedLayout ? TBodyStacked : TBodyStatic
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
