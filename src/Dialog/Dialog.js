import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { bemClassNames } from '../utils';
import './dialog.css';
import Paper from '../Paper';

const bem = bemClassNames('d2ui-dialog');

class Dialog extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hidden: false,
        };
        this.backdropRef = null;
        this.dialogWindowRef = null;
    }

    componentDidMount() {}

    componentDidUpdate(prevProps, prevState) {
        console.log('open was: ', prevProps.open, ' and now is: ', this.props.open);
        console.log('hidden was: ', prevState.hidden, ' and now is: ', this.state.hidden);
    }

    componentWillUnmount() {}

    setDialogWindowRef = node => (this.dialogWindowRef = node);
    setBackdropRef = node => (this.dialogWindowRef = node);

    onBackdropClick = () => {
        const { dismissible, closeHandler } = this.props;
        if (dismissible) {
            this.setState({ hidden: true });
            closeHandler && closeHandler();
        }
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
        const { hidden } = this.state;

        if (!open || hidden) {
            return null;
        }

        console.log('render');

        return ReactDOM.createPortal(
            <div className={bem.b()}>
                <div
                    className={bem.e('backdrop')}
                    ref={this.setBackdropRef}
                    onClick={this.onBackdropClick}
                />
                <div className={bem.e('window', size)} ref={this.setDialogWindowRef}>
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
    closeHandler: PropTypes.func, // Not providing this will make the dialog mandatory
};

Dialog.defaultProps = {
    size: 'medium',
    dismissible: true,
};

export default Dialog;
