import { createPortal } from 'react-dom'
import React, { Component, createRef } from 'react'
import propTypes from 'prop-types'

import { reactRef } from './prop-validators/reactRef'
import { Content } from './Popover/Content'
import { arePositionsEqual, getPosition } from './Popover/helpers'

class Popover extends Component {
    ref = createRef()
    state = {
        position: {},
        adjustment: {},
    }

    componentDidMount() {
        document.addEventListener('click', this.onDocClick)
        window.addEventListener('resize', this.updatePosition)

        this.updatePosition()
    }

    componentWillUnmount() {
        document.removeEventListener('click', this.onDocClick)
        window.removeEventListener('resize', this.updatePosition)
    }

    onDocClick = evt => {
        if (this.ref.current && !this.ref.current.contains(evt.target)) {
            this.props.onClose()
        }
    }

    updatePosition = () => {
        if (this.props.open && this.ref.current) {
            const { anchorRef, side, spacing } = this.props

            const [position, adjustment] = getPosition({
                pop: this.ref.current,
                anchor: anchorRef.current,
                side,
                spacing,
            })

            if (!arePositionsEqual(position, this.state.position)) {
                this.setState({ position, adjustment })
            }
        }
    }

    render() {
        if (!this.props.open) return null

        const { side, children, noArrow } = this.props
        const { position, adjustment } = this.state

        return createPortal(
            <Content
                ref={this.ref}
                side={side}
                position={position}
                noArrow={noArrow}
                adjustment={adjustment}
            >
                {children}
            </Content>,
            document.body
        )
    }
}

Popover.propTypes = {
    children: propTypes.oneOfTypes([
        propTypes.element,
        propTypes.arrayOf(propTypes.element),
    ]).isRequired,

    /**
     * Must be created with `React.createRef()`
     */
    anchorRef: reactRef.isRequired,

    /**
     * Popover will always be centered to the center of the anchor's side
     */
    side: propTypes.oneOf(['top', 'right', 'bottom', 'left']).isRequired,

    /**
     * When false, the component will return null, effectively rendering nothing
     */
    open: propTypes.bool.isRequired,

    /**
     * This callback will only be called when clicking on the backdrop
     */
    onClose: propTypes.func.isRequired,

    /**
     * Spacing between anchor and pop in pixels
     */
    spacing: propTypes.number,

    /**
     * Will remove the triangular arrow icon to the opposite side of "props.side"
     */
    noArrow: propTypes.bool,
}

Popover.defaultProps = {
    spacing: 0,
    side: 'top',
}

export { Popover }
