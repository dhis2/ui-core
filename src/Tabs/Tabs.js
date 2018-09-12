import React, { Component, Children, cloneElement, Fragment } from 'react';
import PropTypes from 'prop-types';
import './tabs.css';
import Tab from './Tab';
import Icon from '../Icon';
import TabIndicator from './TabIndicator';
import { animatedScrollTo, bemClassNames, throttle } from '../utils';
import computeHorizontalScrollbarHeight from './computeHorizontalScrollbarHeight';

export const bem = bemClassNames('d2ui-tabs');

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
        this.horizontalScrollbarHeight = computeHorizontalScrollbarHeight();
        this.handleSideScroll = throttle(this.toggleScrollButtonVisibility.bind(this));
    }

    // Lifecycle hooks
    componentDidMount() {
        if (this.props.contained) {
            this.showTabIndicator();
            return;
        }

        if (this.scrollRequiredToReachActiveTab()) {
            const scrollProps = {
                duration: 1,
                callback: this.updateScrollableUiAfterMount,
            };

            this.scrollToTab(this.getActiveTabRef(), scrollProps);
        } else {
            this.updateScrollableUiAfterMount();
        }
    }

    componentDidUpdate(prevProps) {
        if (
            !this.props.contained &&
            this.props.selected !== prevProps.selected &&
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
        const { selected } = this.props;
        return this.nodes.tabs[selected];
    };

    setScrollBoxRef = node => {
        this.nodes.scrollBox = node;
    };

    setScrollAreaRef = node => {
        this.nodes.scrollArea = node;
    };

    // Event handlers and callbacks (bound to this scope)
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

    attachSideScrollListener = () => {
        this.nodes.scrollBox.addEventListener('scroll', this.handleSideScroll);
    };

    updateScrollableUiAfterMount = () => {
        this.showTabIndicator();
        this.toggleScrollButtonVisibility();
        this.attachSideScrollListener();
    };

    // Methods
    showTabIndicator() {
        this.setState({ showTabIndicator: true });
    }

    removeSideScrollListener() {
        this.nodes.scrollBox.removeEventListener('scroll', this.handleSideScroll);
    }

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

    scrollToTab(tab, scrollProps = { callback: this.attachSideScrollListener }) {
        this.removeSideScrollListener();

        animatedScrollTo({
            to: tab,
            scrollBox: this.nodes.scrollBox,
            direction: 'horizontal',
            ...scrollProps,
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
        const { stacked, selected } = this.props;
        return {
            stacked: stacked,
            active: index === selected,
            addTabRef: this.addTabRef,
        };
    }

    renderitems() {
        const { items } = this.props;
        return items.map((tab, index) => (
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
                {children ? this.renderChildren() : this.renderitems()}
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
        const scrollBoxStyle = {
            marginBottom: -this.horizontalScrollbarHeight,
        };
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
                        <div
                            className={bem.e('scroll-box')}
                            ref={this.setScrollBoxRef}
                            style={scrollBoxStyle}
                        >
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
    selected: PropTypes.number.isRequired,
    items: PropTypes.array,
    position: PropTypes.oneOf(['relative', 'fixed', 'absolute', 'sticky']),
    contained: PropTypes.bool,
    cluster: PropTypes.oneOf([null, 'left', 'centered', 'right']),
    stacked: PropTypes.bool,
    children: PropTypes.oneOfType([PropTypes.objectOf(Tab), PropTypes.arrayOf(Tab)]),
};

Tabs.defaultProps = {
    items: [],
    contained: false,
    position: 'relative',
    cluster: null,
    stacked: false,
};

export default Tabs;
