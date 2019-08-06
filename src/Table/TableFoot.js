import { instanceOfComponent } from '@dhis2/prop-types'
import React from 'react'
import css from 'styled-jsx/css'
import propTypes from 'prop-types'

import { Consumer } from './tableContext.js'
import { TableRow } from './TableRow.js'
import { tableFootStylesStacked } from './styles.js'

const TFootStatic = ({ children }) => <tfoot>{children}</tfoot>

const TFootStacked = ({ children }) => (
    <tfoot>
        {children}
        <style jsx>{tableFootStylesStacked}</style>
    </tfoot>
)

export const TableFoot = ({ children }) => (
    <Consumer>
        {({ stackedLayout }) => {
            const TFoot = stackedLayout ? TFootStacked : TFootStatic
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
