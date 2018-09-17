import React, { Component } from 'react';
/**
 * This HOC adds a "isAnimatingOut" (bool) and "onAnimationEnd" (fn) property
 * to a wrapped component. The "isAnimatingOut" can be used to add a CSS class
 * based keyframe animation to hide a component before it is removed from the DOM.
 * This HOC makes quite a few assumptions about the wrapped component, so won't be
 * suitable for any given situation:
 * 1. It has an "open" property which is used to toggle visiblity.
 * 2. It renders content if `open || isAnimatingOut` is true
 * 3. It adds some CSS class to an element if isAnimatingOut is true.
 * 4. This CSS class has a keyframe animation attached to it
 * 5. The animated element to wait for has an "onAnimationEnd" property with the
 *    callback from the HOC
 */
export default function(WrappedComponent) {
    return class AnimatedClose extends Component {
        constructor(props) {
            super(props);
            this.state = { isAnimatingOut: false };
        }

        shouldComponentUpdate(nextProps) {
            if (!nextProps.open && this.props.open && !this.state.isAnimatingOut) {
                this.onAnimationStart();
                return false;
            }

            return true;
        }

        onAnimationStart() {
            this.setState({ isAnimatingOut: true });
        }

        onAnimationEnd = () => {
            this.setState({ isAnimatingOut: false });
        };

        render() {
            return (
                <WrappedComponent
                    {...this.props}
                    isAnimatingOut={this.state.isAnimatingOut}
                    onAnimationEnd={this.onAnimationEnd}
                />
            );
        }
    };
}
