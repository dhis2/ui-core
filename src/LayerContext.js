import React from 'react'
import propTypes from '@dhis2/prop-types'

const LayerContext = React.createContext(0)
const LayerProvider = LayerContext.Provider

const LayerConsumer = ({ propZIndex = 0, defaultZIndex = 0, children }) => (
    <LayerContext.Consumer>
        {(contextZIndex = 0) =>
            children(propZIndex || contextZIndex + defaultZIndex)
        }
    </LayerContext.Consumer>
)

LayerConsumer.propTypes = {
    children: propTypes.func.isRequired,
    propZIndex: propTypes.number,
    defaultZIndex: propTypes.number.isRequired,
}

export { LayerProvider, LayerConsumer }
