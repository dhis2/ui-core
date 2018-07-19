import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import computePosition, {
    TOP,
    CENTER,
    BOTTOM,
    LEFT,
    MIDDLE,
    RIGHT,
} from './computePosition';
import './popover.css';

class Popover extends Component {
    constructor(props) {
        super(props);
        this.state = {
            popupComputedStyle: null,
        };
        this.popupRef = null;
    }

    onPopupRendered = ref => {
        this.popupRef = ref;
        this.positionPopup();
    };

    positionPopup() {
        const { getAnchorRef, horizontalAlignment, verticalAlignment } = this.props;
        const triggerEl = ReactDOM.findDOMNode(getAnchorRef());

        if (triggerEl && this.popupRef) {
            this.setState({
                popupComputedStyle: {
                    ...computePosition(
                        this.popupRef,
                        triggerEl,
                        horizontalAlignment,
                        verticalAlignment
                    ),
                    opacity: 1,
                },
            });
        }
    }

    render() {
        const { open, children, closePopover } = this.props;

        if (!open) {
            return null;
        }
        const style = { ...this.props.style, ...this.state.popupComputedStyle };
        return ReactDOM.createPortal(
            <React.Fragment>
                <div className="d2ui-popover-overlay" onClick={closePopover} />
                <div className="d2ui-popover" ref={this.onPopupRendered} style={style}>
                    {children}
                </div>
            </React.Fragment>,
            document.body
        );
    }
}

Popover.propTypes = {
    open: PropTypes.bool.isRequired,
    getAnchorRef: PropTypes.func.isRequired,
    closePopover: PropTypes.func.isRequired,
    style: PropTypes.object,
    children: PropTypes.oneOfType([
        PropTypes.element,
        PropTypes.arrayOf(PropTypes.element),
    ]),
    verticalAlignment: PropTypes.oneOf([TOP, MIDDLE, BOTTOM]),
    horizontalAlignment: PropTypes.oneOf([LEFT, CENTER, RIGHT]),
};

Popover.defaultProps = {
    verticalAlignment: BOTTOM,
    horizontalAlignment: RIGHT,
};

export default Popover;
