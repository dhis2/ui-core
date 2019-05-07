import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import css, { resolve } from 'styled-jsx/css'
import cx from 'classnames'

import { Card } from '../Card'

const outerSpacing = 24

const cardBoxStyle = resolve`
    .modal-card {
        display: flex;
        height: auto;
        flex-direction: column;
        left: 50%;
        max-width: calc(100vw - ${2 * outerSpacing}px);
        max-height: calc(100vh - ${2 * outerSpacing}px);
        position: absolute;
        top: 50%;
        transform: translate(-50%, -50%);
    }

    .size-small { width: 400px; }
    .size-medium { width: 600px; }
    .size-large { width: 800px; }
`

export const ModalCard = ({ children, scrollable, size }) => {
    console.log('scrollable', scrollable)
    return (
        <Card
            className={cx(cardBoxStyle.className, 'modal-card', `size-${size}`)}
        >
            {children}
            {cardBoxStyle.styles}
        </Card>
    )
}

ModalCard.propTypes = {
    // Can be Modal.Title; Must be Modal.Content and Modal.Actions
    children: PropTypes.arrayOf(PropTypes.element).isRequired,
    size: PropTypes.oneOf(['small', 'medium', 'large']),
    scrollable: PropTypes.bool,
}

ModalCard.defaultProps = {
    size: 'small',
}
