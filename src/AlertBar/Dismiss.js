import React from 'react'
import propTypes from 'prop-types'
import { spacers } from '../theme.js'
import { Close } from '../icons/Close'

const Dismiss = ({ onClick }) => (
    <div onClick={onClick}>
        <Close />
        <style jsx>{`
            div {
                margin-left: ${spacers.dp24};
            }
            div:hover {
                cursor: pointer;
            }
            div :global(svg) {
                width: 18px;
                height: 18px;
            }
        `}</style>
    </div>
)

Dismiss.propTypes = {
    onClick: propTypes.func.isRequired,
}

export { Dismiss }
