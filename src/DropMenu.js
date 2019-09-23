import React, { PureComponent } from 'react'
import ReactDOM from 'react-dom'
import propTypes from '@dhis2/prop-types'

import { getPosition } from './DropMenu/getPosition'
import { layers } from './theme.js'

/**
 * @module
 * @param {DropMenu.PropTypes} props
 * @returns {React.PureComponent}
 * @example import { DropMenu } from @dhis2/ui-core
 */
class DropMenu extends PureComponent {
    state = {
        top: 'auto',
        left: 'auto',
    }
    elContainer = React.createRef()

    componentDidMount() {
        document.addEventListener('click', this.onDocClick)
        window.addEventListener('resize', this.updatePosition)
        this.updatePosition()
    }

    componentWillUnmount() {
        document.removeEventListener('click', this.onDocClick)
        window.removeEventListener('resize', this.updatePosition)
    }

    updatePosition = () => {
        this.setState(getPosition(this.props.anchorEl))
    }

    onDocClick = evt => {
        if (
            this.elContainer.current &&
            !this.elContainer.current.contains(evt.target) &&
            !this.props.stayOpen
        ) {
            this.props.onClose()
        }
    }

    render() {
        const { className, component } = this.props
        const { top, left } = this.state

        return ReactDOM.createPortal(
            <div className={className} ref={this.elContainer}>
                {component}

                <style jsx>{`
                    div {
                        z-index: ${layers.applicationTop};
                        position: absolute;
                        top: ${top};
                        left: ${left};
                    }
                `}</style>
            </div>,
            document.body
        )
    }
}

/**
 * @typedef {Object} PropTypes
 * @static
 * @prop {string} [className]
 * @prop {Element} [component] - The element to show as the dropdown
 * @prop {function} [onClose] - Function to trigger when click happens outside of the DOM element
 * @prop {boolean} [stayOpen] - Decides if the menu should call the onClose function or not
 * @prop {Object} [anchorEl] - DOM node to position itself against,
 * needs to have the `getBoundingClientRect` function on its
 * `prototype`.
 */
DropMenu.propTypes = {
    className: propTypes.string,
    component: propTypes.element,
    onClose: propTypes.func,
    stayOpen: propTypes.bool,
    /**  */
    anchorEl: propTypes.shape({
        getBoundingClientRect: propTypes.func.isRequired,
    }),
}

export { DropMenu }
