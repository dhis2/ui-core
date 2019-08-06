import React from 'react'
import css from 'styled-jsx/css'
import cx from 'classnames'
import { instanceOfComponent } from '@dhis2/prop-types'

import { childrenContainsSidebar, childrenContainsTopBar } from './helper'
import styles from './container.styles'

const determineLayoutClassName = children => {
    const withSidebar = childrenContainsSidebar(children)
    const withTopBar = childrenContainsTopBar(children)

    if (withSidebar && withTopBar) return 'with-topbar-sidebar'
    if (withSidebar) return 'with-sidebar'
    if (withTopBar) return 'with-topbar'
    return 'content-only'
}

const LayoutContainer = ({ children }) => {
    const layoutClassName = determineLayoutClassName(children)

    return (
        <div className={cx('container', layoutClassName)}>
            {children}
            <style jsx>{styles}</style>
        </div>
    )
}

export { LayoutContainer }
