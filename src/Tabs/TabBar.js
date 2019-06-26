import React from 'react'
import propTypes from 'prop-types'
import { InnerTabBar } from './InnerTabBar'
import { TabBarScroller } from './TabBarScroller'

const TabBar = ({ cluster, contained, children, ...tabBarScrollerProps }) =>
    contained ? (
        <InnerTabBar cluster={cluster} contained={contained}>
            {children}
        </InnerTabBar>
    ) : (
        <TabBarScroller {...tabBarScrollerProps}>
            <InnerTabBar cluster={cluster} contained={contained}>
                {children}
            </InnerTabBar>
        </TabBarScroller>
    )

TabBar.propTypes = {
    cluster: InnerTabBar.propTypes.cluster,
    contained: InnerTabBar.propTypes.contained,
    children: propTypes.node.isRequired,
}

export { TabBar }
