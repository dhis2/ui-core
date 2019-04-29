import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import propTypes from 'prop-types'
import css from 'styled-jsx/css'

class DropMenu extends Component {
    componentDidMount() {
        document.addEventListener('click', this.onDocClick)
    }

    componentWillUnmount() {
        document.removeEventListener('click', this.onDocClick)
    }

    onDocClick = evt => {
        if (
            this.elContainer &&
            !this.elContainer.contains(evt.target) &&
            !this.props.stayOpen
        ) {
            this.props.onClose()
        }
    }

    render() {
        const { className, component } = this.props
        return ReactDOM.createPortal(
            <div className={className} ref={c => (this.elContainer = c)}>
                {component}

                <style jsx>{`
                    div {
                        z-index: 1000;
                        position: absolute;
                    }
                `}</style>
            </div>,
            document.body
        )
    }
}

DropMenu.propTypes = {
    className: propTypes.string,

    /** The component to use as the dropdown component */
    component: propTypes.element,
    /** Function to trigger when click happens outside of the DOM element */
    onClose: propTypes.func,
    /** Decides if the menu should call the onClose function or not */
    stayOpen: propTypes.bool,
}

export { DropMenu }
