import React from 'react'
import propTypes from 'prop-types'
import { InnerTabBar } from './InnerTabBar'
import { TabBarScroller } from './TabBarScroller'

const TabBar = ({
    fixed,
    isScrollingRequired,
    children,
    ...tabBarScrollerProps
}) =>
    fixed || !isScrollingRequired ? (
        <InnerTabBar fixed={fixed}>{children}</InnerTabBar>
    ) : (
        <TabBarScroller {...tabBarScrollerProps}>
            <InnerTabBar fixed={fixed}>{children}</InnerTabBar>
        </TabBarScroller>
    )

TabBar.propTypes = {
    isScrollingRequired: propTypes.bool.isRequired,
    fixed: InnerTabBar.propTypes.fixed,
    children: propTypes.node.isRequired,
}

export { TabBar }
