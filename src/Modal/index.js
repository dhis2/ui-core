import cx from 'classnames'
import propTypes from 'prop-types'
import React from 'react'
import { createPortal } from 'react-dom'

import { sizePropType } from '../common-prop-types'
import { ScreenCover } from '../ScreenCover'
import { Actions } from './Actions'
import { Content } from './Content'
import { ModalCard } from './ModalCard'
import { Title } from './Title'

/**
 * Modal provides a UI to prompt the user to respond to a question
 * or a note to the user.
 *
 * Use Model with the following Components:
 * Model.Title (optional)
 * Model.Content (required)
 * Model.Actions (required)
 */
export const Modal = ({ children, onClose, small, large, open }) => {
    return createPortal(
        <aside className={cx({ open })}>
            <ScreenCover onClick={onClose}>
                <ModalCard small={small} large={large}>
                    {children}
                </ModalCard>
            </ScreenCover>

            <style jsx>{`
                aside {
                    display: none;
                }

                .open {
                    display: block;
                }
            `}</style>
        </aside>,
        document.body
    )
}

Modal.Title = Title
Modal.Content = Content
Modal.Actions = Actions

Modal.propTypes = {
    // Can contain Modal.Title; Must contain Modal.Content and Modal.Actions
    children: propTypes.oneOfType([
        propTypes.element,
        propTypes.arrayOf(propTypes.element),
    ]).isRequired,

    // Callback used when clicking on the screen cover
    onClose: propTypes.func,

    open: propTypes.bool,
    small: sizePropType,
    large: sizePropType,
}
