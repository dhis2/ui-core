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
        this.renderCount = 0;
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

    getTransformStyle() {
        const activeTabNode = this.props.getActiveTabRef();
        const translateX = `translateX(${activeTabNode.offsetLeft}px)`;
        const scaleX = `scaleX(${activeTabNode.offsetWidth})`;
        return { transform: `${translateX} ${scaleX}` };
    }

    render() {
        let style = null;
        let className;
        /*
         * - At the first render cycle the activeTabNode is unavailable,
         *   so it is not known where to postion the indicator
         * - At the second render cycle the indicator can receive its initial
         *   position, but this should be applied without an animation in case 
         *   the initially activate tab is > 0.
         * - In subsequent render cycles the position of the indicator SHOULD
         *   be animated because now we are responding to active tab changes
        */
        if (this.state.activeTabNodeAvailable) {
            style = this.getTransformStyle();
            className = this.renderCount > 1 ? bem.b('animated') : bem.b();
        } else {
            className = bem.b('hidden');
        }

        this.renderCount += 1;

        return <span className={className} style={style} />;
    }
}

TabIndicator.propTypes = {
    getActiveTabRef: PropTypes.func.isRequired,
};

export default TabIndicator;
