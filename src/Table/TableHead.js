import { instanceOfComponent } from '@dhis2/prop-types'
import React from 'react'
import css from 'styled-jsx/css'
import propTypes from 'prop-types'

import { Consumer } from './tableContext.js'
import { TableRowHead } from './TableRowHead.js'
import { tableHeadStyles, tableHeadStylesStacked } from './styles.js'

const THeadStatic = ({ children }) => <thead>{children}</thead>

const THeadResponsive = ({ children }) => (
    <thead>
        {children}
        <style jsx>{tableHeadStyles}</style>
        <style jsx>{tableHeadStylesStacked}</style>
    </thead>
)

export const TableHead = ({ children }) => (
    <Consumer>
        {({ stackedLayout }) => {
            const THead = stackedLayout ? THeadResponsive : THeadStatic
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
