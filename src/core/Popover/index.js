/** @format */

import React, { Component, Fragment } from 'react'
import { findDOMNode, createPortal } from 'react-dom'
import PropTypes from 'prop-types'
import { bemClassNames, withAnimatedClose } from '../../utils'
import computePosition from './computePosition'
import './styles.css'

const bem = bemClassNames('d2ui-popover')

class Popover extends Component {
    state = { positionStyle: null }
    elContainer = null
    setElContainer = ref => (this.elContainer = ref)

    componentDidUpdate(prevProps) {
        if (!prevProps.open && this.props.open) {
            this.adjustPosition()
        }
    }

    adjustPosition() {
        const { getAnchorRef, anchorPosition, popoverPosition } = this.props
        const anchorRef = getAnchorRef()
        // anchorRef can be on an element or a component instance. For components we need to call findDOMNode.
        const triggerEl = anchorRef.nodeType
            ? anchorRef
            : findDOMNode(anchorRef)

        if (triggerEl && this.elContainer) {
            this.setState({
                positionStyle: {
                    ...computePosition(
                        this.elContainer,
                        triggerEl,
                        anchorPosition,
                        popoverPosition
                    ),
                },
            })
        }
    }

    render() {
        const {
            open,
            children,
            closePopover,
            animation,
            isAnimatingOut,
            onAnimationEnd,
        } = this.props
        const { positionStyle } = this.state

        if (!open && !isAnimatingOut) {
            return null
        }

        const animateOutProps = isAnimatingOut
            ? { onAnimationEnd: onAnimationEnd }
            : null

        return createPortal(
            <Fragment>
                <div className={bem.e('overlay')} onClick={closePopover} />
                <div
                    className={bem.b(animation, {
                        'animate-out': isAnimatingOut,
                    })}
                    ref={this.setElContainer}
                    style={positionStyle}
                    {...animateOutProps}
                >
                    {children}
                </div>
            </Fragment>,
            document.body
        )
    }
}

const attachPointPropType = PropTypes.shape({
    vertical: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.oneOf(['top', 'middle', 'bottom']),
    ]).isRequired,
    horizontal: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.oneOf(['left', 'center', 'right']),
    ]).isRequired,
})

Popover.propTypes = {
    open: PropTypes.bool.isRequired,
    getAnchorRef: PropTypes.func.isRequired,
    closePopover: PropTypes.func.isRequired,
    children: PropTypes.node,
    anchorPosition: attachPointPropType,
    popoverPosition: attachPointPropType,
    animation: PropTypes.oneOf(['fade-in', 'slide-down', 'slide-x-y']),
    isAnimatingOut: PropTypes.bool.isRequired,
    onAnimationEnd: PropTypes.func.isRequired,
}

Popover.defaultProps = {
    anchorPosition: {
        vertical: 'middle',
        horizontal: 'center',
    },
    popoverPosition: {
        vertical: 'middle',
        horizontal: 'center',
    },
    animation: 'fade-in',
}

const EnhancedPopover = withAnimatedClose(Popover)

export { EnhancedPopover as Popover }
export default withAnimatedClose(EnhancedPopover)
