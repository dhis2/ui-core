import React from 'react'

import { instanceOfComponent } from '../prop-validators/instanceOfComponent'
import { childrenContainsSidebar, childrenContainsTopBar } from './helper'
import { ContainerV1 } from './container/ContainerV1'
import { ContainerV2 } from './container/ContainerV2'
import { ContainerV3 } from './container/ContainerV3'
import { ContainerV4 } from './container/ContainerV4'

const LayoutContainer = ({ children }) => {
    const withSidebar = childrenContainsSidebar(children)
    const withTopBar = childrenContainsTopBar(children)

    if (withSidebar && withTopBar) {
        return <ContainerV4 children={children} />
    }

    if (withSidebar) {
        return <ContainerV3 children={children} />
    }

    if (withTopBar) {
        return <ContainerV2 children={children} />
    }

    return <ContainerV1 children={children} />
}

export { LayoutContainer }
