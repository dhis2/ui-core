import cx from 'classnames'
import propTypes from 'prop-types'
import React from 'react'
import { createPortal } from 'react-dom'

import { sizePropType } from './common-prop-types.js'
import { ScreenCover } from './ScreenCover.js'

import { Actions } from './Modal/Actions.js'
import { Content } from './Modal/Content.js'
import { ModalCard } from './Modal/ModalCard.js'
import { Title } from './Modal/Title.js'

/**
 * @module
 * @param {Modal.PropTypes} props
 * @returns {React.Component}
 *
 * @example import { Modal } from @dhis2/ui-core
 * @example
 *  <Modal>
 *      <Modal.Title>Hello</Modal.Title>
 *      <Modal.Content>Some content here</Modal.Content>
 *      <Modal.Actions>
 *          <Button primary>My action</Button>
 *      </Modal.Actions>
 *  </Modal>
 *
 * @see Specification: {@link https://github.com/dhis2/design-system/blob/master/molecules/modal.md|Design system}
 * @see Live demo: {@link /demo/?path=/story/modal--small-title-content-action|Storybook}
 */

/* Modal provides a UI to prompt the user to respond to a question
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

/**
 *
 */
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
