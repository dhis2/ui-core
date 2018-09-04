import React, { Component, Children, cloneElement, Fragment } from 'react';
import PropTypes from 'prop-types';
import './tabs.css';
import Tab from './Tab';
import Icon from '../Icon';
import TabIndicator from './TabIndicator';
import { animatedScrollTo, bemClassNames } from '../utils';

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
        if (this.props.contained) {
            this.showTabIndicator();
            return;
        }

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
            !this.props.contained &&
            this.props.activeTabIndex !== prevProps.activeTabIndex &&
            this.scrollRequiredToReachActiveTab()
        ) {
            this.scrollToTab(this.getActiveTabRef());
        }
    }

    componentWillUnmount() {
        if (!this.props.contained) {
            this.nodes.scrollBox.removeEventListener('scroll', this.handleSideScroll);
        }
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

    getAdditionalTabProps(index) {
        const { stackedTabs, activeTabIndex } = this.props;
        return {
            stacked: stackedTabs,
            active: index === activeTabIndex,
            addTabRef: this.addTabRef,
        };
    }

    renderTabItems() {
        const { tabItems } = this.props;
        return tabItems.map((tab, index) => (
            <Tab key={`tab-${index}`} {...this.getAdditionalTabProps(index)} {...tab} />
        ));
    }

    renderChildren() {
        const { children } = this.props;
        return Children.map(children, (child, index) =>
            cloneElement(child, this.getAdditionalTabProps(index))
        );
    }

    // Rendering
    renderTabBar() {
        const { cluster, contained, children } = this.props;

        const { showTabIndicator } = this.state;

        const className = bem.e(
            'tab-container',
            // A scrollable tabBar cannot be clustered
            { [`cluster-${cluster}`]: cluster && contained },
            { contained }
        );

        return (
            <div className={className}>
                {children ? this.renderChildren() : this.renderTabItems()}
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
                    <div className={bem.e('scroll-box-clipper')}>
                        <div className={bem.e('scroll-box')} ref={this.setScrollBoxRef}>
                            <div
                                className={bem.e('scroll-area')}
                                ref={this.setScrollAreaRef}
                            >
                                {tabBar}
                            </div>
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
    position: PropTypes.oneOf(['relative', 'fixed', 'absolute', 'sticky']),
    contained: PropTypes.bool,
    cluster: PropTypes.oneOf([null, 'left', 'centered', 'right']),
    stackedTabs: PropTypes.bool,
    children: (props, propName, componentName) => {
        const children = props[propName];
        if (
            children &&
            ((Array.isArray(children) &&
                children.some(child => child.type.name !== 'Tab')) ||
                (!Array.isArray(children) && children.type.name !== 'Tab'))
        ) {
            return new Error(
                `Invalid prop ${propName} supplied to ${componentName} component. Only "Tab" components are allowed as direct ascendants of "Tabs"`
            );
        }
    },
};

Tabs.defaultProps = {
    tabItems: [],
    contained: false,
    position: 'relative',
    cluster: null,
    stackedTabs: false,
};

export default Tabs;
