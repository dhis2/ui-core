import React, { PureComponent } from 'react'
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

                <style jsx>{containerStyle}</style>
            </span>
        )
    }
}

Remove.propTypes = {
    onRemove: propTypes.func,
}
