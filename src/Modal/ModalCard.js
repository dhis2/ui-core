import cx from 'classnames'
import propTypes from 'prop-types'
import React from 'react'
import { resolve } from 'styled-jsx/css'

import { Card } from '../Card'
import { sizePropType } from '../common-prop-types'
import { spacers } from '../theme.js'

const cardBoxStyle = resolve`
    .modal-card {
        display: flex;
        height: auto;
        max-height: 95vh;
        flex-direction: column;
        left: 50%;
        max-width: calc(100vw - ${2 * spacers.dp24}px);
        max-height: calc(100vh - ${2 * spacers.dp24}px);
        position: absolute;
        top: 50%;
        transform: translate(-50%, -50%);
        width: 600px;
    }

    .small { width: 400px; }
    .large { width: 800px; }
`

export const ModalCard = ({ children, small, large }) => {
    return (
        <Card
            className={cx(cardBoxStyle.className, 'modal-card', {
                small,
                large,
            })}
        >
            {children}
            {cardBoxStyle.styles}
        </Card>
    )
}

ModalCard.propTypes = {
    // Can be Modal.Title; Must be Modal.Content and Modal.Actions
    children: propTypes.oneOfType([
        propTypes.element,
        propTypes.arrayOf(propTypes.element),
    ]).isRequired,
    small: sizePropType,
    large: sizePropType,
}
