import { createPortal } from 'react-dom'
import React, { Component, createRef } from 'react'
import propTypes from 'prop-types'
import css from 'styled-jsx/css'
import cx from 'classnames'

import { ScreenCover } from '../ScreenCover'
import {
    Content,
    arePositionsEqual,
    getPosition,
    getScrollAndClientOffset,
} from './helpers'

/**
 * This popover is a content container that behaves like a context menu
 * container. It can be used to create multi level context menus that
 * won't be displayed off-screen by wrapping each level with the Popover
 * component.
 */
class Popover extends Component {
    ref = createRef()
    state = { position: {} }

    componentDidMount() {
        if (this.props.open) {
            this.updatePosition()
        }
    }

    componentDidUpdate() {
        this.updatePosition()
    }

    updatePosition() {
        if (this.ref.current) {
            const position = getPosition(
                this.props.anchorRef.current,
                this.ref.current,
                this.props.screencover
            )

            if (!arePositionsEqual(position, this.state.position)) {
                this.setState({ position })
            }
        }
    }

    render() {
        const { children, onClose, open, screencover } = this.props

        if (!open) return null

        const content = (
            <Content
                ref={this.ref}
                position={this.state.position}
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
    /* Needs to be created with `React.createRef()` */
    anchorRef: propTypes.shape({
        current: propTypes.element,
    }).isRequired,

    screencover: propTypes.bool,
    level: propTypes.number,
    open: propTypes.bool,
    onClose: propTypes.func,
}

Popover.defaultProps = {
    level: 0,
}

export { Popover }
