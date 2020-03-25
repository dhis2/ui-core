import React from 'react'
import { createPortal } from 'react-dom'
import propTypes from '@dhis2/prop-types'
import { Layer } from '../LayerContext.js'
import { layers } from '../theme.js'

export default { title: 'Layer (computed zIndex)', component: Layer }

const LayerWithText = ({ level, name, children, dataTest }) =>
    createPortal(
        <Layer zIndex={level}>
            {zIndexComputed => (
                <div data-test={dataTest}>
                    <p>Layer {name}</p>
                    <p>Original z-index {level}</p>
                    <p>Computed z-index {zIndexComputed}</p>
                    {children}
                    <style jsx>{`
                        div {
                            position: absolute;
                            z-index: ${zIndexComputed};
                            top: 0;
                            left: 0;
                            background-color: white;
                        }
                    `}</style>
                </div>
            )}
        </Layer>,
        document.body
    )
LayerWithText.propTypes = {
    children: propTypes.node,
    dataTest: propTypes.string,
    level: propTypes.number,
    name: propTypes.string,
}

const ApplicationTopLayer = ({ children, dataTest }) => (
    <LayerWithText
        level={layers.applicationTop}
        name="applicationTop"
        dataTest={dataTest}
    >
        {children}
    </LayerWithText>
)
ApplicationTopLayer.propTypes = {
    children: propTypes.node,
    dataTest: propTypes.string,
}

const BlockingLayer = ({ children, dataTest }) => (
    <LayerWithText level={layers.blocking} name="blocking" dataTest={dataTest}>
        {children}
    </LayerWithText>
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
