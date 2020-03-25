import React from 'react'
import propTypes from '@dhis2/prop-types'
import { Layer } from '../Layer.js'
import { layers } from '../theme.js'

export default { title: 'Layer (stacking)', component: Layer }

const ApplicationTopLayer = ({ children, dataTest }) => (
    <Layer level={layers.applicationTop} dataTest={dataTest}>
        applicationTop
        {children}
    </Layer>
)
ApplicationTopLayer.propTypes = {
    children: propTypes.node,
    dataTest: propTypes.string,
}

const BlockingLayer = ({ children, dataTest }) => (
    <Layer level={layers.blocking} dataTest={dataTest}>
        blocking
        {children}
    </Layer>
)
BlockingLayer.propTypes = {
    children: propTypes.node,
    dataTest: propTypes.string,
}

export const IncorrectLayerOnTop = () => (
    <ApplicationTopLayer>
        <ApplicationTopLayer>
            <ApplicationTopLayer>
                <ApplicationTopLayer dataTest="application-top-layer">
                    I end up on top, but this should have been the BlockingLayer
                </ApplicationTopLayer>
            </ApplicationTopLayer>
        </ApplicationTopLayer>
        <BlockingLayer dataTest="blocking-layer" />
    </ApplicationTopLayer>
)
