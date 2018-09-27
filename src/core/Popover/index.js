import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { bemClassNames, withAnimatedClose } from '../../utils';
import computePosition from './computePosition';
import './styles.css';

const bem = bemClassNames('d2ui-popover');

class Popover extends Component {
    constructor(props) {
        super(props);
        this.state = {
            popupComputedStyle: null,
        };
        this.popupRef = null;
    }

    componentDidUpdate(prevProps) {
        if (!prevProps.open && this.props.open) {
            this.positionPopup();
        }
    }

    setPopopRef = ref => (this.popupRef = ref);

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
                    )
                },
            });
            console.log(computePosition(
                this.popupRef,
                triggerEl,
                anchorAttachPoint,
                popoverAttachPoint
            ))
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
        } = this.props;
        const { popupComputedStyle } = this.state;

        console.log('HALLO', this.props);

        if (!open && !isAnimatingOut) {
            return null;
        }

        const animateOutProps = isAnimatingOut
            ? { onAnimationEnd: onAnimationEnd }
            : null;

        return ReactDOM.createPortal(
            <React.Fragment>
                <div className={bem.e('overlay')} onClick={closePopover} />
                <div
                    className={bem.b(animation, { 'animate-out': isAnimatingOut })}
                    ref={this.setPopopRef}
                    style={popupComputedStyle}
                    {...animateOutProps}
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
        PropTypes.oneOf(['top', 'middle', 'bottom']),
    ]).isRequired,
    horizontal: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.oneOf(['left', 'center', 'right']),
    ]).isRequired,
});

Popover.propTypes = {
    open: PropTypes.bool.isRequired,
    getAnchorRef: PropTypes.func.isRequired,
    closePopover: PropTypes.func.isRequired,
    children: PropTypes.node,
    anchorAttachPoint: attachPointPropType,
    popoverAttachPoint: attachPointPropType,
    animation: PropTypes.oneOf(['fade-in', 'slide-down', 'slide-x-y']),
    isAnimatingOut: PropTypes.bool.isRequired,
    onAnimationEnd: PropTypes.func.isRequired,
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
    animation: 'fade-in',
};

// const EnhancedPopover = withAnimatedClose(Popover)
// export { EnhancedPopover as Popover }
// export default withAnimatedClose(EnhancedPopover)

export { Popover }
export default withAnimatedClose(Popover)