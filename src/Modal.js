import cx from 'classnames'
import propTypes from '@dhis2/prop-types'
import React from 'react'
import { createPortal } from 'react-dom'

import { sizePropType } from './common-prop-types.js'
import { ScreenCover } from './ScreenCover.js'

import { ModalCard } from './Modal/ModalCard.js'

/**
 * Modal provides a UI to prompt the user to respond to a question
 * or a note to the user.
 *
 * Use Model with the following Components:
 * ModelTitle (optional)
 * ModelContent (required)
 * ModelActions (required)
 * @module
 * @param {Modal.PropTypes} props
 * @returns {React.Component}
 *
 * @example import { Modal } from @dhis2/ui-core
 * @example
 *  <Modal>
 *      <ModalTitle>Hello</ModalTitle>
 *      <ModalContent>Some content here</ModalContent>
 *      <ModalActions>
 *          <Button primary>My action</Button>
 *      </ModalActions>
 *  </Modal>
 *
 * @see Specification: {@link https://github.com/dhis2/design-system/blob/master/molecules/modal.md|Design system}
 * @see Live demo: {@link /demo/?path=/story/modal--small-title-content-action|Storybook}
 */
export const Modal = ({ children, onClose, small, large, open, className }) => {
    return createPortal(
        <aside className={cx(className, { open })}>
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

/**
 * @typedef {Object} PropTypes
 * @static
 *
 * @prop {Node} children
 * @prop {string} className
 * @prop {Function} onClose
 * @prop {bool} open
 * @prop {bool} small
 * @prop {bool} large
 */
Modal.propTypes = {
    // Can contain ModalTitle; Must contain ModalContent and ModalActions
    children: propTypes.oneOfType([
        propTypes.element,
        propTypes.arrayOf(propTypes.element),
    ]).isRequired,

    className: propTypes.string,

    // Callback used when clicking on the screen cover
    onClose: propTypes.func,

    open: propTypes.bool,
    small: sizePropType,
    large: sizePropType,
}
