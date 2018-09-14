import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { bemClassNames } from '../utils';
import './dialog.css';
import Paper from '../Paper';

const bem = bemClassNames('d2ui-dialog');
const BODY_SCROLL_DISABLED_CLASS = 'd2ui-scroll-disabled';

class Dialog extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isAnimatingOut: false,
        };
    }

    componentDidMount() {
        this.updateBodyScroll();
    }

    shouldComponentUpdate(nextProps) {
        if (!nextProps.open && this.props.open && !this.state.isAnimatingOut) {
            this.animateOut();
            return false;
        }

        return true;
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
        if (forceOff || (!this.props.open && !this.state.isAnimatingOut)) {
            document.body.classList.remove(BODY_SCROLL_DISABLED_CLASS);
        } else {
            document.body.classList.add(BODY_SCROLL_DISABLED_CLASS);
        }
    }

    animateOut() {
        this.setState({ isAnimatingOut: true });
    }

    animationEndHandler = () => {
        this.updateBodyScroll();
        this.setState({ isAnimatingOut: false });
    };

    renderTitle() {
        const { title } = this.props;

        if (!title) {
            return null;
        }

        const isText = ['string', 'number'].includes(typeof title);

        return <div className={bem.e('title')}>{isText ? <h4>{title}</h4> : title}</div>;
    }

    renderFooter() {
        const { actions } = this.props;

        if (React.Children.count(actions) === 0) {
            return null;
        }

        return <div className={bem.e('footer')}>{React.Children.toArray(actions)}</div>;
    }

    render() {
        const { size, content, open } = this.props;
        const { isAnimatingOut } = this.state;

        if (!open && !isAnimatingOut) {
            return null;
        }

        const animateOutClass = { 'animate-out': isAnimatingOut };
        const animateOutProps = isAnimatingOut
            ? { onAnimationEnd: this.animationEndHandler }
            : null;

        return ReactDOM.createPortal(
            <div className={bem.b()}>
                <div
                    className={bem.e('backdrop', animateOutClass)}
                    onClick={this.onBackdropClick}
                    {...animateOutProps}
                />
                <div className={bem.e('window', size, animateOutClass)}>
                    <Paper elevation={12}>
                        {this.renderTitle()}
                        <div className={bem.e('content')}>{content}</div>
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
};

Dialog.defaultProps = {
    size: 'medium',
    dismissible: true,
};

export default Dialog;
