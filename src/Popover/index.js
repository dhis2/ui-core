import { createPortal } from 'react-dom'
import React, { Component, createRef } from 'react'
import propTypes from 'prop-types'
import css from 'styled-jsx/css'
import cx from 'classnames'

import { ScreenCover } from '../ScreenCover'

const CONTENT_MIN_HEIGHT = 200

const getScrollAndClientOffset = () => {
    const body = document.body
    const docEl = document.documentElement

    return {
        scrollTop: window.pageYOffset || docEl.scrollTop || body.scrollTop,
        scrollLeft: window.pageXOffset || docEl.scrollLeft || body.scrollLeft,
        clientTop: docEl.clientTop || body.clientTop || 0,
        clientLeft: docEl.clientLeft || body.clientLeft || 0,
    }
}

const getPosition = (
    anchorHorizontal,
    anchorVertical,
    popover,
    hasScreencover
) => {
    if (!anchorHorizontal || !anchorVertical || !popover) {
        return { left: 0, top: 0 }
    }

    const styles = {}
    const viewportWidth = window.innerWidth
    const viewportHeight = window.innerHeight
    const { scrollTop, clientTop } = getScrollAndClientOffset()

    const anchorRectHorizontal = anchorHorizontal.getBoundingClientRect()
    const anchorRectVertical = anchorVertical.getBoundingClientRect()
    const popoverRect = popover.getBoundingClientRect()

    const leftOffset = anchorRectHorizontal.x + anchorRectHorizontal.width
    const rightOffset = anchorRectHorizontal.x - popoverRect.width

    const fitsToTheLeft = viewportWidth - leftOffset - popoverRect.width > 0
    const fitsToTheRight = rightOffset > 0
    const fitsToTheTop =
        viewportHeight - anchorRectHorizontal.y > popoverRect.height

    const left = fitsToTheLeft ? leftOffset : rightOffset

    styles.left = left + 'px'

    if (fitsToTheTop) {
        if (hasScreencover) {
            styles.top = (scrollTop || clientTop) + anchorRectVertical.y + 'px'
        } else {
            styles.top = anchorRectVertical.y + 'px'
        }

        styles.bottom = 'auto'
    } else {
        styles.bottom = 0
        styles.top = 'auto'
    }

    return styles
}

const Content = React.forwardRef(({ children, position, level }, ref) => (
    <div ref={ref} style={position}>
        {children}

        <style jsx>{`
            div {
                background: white;
                box-shadow: 0 0 3px rgba(0, 0, 0, 0.6);
                max-height: 100vh;
                overflow-y: auto;
                position: absolute;
                z-index: ${level + 99999999 || 1};
            }
        `}</style>
    </div>
))

/**
 * This popover is a content container that behaves like a context menu
 * container. It can be used to create multi level context menus that
 * won't be displayed off-screen by wrapping each level with the Popover
 * component.
 */
class Popover extends Component {
    ref = React.createRef()

    componentDidMount() {
        if (this.props.alwaysOpen || this.props.open) {
            this.disableScroll()
        }
    }

    componentDidUpdate(prevProps) {
        if (prevProps.open !== this.props.open) this.handleScroll()
    }

    extractBodyStyles() {
        const overflowX = document.body.style.overflowX
        const overflowY = document.body.style.overflowY
        const overflow = document.body.style.overflow

        this.setState({ overflowX, overflowY, overflow })
    }

    handleScroll() {
        if (this.props.open) {
            this.disableScroll()
        } else {
            this.enableScroll()
        }
    }

    disableScroll() {
        this.extractBodyStyles()
        document.body.style.overflow = 'hidden'
        document.body.style.overflowX = 'hidden'
        document.body.style.overflowY = 'hidden'
    }

    enableScroll() {
        document.body.style.overflow = this.state.overflow
        document.body.style.overflowX = this.state.overflowX
        document.body.style.overflowY = this.state.overflowY
    }

    render() {
        const {
            alwaysOpen,
            anchorElHorizontal,
            anchorElVertical,
            children,
            onClose,
            open,
            screencover,
        } = this.props

        if (!open && !alwaysOpen) return null

        const { scrollTop, clientTop } = getScrollAndClientOffset()
        const position = getPosition(
            anchorElHorizontal,
            anchorElVertical,
            this.ref.current,
            screencover
        )

        const containerTop = `${scrollTop || clientTop}px`
        const containerHeight = '100vh'
        const containerWidth = '100vw'

        if (!screencover) {
            return createPortal(
                <Content
                    ref={this.ref}
                    position={position}
                    children={children}
                    level={this.props.level}
                />,
                document.body
            )
        }

        return createPortal(
            <div
                style={{
                    top: containerTop,
                    height: containerHeight,
                    width: containerWidth,
                }}
            >
                {screencover && (
                    <ScreenCover withoutBackgroundColor onClick={onClose} />
                )}

                <Content
                    ref={this.ref}
                    position={position}
                    children={children}
                />

                <style jsx>{`
                    div {
                        left: 0;
                        position: absolute;
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
    anchorElHorizontal: propTypes.element.isRequired,
    anchorElVertical: propTypes.element.isRequired,

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
