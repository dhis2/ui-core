import { instanceOfComponent } from '@dhis2/prop-types'
import React from 'react'
import css from 'styled-jsx/css'
import propTypes from 'prop-types'

import { Consumer } from './tableContext'
import { TableRowHead } from './TableRowHead'
import { colors } from '../theme'

const tableHeadStyles = css`
    thead {
        background: ${colors.grey200};
    }
`

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
        <style jsx>{tableHeadStyles}</style>
        <style jsx>{tableHeadStylesResponsive}</style>
    </thead>
)

export const TableHead = ({ children }) => (
    <Consumer>
        {({ responsiveLayout }) => {
            const THead = responsiveLayout ? THeadResponsive : THeadStatic
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
