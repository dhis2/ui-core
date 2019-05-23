import { createPortal } from 'react-dom'
import React, { Component, createRef } from 'react'
import propTypes from 'prop-types'
import css from 'styled-jsx/css'
import cx from 'classnames'

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
        if (this.props.open) {
            this.updatePosition()
        }
    }

    componentDidUpdate() {
        this.updatePosition()
    }

    updatePosition() {
        if (this.ref.current) {
            const {
                anchorRef,
                anchorPoint,
                popPoint,
                fallbackPoints,
            } = this.props

            const position = getPosition({
                popPoint,
                anchorPoint,
                pop: this.ref.current,
                anchor: anchorRef.current,
                isNotRoot: !!this.props.level,
                fallbackPoints,
            })

            if (!arePositionsEqual(position, this.state.position)) {
                this.setState({ position })
            }
        }
    }

    render() {
        const { children, onClose, open, level } = this.props
        const { position } = this.state

        if (!open) return null

        const content = (
            <Content
                ref={this.ref}
                position={position}
                children={children}
                level={level}
            />
        )

        if (!!level) {
            return createPortal(content, document.body)
        }

        return createPortal(
            <div>
                <BackgroundCover onClick={onClose} />

                {content}

                <style jsx>{`
                    div {
                        left: 0;
                        height: 100vh;
                        position: fixed;
                        top: 0;
                        width: 100vw;
                        z-index: ${2000 + level};
                    }
                `}</style>
            </div>,
            document.body
        )
    }
}

Pop.propTypes = {
    /* Needs to be created with `React.createRef()` */
    anchorRef: propTypes.shape({
        current: propTypes.element,
    }).isRequired,

    anchorPoint: propPosition,
    popPoint: propPosition,

    fallbackPoints: propTypes.arrayOf([propTypes.arrayOf([propPosition])]),

    /* Is required for Pop components that are not the root level */
    level: propTypes.number,

    open: propTypes.bool,
    onClose: propTypes.func,
}

Pop.defaultProps = {
    anchorPoint: { vertical: 'top', horizontal: 'right' },
    popPoint: { vertical: 'top', horizontal: 'left' },
    level: 0,
}

export { Pop }
