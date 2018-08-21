import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { bemClassNames } from '../../utils';
import computePosition, {
    TOP,
    CENTER,
    BOTTOM,
    LEFT,
    MIDDLE,
    RIGHT,
} from './computePosition';
import './popover.css';

const bem = bemClassNames('d2ui-popover');

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
        const { getAnchorRef, anchorAttachPoint, popoverAttachPoint } = this.props;
        const triggerEl = ReactDOM.findDOMNode(getAnchorRef());

        if (triggerEl && this.popupRef) {
            this.setState({
                popupComputedStyle: {
                    ...computePosition(
                        this.popupRef,
                        triggerEl,
                        anchorAttachPoint,
                        popoverAttachPoint
                    ),
                    opacity: 1,
                },
            });
        }
    }

    render() {
        const { open, children, closePopover } = this.props;
        const { popupComputedStyle } = this.state;

        if (!open) {
            return null;
        }
        return ReactDOM.createPortal(
            <React.Fragment>
                <div className={bem.e('overlay')} onClick={closePopover} />
                <div
                    className={bem.b()}
                    ref={this.onPopupRendered}
                    style={popupComputedStyle}
                >
                    {children}
                </div>
            </React.Fragment>,
            document.body
        );
    }
}

const attachPointPropType = PropTypes.shape({
    vertical: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.oneOf([TOP, MIDDLE, BOTTOM]),
    ]).isRequired,
    horizontal: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.oneOf([LEFT, CENTER, RIGHT]),
    ]).isRequired,
});

Popover.propTypes = {
    open: PropTypes.bool.isRequired,
    getAnchorRef: PropTypes.func.isRequired,
    closePopover: PropTypes.func.isRequired,
    children: PropTypes.node,
    anchorAttachPoint: attachPointPropType,
    popoverAttachPoint: attachPointPropType,
};

Popover.defaultProps = {
    anchorAttachPoint: {
        vertical: 'middle',
        horizontal: 'center',
    },
    popoverAttachPoint: {
        vertical: 'middle',
        horizontal: 'center',
    },
};

export default Popover;
