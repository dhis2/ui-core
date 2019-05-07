import React, { Fragment } from 'react'
import { createPortal } from 'react-dom'
import PropTypes from 'prop-types'
import css from 'styled-jsx/css'
import cx from 'classnames'

import { Actions } from './Actions'
import { Content } from './Content'
import { ModalCard } from './ModalCard'
import { ScreenCover } from './ScreenCover'
import { Title } from './Title'

const outerSpacing = 24

/**
 * Modal provides a UI to prompt the user to respond to a question
 * or a note to the user.
 *
 * Use Model with the following Components:
 * Model.Title (optional)
 * Model.Content (required)
 * Model.Actions (required)
 */
export const Modal = ({ children, onClose, small, large }) => {
    return createPortal(
        <div className="modal">
            <ScreenCover onClick={onClose} />

            <ModalCard small={small} large={large}>
                {children}
            </ModalCard>

            <style jsx>{`
                div {
                    height: 100%;
                    left: 0;
                    position: fixed;
                    top: 0;
                    width: 100%;
                    z-index: 99999999;
                }
            `}</style>
        </div>,
        document.body
    )
}

Modal.Title = Title
Modal.Content = Content
Modal.Actions = Actions

Modal.propTypes = {
    // Can contain Modal.Title; Must contain Modal.Content and Modal.Actions
    children: PropTypes.arrayOf(PropTypes.element).isRequired,

    // Callback used when clicking on the screen cover
    onClose: PropTypes.func,

    small: PropTypes.bool,
    large: PropTypes.bool,
}
