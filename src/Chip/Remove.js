import React, { PureComponent } from 'react'
import propTypes from 'prop-types'
import css, { resolve } from 'styled-jsx/css'

import { colors } from '../theme'

const removeIcon = resolve`
    svg {
        margin-right: 4px;
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

        if (!onRemove) return

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
