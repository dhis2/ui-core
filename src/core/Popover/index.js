/** @format */

import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import { bemClassNames } from '../../utils'
import computePosition from './computePosition'
import './styles.css'

const bem = bemClassNames('popover')

class Popover extends Component {
    state = {
        style: null,
    }

    elContainer = null
    onRender = ref => {
        this.elContainer = ref
        this.adjustPosition()
    }

    adjustPosition() {
        const { anchorPosition, popoverPosition } = this.props
        const anchorEl = ReactDOM.findDOMNode(this.props.getAnchorRef())

        if (anchorEl && this.elContainer) {
            this.setState({
                style: computePosition(
                    this.elContainer,
                    anchorEl,
                    anchorPosition,
                    popoverPosition
                ),
            })
        }
    }

    render() {
        if (!this.props.open) {
            return null
        }

        const { closePopover, appearAnimation } = this.props

        return ReactDOM.createPortal(
            <React.Fragment>
                <div className={bem.e('overlay')} onClick={closePopover} />
                <div
                    ref={this.onRender}
                    className={bem.b(appearAnimation)}
                    style={this.state.style}
                >
                    {this.props.children}
                </div>
            </React.Fragment>,
            document.body
        )
    }
}

const position = PropTypes.shape({
    horizontal: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.oneOf(['left', 'center', 'right']),
    ]).isRequired,
    vertical: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.oneOf(['top', 'middle', 'bottom']),
    ]).isRequired,
})

Popover.propTypes = {
    open: PropTypes.bool.isRequired,
    getAnchorRef: PropTypes.func.isRequired,
    closePopover: PropTypes.func.isRequired,
    children: PropTypes.node,
    anchorPosition: position,
    popoverPosition: position,
    animation: PropTypes.oneOf(['fade-in', 'slide-down', 'slide-x-y']),
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

export { Popover }
export default Popover
