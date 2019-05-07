import React, { Fragment } from 'react'
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
export const Modal = ({ children, onClose, size, scrollable }) => {
    return (
        <div className="modal">
            <ScreenCover onClick={onClose} />

            <ModalCard size={size} scrollable={scrollable}>
                {React.Children.map(children, child =>
                    React.cloneElement(child, { scrollable })
                )}
            </ModalCard>

            <style jsx>{`
                .modal {
                    height: 100%;
                    left: 0;
                    position: fixed;
                    top: 0;
                    width: 100%;
                }
            `}</style>
        </div>
    )
}

Modal.Title = Title
Modal.Content = Content
Modal.Actions = Actions

Modal.propTypes = {
    // Can be Modal.Title; Must be Modal.Content and Modal.Actions
    children: PropTypes.arrayOf(PropTypes.element).isRequired,

    // Callback used when clicking on the screen cover
    onClose: PropTypes.func,

    size: PropTypes.oneOf(['small', 'medium', 'large']),

    // Needs to b set in order to make the content scrollable!
    scrollable: PropTypes.bool,
}

Modal.defaultProps = {
    size: 'small',
}
