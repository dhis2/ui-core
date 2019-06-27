import propTypes from 'prop-types'
import React, { Children, cloneElement, createRef, PureComponent } from 'react'
import { instanceOfComponent } from '../prop-validators'
import { colors } from '../theme.js'
import { animatedSideScroll } from './animatedSideScroll'
import { detectHorizontalScrollbarHeight } from './detectHorizontalScrollbarHeight'
import { Tab } from './Tab'
import { TabBar } from './TabBar'
import { TabIndicator } from './TabIndicator'

class Tabs extends PureComponent {
    container = createRef()
    scrollBox = createRef()
    scrollArea = createRef()
    tabRefs = Children.map(this.props.children, createRef)
    horizontalScrollbarHeight = detectHorizontalScrollbarHeight()

    state = {
        isScrollingRequired: true,
        scrolledToStart: true,
        scrolledToEnd: true,
        showTabIndicator: false,
    }

    componentDidMount() {
        window.addEventListener('resize', this.init)
        this.init()
    }

    componentDidUpdate(prevProps) {
        if (
            !this.props.fixed &&
            this.state.isScrollingRequired &&
            this.props.selected !== prevProps.selected &&
            this.scrollRequiredToReachSelectedTab()
        ) {
            this.scrollToTab(this.getSelectedTabRef())
        }
    }

    componentWillUnmount() {
        window.addEventListener('resize', this.onResize)

        if (!this.props.fixed && this.state.isScrollingRequired) {
            this.removeSideScrollListener()
        }
    }

    init = () => {
        const isScrollingRequired = this.isScrollingRequired()
        this.setState({ isScrollingRequired })

        if (this.props.fixed || !isScrollingRequired) {
            this.showTabIndicator()
        } else {
            if (this.scrollRequiredToReachSelectedTab()) {
                const scrollProps = {
                    duration: 0,
                    callback: this.initScrollableUI,
                }

                this.scrollToTab(this.getSelectedTabRef(), scrollProps)
            } else {
                this.initScrollableUI()
            }
        }
    }

    getSelectedTabRef = () => {
        const { selected } = this.props
        return this.tabRefs[selected].current
    }

    scrollLeft = () => {
        const firstTab = this.tabRefs[0].current
        const { scrollLeft, offsetWidth } = this.scrollBox.current
        const offsetLeft = scrollLeft - offsetWidth
        const targetTab =
            offsetLeft <= 0 ? firstTab : this.getTabAtOffsetLeft(offsetLeft)

        this.scrollToTab(targetTab)
    }

    scrollRight = () => {
        const lastTab = this.tabRefs[this.tabRefs.length - 1].current
        const { scrollLeft, offsetWidth } = this.scrollBox.current
        const { offsetWidth: areaOffsetWidth } = this.scrollArea.current
        const offsetLeft = scrollLeft + offsetWidth * 2
        const atEnd = areaOffsetWidth <= offsetLeft
        const targetTab = atEnd ? lastTab : this.getTabAtOffsetLeft(offsetLeft)

        this.scrollToTab(targetTab)
    }

    initScrollableUI = () => {
        this.showTabIndicator()
        this.toggleScrollButtonVisibility()
        this.attachSideScrollListener()
    }

    animatedScrollCallback = () => {
        this.toggleScrollButtonVisibility()
        this.attachSideScrollListener()
    }

    isScrollingRequired() {
        const availableWidth = this.container.current.offsetWidth
        const requiredWidth = this.tabRefs.reduce(
            (total, { current: el }) => total + el.offsetWidth,
            0
        )
        return requiredWidth > availableWidth
    }

    showTabIndicator() {
        this.setState({ showTabIndicator: true })
    }

    attachSideScrollListener() {
        this.scrollBox.current.addEventListener(
            'scroll',
            this.toggleScrollButtonVisibility
        )
    }

    removeSideScrollListener() {
        this.scrollBox.current.removeEventListener(
            'scroll',
            this.toggleScrollButtonVisibility
        )
    }

    getTabAtOffsetLeft(offsetLeft) {
        return this.tabRefs.find(
            ({ current: tab }) =>
                offsetLeft >= tab.offsetLeft &&
                offsetLeft <= tab.offsetLeft + tab.offsetWidth
        ).current
    }

    scrollRequiredToReachSelectedTab() {
        const { scrollLeft, offsetWidth } = this.scrollBox.current
        const tab = this.getSelectedTabRef()
        const shouldScrollRight =
            tab.offsetLeft - scrollLeft + tab.offsetWidth > offsetWidth
        const shouldScrollLeft = tab.offsetLeft < scrollLeft
        return shouldScrollRight || shouldScrollLeft
    }

    scrollToTab(tab, scrollProps = { callback: this.animatedScrollCallback }) {
        this.removeSideScrollListener()

        animatedSideScroll({
            targetEl: tab,
            scrollBox: this.scrollBox.current,
            ...scrollProps,
        })
    }

    toggleScrollButtonVisibility = () => {
        const { scrollLeft, offsetWidth } = this.scrollBox.current
        const { offsetWidth: areaOffsetWidth } = this.scrollArea.current
        const scrolledToStart = scrollLeft === 0
        const scrolledToEnd = scrollLeft + offsetWidth === areaOffsetWidth

        if (
            this.state.scrolledToStart !== scrolledToStart ||
            this.state.scrolledToEnd !== scrolledToEnd
        ) {
            this.setState({
                scrolledToStart,
                scrolledToEnd,
            })
        }
    }

    render() {
        const {
            isScrollingRequired,
            scrolledToStart,
            scrolledToEnd,
            showTabIndicator,
        } = this.state
        const { className, fixed, children, selected } = this.props

        return (
            <div className={className} ref={this.container}>
                <TabBar
                    isScrollingRequired={isScrollingRequired}
                    fixed={fixed}
                    scrollLeft={this.scrollLeft}
                    scrollRight={this.scrollRight}
                    scrolledToStart={scrolledToStart}
                    scrolledToEnd={scrolledToEnd}
                    scrollBoxRef={this.scrollBox}
                    scrollAreaRef={this.scrollArea}
                    marginBottom={-this.horizontalScrollbarHeight}
                >
                    {Children.map(children, (child, index) =>
                        cloneElement(child, {
                            selected: index === selected,
                            ref: this.tabRefs[index],
                            fixed,
                        })
                    )}
                    <TabIndicator
                        getSelectedTabRef={this.getSelectedTabRef}
                        visible={showTabIndicator}
                    />
                </TabBar>
                <style jsx>{`
                    div {
                        width: 100%;
                        display: flex;
                        box-sizing: border-box;
                        flex-shrink: 0;
                        flex-direction: row;
                        background-color: ${colors.white};
                        box-shadow: inset 0 -1px 0 0 ${colors.grey400};
                    }
                `}</style>
            </div>
        )
    }
}

Tabs.propTypes = {
    className: propTypes.string,
    selected: propTypes.number.isRequired,
    fixed: TabBar.propTypes.fixed,
    children: propTypes.arrayOf(instanceOfComponent(Tab)),
}

Tabs.defaultProps = {
    fixed: false,
}

export { Tabs }
