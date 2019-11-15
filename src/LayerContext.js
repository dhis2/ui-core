import React, { useContext } from 'react'
import propTypes from '@dhis2/prop-types'

const LayerContext = React.createContext(0)

const useLayer = (defaultLayer, customLayer) => {
    const context = useContext(LayerContext)

    if (customLayer) return customLayer

    // stay within stack layer boundaries defined by the design system
    // https://github.com/dhis2/design-system/blob/master/principles/spacing-alignment.md#stacking
    const capReached = context && context % 1000 === 999
    if (capReached) return context

    if (context) return context + 1

    return defaultLayer
}

/**
 * @module
 * @private
 * @param {Layer.PropTypes} props
 * @returns {React.Component}
 */
const Layer = ({ children, zIndex, zIndexBase }) => {
    const newLayer = useLayer(zIndexBase, zIndex)

    return (
        <LayerContext.Provider value={newLayer}>
            {children(newLayer)}
        </LayerContext.Provider>
    )
}

/**
 * @typedef {Object} PropTypes
 * @static
 * @prop {function} children
 * @prop {number} zIndex
 * @prop {number} zIndexBase
 */
Layer.propTypes = {
    children: propTypes.func.isRequired,
    zIndexBase: propTypes.number,
    zIndex: propTypes.number,
}

export { Layer, useLayer }
