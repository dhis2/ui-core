import React, { PureComponent } from 'react'
import propTypes from 'prop-types'
import { resolve } from 'styled-jsx/css'

import { Cancel } from '../icons/Cancel'
import { colors, spacers } from '../theme.js'

const removeIcon = resolve`
    svg {
        margin-right: ${spacers.dp4};
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

export class Remove extends PureComponent {
    onRemove = e => {
        e.stopPropagation() // stop onRemove from triggering onClick on container
        this.props.onRemove(e)
    }

    render() {
        const onRemove = this.props.onRemove

        if (!onRemove) return null

        return (
            <span onClick={this.onRemove}>
                <Cancel className={removeIcon.className} />
                {removeIcon.styles}
            </span>
        )
    }
}

Remove.propTypes = {
    onRemove: propTypes.func,
}
