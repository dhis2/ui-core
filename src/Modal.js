import propTypes from '@dhis2/prop-types'
import React from 'react'
import { createPortal } from 'react-dom'

import { sizePropType } from './common-prop-types.js'
import { ScreenCover } from './ScreenCover.js'
import { ModalCard } from './Modal/ModalCard.js'
;('') // TODO: https://github.com/jsdoc/jsdoc/issues/1718

/**
 * @module
 * @param {Modal.PropTypes} props
 * @returns {React.Component}
 *
 * @desc Modal provides a UI to prompt the user to respond to a question
 * or a note to the user.
 *
 * Use Model with the following Components:
 * ModelTitle (optional)
 * ModelContent (required)
 * ModelActions (optional)
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
export const Modal = ({
    children,
    onClose,
    small,
    large,
    className,
    dataTest,
}) =>
    createPortal(
        <ScreenCover onClick={onClose} className={className}>
            <aside data-test={dataTest}>
                <ModalCard small={small} large={large}>
                    {children}
                </ModalCard>
            </aside>
        </ScreenCover>,
        document.body
    )

Modal.defaultProps = {
    dataTest: 'dhis2-uicore-modal',
}

/**
 * @typedef {Object} PropTypes
 * @static
 *
 * @prop {Node} children
 * @prop {string} className
 * @prop {Function} onClose
 * @prop {bool} small
 * @prop {bool} large
 * @prop {string} [dataTest]
 */
Modal.propTypes = {
    children: propTypes.node.isRequired,
    className: propTypes.string,
    dataTest: propTypes.string,
    large: sizePropType,
    small: sizePropType,
    // Callback used when clicking on the screen cover
    onClose: propTypes.func,
}
