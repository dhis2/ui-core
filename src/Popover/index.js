import { createPortal } from 'react-dom'
import React, { Component, createRef } from 'react'
import propTypes from 'prop-types'
import css from 'styled-jsx/css'
import cx from 'classnames'

import { ScreenCover } from '../ScreenCover'
import {
    disableScroll,
    extractBodyStyles,
    setBodyStyles,
    getPosition,
    getScrollAndClientOffset,
} from './helpers'

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

    componentWillUnmount() {
        if (this.props.open || this.props.alwaysOpen) {
            this.enableScroll()
        }
    }

    componentDidUpdate(prevProps) {
        if (prevProps.open !== this.props.open) {
            this.handleScroll()
        }
    }

    handleScroll() {
        if (this.props.open) {
            this.disableScroll()
        } else {
            this.enableScroll()
        }
    }

    extractBodyStyles() {
        const bodyStyles = extractBodyStyles()
        this.setState({ bodyStyles })
    }

    disableScroll() {
        this.extractBodyStyles()
        disableScroll()
    }

    enableScroll() {
        setBodyStyles(this.state.bodyStyles)
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

        const position = getPosition(
            anchorElHorizontal,
            anchorElVertical,
            this.ref.current,
            screencover
        )

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

        const { scrollTop, clientTop } = getScrollAndClientOffset()
        const containerTop = `${scrollTop || clientTop}px`

        /**
         * For whatever reason, when setting "top" with styled-jsx,
         * the calculated value is wrong, so it's set a style directly
         */
        return createPortal(
            <div style={{ top: containerTop }}>
                <ScreenCover withoutBackgroundColor onClick={onClose} />

                {content}

                <style jsx>{`
                    div {
                        left: 0;
                        height: 100vh;
                        position: absolute;
                        top: ${containerTop};
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
