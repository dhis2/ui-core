import { createPortal } from 'react-dom'
import React, { Component, createRef } from 'react'
import propTypes from 'prop-types'
import css from 'styled-jsx/css'
import cx from 'classnames'

import { ScreenCover } from '../ScreenCover'
import { Content, getPosition, getScrollAndClientOffset } from './helpers'

/**
 * This popover is a content container that behaves like a context menu
 * container. It can be used to create multi level context menus that
 * won't be displayed off-screen by wrapping each level with the Popover
 * component.
 */
class Popover extends Component {
    ref = React.createRef()

    componentDidUpdate(prevProps) {
        if (prevProps.open !== this.props.open) {
            // Weird hack.. please help?
            // needs to be done so this component can use it's own reference
            this.forceUpdate()
        }
    }

    render() {
        const {
            alwaysOpen,
            anchorEl,
            children,
            onClose,
            open,
            screencover,
        } = this.props

        if (!open && !alwaysOpen) return null

        const position = getPosition(anchorEl, this.ref.current, screencover)

        const content = (
            <Content
                ref={this.ref}
                position={position}
                children={children}
                level={this.props.level}
            />
        )

        if (!screencover) {
            return createPortal(content, document.body)
        }

        return createPortal(
            <div>
                <ScreenCover withoutBackgroundColor onClick={onClose} />

                {content}

                <style jsx>{`
                    div {
                        left: 0;
                        height: 100vh;
                        position: fixed;
                        top: 0;
                        width: 100vw;
                        z-index: ${99999999 + this.props.level};
                    }
                `}</style>
            </div>,
            document.body
        )
    }
}

Popover.propTypes = {
    /* Element the popover should be positioned against */
    anchorEl: propTypes.element.isRequired,

    screencover: propTypes.bool,
    level: propTypes.number,
    open: propTypes.bool,
    alwaysOpen: propTypes.bool,
    onClose: propTypes.func,
}

Popover.defaultProps = {
    level: 0,
}

export { Popover }
