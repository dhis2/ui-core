import React from 'react'
import { resolve } from 'styled-jsx/css'
import { colors } from '../theme.js'

export const iconStyle = resolve`
    svg {
        width: 24px;
        height: 24px;
        margin-right: 8px;
    }
`

export const iconStyleDefault = resolve`
    svg {
        fill: ${colors.grey700};
    }
`

export const iconStyleValid = resolve`
    svg {
        fill: ${colors.blue600};
    }
`

export const iconStyleWarning = resolve`
    svg {
        fill: ${colors.yellow500};
    }
`

export const iconStyleError = resolve`
    svg {
        fill: ${colors.red500};
    }
`
