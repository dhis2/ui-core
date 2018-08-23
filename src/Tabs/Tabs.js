import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import bemClassNames from '../../dist/utils/bemClassNames';
import './tabs.css';
import Tab from './Tab';
import Icon from '../../dist/Icon';
import TabIndicator from './TabIndicator';

const bem = bemClassNames('d2ui-tabs');

class Tabs extends Component {
    constructor(props) {
        super(props);
        this.tabRefs = [];
    }

    componentDidMount() {
        console.log(this.tabRefs);
        // attach scroll listener for box and window
    }

    componentWillUnmount() {
        // remove scroll listener for box and window
    }

    addTabRef = node => {
        this.tabRefs.push(node);
    };

    getActiveTabRef = () => {
        const { activeTabIndex } = this.props;
        return this.tabRefs[activeTabIndex];
    };

    renderTabBar() {
        const {
            clustered,
            contained,
            tabItems,
            stackedTabs,
            activeTabIndex,
        } = this.props;

        const className = bem.e(
            'tab-container',
            // A scrollable tabBar cannot be clustered
            { [`clustered-${clustered}`]: clustered && contained },
            { contained }
        );

        return (
            <div className={className}>
                {tabItems.map((tab, index) => {
                    const active = index === activeTabIndex;

                    return (
                        <Tab
                            key={`tab-${index}`}
                            stacked={stackedTabs}
                            active={active}
                            addTabRef={this.addTabRef}
                            {...tab}
                        />
                    );
                })}
                <TabIndicator getActiveTabRef={this.getActiveTabRef} />
            </div>
        );
    }

    render() {
        const { position, contained } = this.props;
        let tabBar = this.renderTabBar();
        console.log('render tabs, activeTabIndex = ', this.props.activeTabIndex);

        if (!contained) {
            tabBar = (
                <Fragment>
                    <div className={bem.e('scroll-button', 'left')}>
                        <Icon name="keyboard_arrow_left" />
                    </div>
                    <div className={bem.e('scroll-box')}>
                        <div className={bem.e('scroll-area')}>{tabBar}</div>
                    </div>
                    <div className={bem.e('scroll-button', 'right')}>
                        <Icon name="keyboard_arrow_right" />
                    </div>
                </Fragment>
            );
        }

        return <div className={bem.b(position)}>{tabBar}</div>;
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
    position: 'sticky',
    clustered: null,
    stackedTabs: false,
};

export default Tabs;
