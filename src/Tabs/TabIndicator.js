import React, { Component } from 'react';
import PropTypes from 'prop-types';
import bemClassNames from '../utils/bemClassNames';
import './tabindicator.css';

const bem = bemClassNames('d2ui-tab-indicator');

class TabIndicator extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeTabNodeAvailable: false,
        };
    }

    componentDidMount() {
        // Wait until the next tick before getting the node, to make sure
        // attributes such as offsetWidth have been updated to their final values
        setTimeout(() => {
            this.setState({
                activeTabNodeAvailable: Boolean(this.props.getActiveTabRef()),
            });
        }, 1);
    }

    render() {
        let style = null;
        let className;

        if (this.state.activeTabNodeAvailable) {
            const activeTabNode = this.props.getActiveTabRef();
            const translateX = `translateX(${activeTabNode.offsetLeft}px)`;
            const scaleX = `scaleX(${activeTabNode.offsetWidth})`;
            style = { transform: `${translateX} ${scaleX}` };
            className = bem.b();
        } else {
            className = bem.b('hidden');
        }

        return <span className={className} style={style} />;
    }
}

TabIndicator.propTypes = {
    getActiveTabRef: PropTypes.func.isRequired,
};

export default TabIndicator;
