import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { bemClassNames, withAnimatedClose } from '../utils';
import './dialog.css';
import Paper from '../Paper';

const bem = bemClassNames('d2ui-dialog');
const BODY_SCROLL_DISABLED_CLASS = 'd2ui-scroll-disabled';

class Dialog extends Component {
    componentDidMount() {
        this.updateBodyScroll();
    }

    componentDidUpdate() {
        this.updateBodyScroll();
    }

    componentWillUnmount() {
        this.updateBodyScroll(true);
    }

    onBackdropClick = () => {
        const { dismissible, closeHandler } = this.props;
        dismissible && closeHandler && closeHandler();
    };

    updateBodyScroll(forceOff) {
        const { open, isAnimatingOut } = this.props;
        if (forceOff || (!open && !isAnimatingOut)) {
            document.body.classList.remove(BODY_SCROLL_DISABLED_CLASS);
        } else {
            document.body.classList.add(BODY_SCROLL_DISABLED_CLASS);
        }
    }

    renderTitle() {
        const { title } = this.props;

        if (!title) {
            return null;
        }

        const isText = ['string', 'number'].includes(typeof title);

        return (
            <header className={bem.e('title')}>
                {isText ? <h6>{title}</h6> : title}
            </header>
        );
    }

    renderFooter() {
        const { actions } = this.props;

        if (React.Children.count(actions) === 0) {
            return null;
        }

        return (
            <footer className={bem.e('footer')}>{React.Children.toArray(actions)}</footer>
        );
    }

    render() {
        const { size, content, open, isAnimatingOut, onAnimationEnd } = this.props;

        if (!open && !isAnimatingOut) {
            return null;
        }

        const animateOutClass = { 'animate-out': isAnimatingOut };
        const animateOutProps = isAnimatingOut
            ? { onAnimationEnd: onAnimationEnd }
            : null;

        return ReactDOM.createPortal(
            <div className={bem.b()}>
                <div
                    className={bem.e('backdrop', animateOutClass)}
                    onClick={this.onBackdropClick}
                    {...animateOutProps}
                />
                <div className={bem.e('window', size, animateOutClass)}>
                    <Paper elevation={24}>
                        {this.renderTitle()}
                        <section className={bem.e('content')}>{content}</section>
                        {this.renderFooter()}
                    </Paper>
                </div>
            </div>,
            document.body
        );
    }
}

Dialog.propTypes = {
    open: PropTypes.bool,
    title: PropTypes.node,
    content: PropTypes.node,
    actions: PropTypes.node,
    size: PropTypes.oneOf(['small', 'medium', 'large', 'fullscreen']),
    dismissible: PropTypes.bool,
    closeHandler: (props, propName, componentName) => {
        if (props.dismissible && typeof props[propName] !== 'function') {
            return new Error(
                `Invalid combination of props: A dismissible ${componentName} component needs a ${propName} in order for it to close itself.`
            );
        }
    },
    isAnimatingOut: PropTypes.bool.isRequired,
    onAnimationEnd: PropTypes.func.isRequired,
};

Dialog.defaultProps = {
    size: 'medium',
    dismissible: true,
};

export default withAnimatedClose(Dialog, {});
