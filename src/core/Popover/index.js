import React, { Fragment } from 'react'
import { createPortal, findDOMNode } from 'react-dom'
import PropTypes from 'prop-types'
import { withAnimatedClose } from '../../utils'
import computePosition from './computePosition'
import s from './styles'

class Popover extends React.Component {
    state = { style: null }

    elContainer = null
    setElContainer = ref => (this.elContainer = ref)

    componentDidUpdate(prevProps) {
        if (!prevProps.open && this.props.open) {
            this.adjustPosition()
        }
    }

    adjustPosition() {
        let anchorEl = this.props.getAnchorRef()
        if (!(anchorEl instanceof HTMLElement)) {
            anchorEl = findDOMNode(anchorEl)
        }

        if (anchorEl && this.elContainer) {
            this.setState({
                style: computePosition(
                    this.elContainer,
                    anchorEl,
                    this.props.anchorPosition,
                    this.props.popoverPosition
                ),
            })
        }
    }

    className() {
        return s('container', this.props.animation, {
            'animate-out': this.props.isAnimatingOut,
        })
    }

    render() {
        if (!this.props.open && !this.props.isAnimatingOut) {
            return null
        }

        return createPortal(
            <Fragment>
                <div className={s('overlay')} onClick={this.props.onClose} />
                <div
                    ref={this.setElContainer}
                    style={this.state.style}
                    className={this.className()}
                    onAnimationEnd={
                        this.props.isAnimatingOut
                            ? this.props.onAnimationEnd
                            : undefined
                    }
                >
                    {this.props.children}
                </div>
            </Fragment>,
            document.body
        )
    }
}

Popover.defaultProps = {
    animation: 'fade-in',
    anchorPosition: {
        vertical: 'middle',
        horizontal: 'center',
    },
    popoverPosition: {
        vertical: 'middle',
        horizontal: 'center',
    },
}

const positionType = PropTypes.shape({
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
    onClose: PropTypes.func.isRequired,
    children: PropTypes.node,
    anchorPosition: positionType,
    popoverPosition: positionType,
    animation: PropTypes.oneOf(['fade-in', 'slide-down', 'slide-x-y']),
    isAnimatingOut: PropTypes.bool.isRequired,
    onAnimationEnd: PropTypes.func.isRequired,
}

Popover = withAnimatedClose(Popover)

export { Popover }
export default Popover
