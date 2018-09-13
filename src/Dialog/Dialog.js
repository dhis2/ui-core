import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bemClassNames } from '../utils';

const bem = bemClassNames('d2ui-dialog');

class Dialog extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hiding: false,
        };
    }

    componentDidMount() {}

    componentDidUpdate(prevProps, prevState) {}

    componentWillUnmount() {}

    render() {
        return <div className={bem.b()}>TEST</div>;
    }
}

Dialog.propTypes = {};

export default Dialog;
