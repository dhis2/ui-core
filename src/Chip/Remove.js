import React from 'react'
import propTypes from '@dhis2/prop-types'
import { css, resolve } from 'styled-jsx/css'

import { Cancel } from '../icons/Cancel'
import { colors } from '../theme.js'

const containerStyle = css`
    span {
        display: block;
        height: 18px;
        width: 18px;
        margin-right: 4px;
    }
`

const removeIcon = resolve`
    svg {
        color: ${colors.grey700};
		height: 18px;
		width: 18px;
        cursor: pointer;
        opacity: 1;
        pointer-events: all;
    }

    svg:hover {
        opacity: 0.82;
    }
`

export const Remove = ({ onRemove }) => {
    if (!onRemove) {
        return null
    }

    return (
        <span
            onClick={e => {
                e.stopPropagation() // stop onRemove from triggering onClick on container
                onRemove({}, e)
            }}
        >
            <Cancel className={removeIcon.className} />
            {removeIcon.styles}

            <style jsx>{containerStyle}</style>
        </span>
    )
}

Remove.propTypes = {
    onRemove: propTypes.func,
}
