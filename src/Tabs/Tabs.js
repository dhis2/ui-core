import React, {
    PureComponent,
    Children,
    cloneElement,
    createRef,
    Fragment,
} from 'react'
import PropTypes from 'prop-types'
import Tab from './Tab'
import TabIndicator from './TabIndicator'
import animatedSideScroll from './animatedSideScroll'
import { ChevronLeft, ChevronRight } from '../icons/Chevron'
import cx from 'classnames'
import styles from './styles'

class Tabs extends PureComponent {
    scrollBox = createRef()
    scrollArea = createRef()
    tabRefs = Children.map(this.props.children, createRef)

    state = {
        scrolledToStart: true,
        scrolledToEnd: true,
        showTabIndicator: false,
    }

    componentDidMount() {
        if (this.props.contained) {
            this.showTabIndicator()
            return
        }

        this.setHorizontalScrollbarHeight()

        if (this.scrollRequiredToReachSelectedTab()) {
            const scrollProps = {
                duration: 1,
                callback: this.initScrollableUI,
            }

            this.scrollToTab(this.getSelectedTabRef(), scrollProps)
        } else {
            this.initScrollableUI()
        }
    }

    componentDidUpdate(prevProps) {
        if (
            !this.props.contained &&
            this.props.selected !== prevProps.selected &&
            this.scrollRequiredToReachSelectedTab()
        ) {
            this.scrollToTab(this.getSelectedTabRef())
        }
    }

    componentWillUnmount() {
        if (!this.props.contained) {
            this.removeSideScrollListener()
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

    showTabIndicator() {
        this.setState({ showTabIndicator: true })
    }

    setHorizontalScrollbarHeight() {
        const { offsetHeight, clientHeight } = this.scrollBox.current
        this.horizontalScrollbarHeight = offsetHeight - clientHeight
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

    renderChildren() {
        const { children, selected } = this.props
        return Children.map(children, (child, index) =>
            cloneElement(child, {
                selected: index === selected,
                ref: this.tabRefs[index],
            })
        )
    }

    renderTabBar() {
        const { cluster, contained } = this.props

        const { showTabIndicator } = this.state

        const className = cx(
            'tab-container',
            // A scrollable tabBar cannot be clustered
            { [`cluster-${cluster}`]: cluster && contained, contained }
        )

        return (
            <div className={className}>
                {this.renderChildren()}
                <TabIndicator
                    getSelectedTabRef={this.getSelectedTabRef}
                    visible={showTabIndicator}
                />
            </div>
        )
    }

    render() {
        const { scrolledToStart, scrolledToEnd } = this.state
        const { className, position, contained } = this.props
        const scrollBoxStyle = {
            marginBottom: -this.horizontalScrollbarHeight,
        }
        let tabBar = this.renderTabBar()

        if (!contained) {
            tabBar = (
                <Fragment>
                    <button
                        onClick={this.scrollLeft}
                        className={cx('scroll-button', {
                            hidden: scrolledToStart,
                        })}
                    >
                        <ChevronLeft />
                    </button>
                    <div className="scroll-box-clipper">
                        <div
                            className="scroll-box"
                            ref={this.scrollBox}
                            style={scrollBoxStyle}
                        >
                            <div
                                className={'scroll-area'}
                                ref={this.scrollArea}
                            >
                                {tabBar}
                            </div>
                        </div>
                    </div>
                    <button
                        onClick={this.scrollRight}
                        className={cx('scroll-button', {
                            hidden: scrolledToEnd,
                        })}
                    >
                        <ChevronRight />
                    </button>
                </Fragment>
            )
        }

        return (
            <div className={cx(className, position)}>
                {tabBar}
                <style jsx>{styles}</style>
            </div>
        )
    }
}

Tabs.propTypes = {
    className: PropTypes.string,
    selected: PropTypes.number.isRequired,
    position: PropTypes.oneOf(['relative', 'fixed', 'absolute', 'sticky']),
    contained: PropTypes.bool,
    cluster: PropTypes.oneOf([null, 'left', 'centered', 'right']),
    children: PropTypes.oneOfType([
        PropTypes.objectOf(Tab),
        PropTypes.arrayOf(Tab),
    ]),
}

Tabs.defaultProps = {
    items: [],
    contained: false,
    position: 'relative',
    cluster: null,
}

export default Tabs
