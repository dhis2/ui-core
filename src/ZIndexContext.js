import React from 'react'

const computeZIndex = (propZIndex = 0, contextZIndex = 0, layerZIndex = 0) =>
    propZIndex || contextZIndex + layerZIndex

const createZIndexContext = zIndex => ({
    contextZIndex: zIndex,
    computeZIndex,
})

const ZIndexContext = React.createContext({
    contextZIndex: 0,
    computeZIndex: () => {},
})

export { createZIndexContext, ZIndexContext }
