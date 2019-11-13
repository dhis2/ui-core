import React from 'react'
import propTypes from '@dhis2/prop-types'

const ZIndexContext = React.createContext(0)
const ZIndexProvider = ZIndexContext.Provider

const computeZIndex = (propZIndex = 0, contextZIndex = 0, layerZIndex = 0) =>
    propZIndex || contextZIndex + layerZIndex

const ZIndexConsumer = ({ zIndex, defaultZIndex, children }) => (
    <ZIndexContext.Consumer>
        {contextZIndex => {
            const computedZIndex = computeZIndex(
                zIndex,
                contextZIndex,
                defaultZIndex
            )
            return typeof children === 'function'
                ? children(computedZIndex)
                : null
        }}
    </ZIndexContext.Consumer>
)

ZIndexConsumer.propTypes = {
    children: propTypes.element,
    zIndex: propTypes.number,
    defaultZIndex: propTypes.number,
}

export { ZIndexProvider, ZIndexConsumer }
