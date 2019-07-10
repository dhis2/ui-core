import { Children } from 'react'
import { LayoutTopBar } from './LayoutTopBar'
import { LayoutSidebar } from './LayoutSidebar'

export const childrenContainsComponent = component => children =>
    Children.toArray(children).reduce(
        (found, child) => found || child.type === component,
        false
    )

export const childrenContainsTopBar = childrenContainsComponent(LayoutTopBar)
export const childrenContainsSidebar = childrenContainsComponent(LayoutSidebar)
