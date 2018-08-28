import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import bemClassNames from '../../dist/utils/bemClassNames';
import './tabs.css';
import Tab from './Tab';
import Icon from '../../dist/Icon';
import TabIndicator from './TabIndicator';
import { animatedScrollTo } from '../utils';

const bem = bemClassNames('d2ui-tabs');

class Tabs extends Component {
    constructor(props) {
        super(props);
        this.nodes = {
            scrollBox: null,
            scrollArea: null,
            tabs: [],
        };
        this.state = {
            // By setting these to false, the scroll buttons are hidden when the component mounts
            scrolledToStart: true,
            scrolledToEnd: true,
            showTabIndicator: false,
        };
    }

    // Lifecycle hooks
    componentDidMount() {
        this.nodes.scrollBox.addEventListener('scroll', this.handleSideScroll);

        if (this.scrollRequiredToReachActiveTab()) {
            // If a scroll is required the scroll event is triggered and
            // the scroll button visibility is updated as a result
            const scrollParams = {
                duration: 1, // no animation
                callback: this.showTabIndicator,
            };
            this.scrollToTab(this.getActiveTabRef(), scrollParams);
        } else {
            // If no scroll is required the scrollButtons need to be updated manually
            this.toggleScrollButtonVisibility();
            this.showTabIndicator();
        }
    }

    componentDidUpdate(prevProps) {
        if (
            this.props.activeTabIndex !== prevProps.activeTabIndex &&
            this.scrollRequiredToReachActiveTab()
        ) {
            this.scrollToTab(this.getActiveTabRef());
        }
    }

    componentWillUnmount() {
        this.nodes.scrollBox.removeEventListener('scroll', this.handleSideScroll);
    }

    // Refs
    addTabRef = node => {
        this.nodes.tabs.push(node);
    };

    getActiveTabRef = () => {
        const { activeTabIndex } = this.props;
        return this.nodes.tabs[activeTabIndex];
    };

    setScrollBoxRef = node => {
        this.nodes.scrollBox = node;
    };

    setScrollAreaRef = node => {
        this.nodes.scrollArea = node;
    };

    // Event handlers and callbacks (bound to this scope)
    handleSideScroll = () => {
        this.toggleScrollButtonVisibility();
    };

    scrollLeft = () => {
        const { scrollBox, tabs } = this.nodes;
        const offsetLeft = scrollBox.scrollLeft - scrollBox.offsetWidth;
        const targetTab = offsetLeft <= 0 ? tabs[0] : this.getTabAtOffsetLeft(offsetLeft);
        this.scrollToTab(targetTab);
    };

    scrollRight = () => {
        const { scrollBox, scrollArea, tabs } = this.nodes;
        const offsetLeft = scrollBox.scrollLeft + scrollBox.offsetWidth * 2;
        const atEnd = scrollArea.offsetWidth <= offsetLeft;
        const targetTab = atEnd
            ? tabs[tabs.length - 1]
            : this.getTabAtOffsetLeft(offsetLeft);
        this.scrollToTab(targetTab);
    };

    showTabIndicator = () => {
        this.setState({ showTabIndicator: true });
    };

    // Methods
    getTabAtOffsetLeft(offsetLeft) {
        return this.nodes.tabs.find(
            tab =>
                offsetLeft >= tab.offsetLeft &&
                offsetLeft <= tab.offsetLeft + tab.offsetWidth
        );
    }

    scrollRequiredToReachActiveTab() {
        const { scrollBox } = this.nodes;
        const tab = this.getActiveTabRef();
        const shouldScrollRight =
            tab.offsetLeft - scrollBox.scrollLeft + tab.offsetWidth >
            scrollBox.offsetWidth;
        const shouldScrollLeft = tab.offsetLeft < scrollBox.scrollLeft;
        return shouldScrollRight || shouldScrollLeft;
    }

    scrollToTab(tab, scrollParams = {}) {
        animatedScrollTo({
            to: tab,
            scrollBox: this.nodes.scrollBox,
            direction: 'horizontal',
            ...scrollParams,
        });
    }

    toggleScrollButtonVisibility() {
        const { scrollBox, scrollArea } = this.nodes;
        const scrolledToStart = scrollBox.scrollLeft === 0;
        const scrolledToEnd =
            scrollBox.scrollLeft + scrollBox.offsetWidth === scrollArea.offsetWidth;

        if (
            this.state.scrolledToStart !== scrolledToStart ||
            this.state.scrolledToEnd !== scrolledToEnd
        ) {
            this.setState({
                scrolledToStart,
                scrolledToEnd,
            });
        }
    }

    // Rendering
    renderTabBar() {
        const {
            clustered,
            contained,
            tabItems,
            stackedTabs,
            activeTabIndex,
        } = this.props;

        const { showTabIndicator } = this.state;

        const className = bem.e(
            'tab-container',
            // A scrollable tabBar cannot be clustered
            { [`clustered-${clustered}`]: clustered && contained },
            { contained }
        );

        return (
            <div className={className}>
                {tabItems.map((tab, index) => (
                    <Tab
                        key={`tab-${index}`}
                        stacked={stackedTabs}
                        active={index === activeTabIndex}
                        addTabRef={this.addTabRef}
                        {...tab}
                    />
                ))}
                <TabIndicator
                    getActiveTabRef={this.getActiveTabRef}
                    visible={showTabIndicator}
                />
            </div>
        );
    }

    render() {
        const { scrolledToStart, scrolledToEnd } = this.state;
        const { position, contained } = this.props;
        let tabBar = this.renderTabBar();

        if (!contained) {
            tabBar = (
                <Fragment>
                    <button
                        onClick={this.scrollLeft}
                        className={bem.e('scroll-button', { hidden: scrolledToStart })}
                    >
                        <Icon name="keyboard_arrow_left" />
                    </button>
                    <div className={bem.e('scroll-box')} ref={this.setScrollBoxRef}>
                        <div className={bem.e('scroll-area')} ref={this.setScrollAreaRef}>
                            {tabBar}
                        </div>
                    </div>
                    <button
                        onClick={this.scrollRight}
                        className={bem.e('scroll-button', { hidden: scrolledToEnd })}
                    >
                        <Icon name="keyboard_arrow_right" />
                    </button>
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
