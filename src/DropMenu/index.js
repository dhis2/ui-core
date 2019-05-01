import React, { PureComponent } from 'react'
import ReactDOM from 'react-dom'
import propTypes from 'prop-types'
import { getPosition } from './getPosition'

class DropMenu extends PureComponent {
    state = {
        top: 'auto',
        left: 'auto',
    }
    elContainer = React.createRef()

    componentDidMount() {
        document.addEventListener('click', this.onDocClick)
        this.setState(getPosition(this.props.anchorRef.current))
    }

    componentWillUnmount() {
        document.removeEventListener('click', this.onDocClick)
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
                        z-index: 1000;
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

DropMenu.propTypes = {
    className: propTypes.string,
    /** The component to use as the dropdown component */
    component: propTypes.element,
    /** Function to trigger when click happens outside of the DOM element */
    onClose: propTypes.func,
    /** Decides if the menu should call the onClose function or not */
    stayOpen: propTypes.bool,
    /** Ref to DOM node to position itself against */
    anchorRef: propTypes.shape({ current: propTypes.instanceOf(Element) }),
}

export { DropMenu }
