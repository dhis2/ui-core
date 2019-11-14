import React, { useContext } from 'react'

const LayerContext = React.createContext(0)
const LayerProvider = LayerContext.Provider

const useLayerBasedZindex = (propZIndex = 0, defaultZIndex = 0) => {
    const contextZIndex = useContext(LayerContext)
    return propZIndex || contextZIndex + defaultZIndex
}

export { LayerProvider, useLayerBasedZindex }
