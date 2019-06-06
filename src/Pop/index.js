import { createPortal } from 'react-dom'
import React, { Component, createRef } from 'react'
import propTypes from 'prop-types'
import css from 'styled-jsx/css'
import cx from 'classnames'

import { reactRef } from '../prop-validators/reactRef'
import { BackgroundCover } from './BackgroundCover'
import {
    Content,
    arePositionsEqual,
    getPosition,
    getScrollAndClientOffset,
    propPosition,
} from './helpers'

/**
 * The Pop component is a content container that behaves like a context menu
 * container. It can be used to create multi level context menus that won't be
 * displayed off-screen by wrapping each level with the Pop component.
 */
class Pop extends Component {
    ref = createRef()
    state = { position: {} }

    componentDidMount() {
        this.updatePosition()
        window.addEventListener('resize', this.updatePosition)
    }

    updatePosition = () => {
        if (this.props.open && this.ref.current) {
            const { anchorRef, side } = this.props

            const position = getPosition({
                pop: this.ref.current,
                anchor: anchorRef.current,
                side,
            })

            if (!arePositionsEqual(position, this.state.position)) {
                this.setState({ position })
            }
        }
    }

    render() {
        if (!this.props.open) return null

        const { children, onClose } = this.props
        const { position } = this.state

        return createPortal(
            <div>
                <BackgroundCover onClick={onClose} />

                <Content
                    ref={this.ref}
                    position={position}
                    children={children}
                />

                <style jsx>{`
                    div {
                        left: 0;
                        height: 100%;
                        position: fixed;
                        top: 0;
                        width: 100%;
                        z-index: 2000;
                    }
                `}</style>
            </div>,
            document.body
        )
    }
}

Pop.propTypes = {
    /* Must be created with `React.createRef()` */
    anchorRef: reactRef.isRequired,

    /* Pop will always be centered to the center of the anchor's side */
    side: propTypes.oneOf(['top', 'right', 'bottom', 'left']).isRequired,

    open: propTypes.bool,
    onClose: propTypes.func,
}

export { Pop }
