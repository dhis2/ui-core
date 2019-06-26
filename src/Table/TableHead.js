import React from 'react'
import css from 'styled-jsx/css'

import { useTableContext } from './tableContext'

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

export const TableHead = ({ children }) => {
    const { staticLayout } = useTableContext()
    const THead = staticLayout ? THeadStatic : THeadResponsive

    return <THead>{children}</THead>
}
