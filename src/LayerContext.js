import React, { useContext } from 'react'
import propTypes from '@dhis2/prop-types'
import { layers } from './theme.js'

const LayerContext = React.createContext(0)

const getStackedLayer = (defaultLayer, context) => {
    // Keep alert layer constant
    if (defaultLayer === layers.alert) {
        return layers.alert
    }

    // Differentiate between a stacked blocking and applicationTop layer
    const layerIncrement = defaultLayer === layers.blocking ? 2 : 1
    const layer = context + layerIncrement

    // stay within stack layer boundaries defined by the design system
    // https://github.com/dhis2/design-system/blob/master/principles/spacing-alignment.md#stacking
    if (layer >= layers.alert) {
        return layers.alert - 1
    }

    return layer
}

const useLayer = (defaultLayer, customLayer) => {
    const context = useContext(LayerContext)

    if (customLayer) return customLayer

    if (context) return getStackedLayer(defaultLayer, context)

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
