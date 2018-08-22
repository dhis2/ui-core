import React, { Component } from 'react';
import PropTypes from 'prop-types';
import bemClassNames from '../../dist/utils/bemClassNames';
import './tabs.css';

const bem = bemClassNames('d2ui-tabs');

class Tabs extends Component {
    componentDidMount() {
        // attach scroll listener for box and window
    }

    componentWillUnmount() {
        // remove scroll listener for box and window
        dfsasdfsad;
    }

    render() {
        const {
            activeTabIndex,
            tabItems,
            position,
            contained,
            clustered,
            stackedTabs,
        } = this.props;
        const bemClass = bem.b(position, { contained }, { clustered });
        const fullClass = `${bemClass} accent-primary-background white-color`;

        return (
            <div className={fullClass}>
                {tabItems.map((tab, index) => (
                    <Tab
                        {...tab}
                        stacked={stackedTabs}
                        active={index === activeTabIndex}
                    />
                ))}
            </div>
        );
    }
}

Tabs.propTypes = {
    activeTabIndex: PropTypes.number.isRequired,
    tabItems: PropTypes.array,
    position: PropTypes.oneOf(['relative', 'fixed', 'sticky']),
    contained: PropTypes.bool,
    clustered: PropTypes.oneOf(null, 'left', 'centered', 'right'),
    stackedTabs: PropTypes.bool,
};

Tabs.defaultProps = {
    tabItems: [],
    contained: false,
    clustered: null,
    stackedTabs: false,
};

export default Tabs;
