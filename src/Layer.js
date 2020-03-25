import cx from 'classnames'
import React, { createContext, useState, useContext } from 'react'
import { createPortal } from 'react-dom'
import propTypes from '@dhis2/prop-types'

const LayerContext = createContext({
    node: document.body,
    level: 0,
})

const Layer = ({
    children,
    className,
    dataTest,
    level,
    onClick,
    pointerEvents,
    position,
    translucent,
}) => {
    const parentLayer = useContext(LayerContext)
    const [layerEl, setLayerEl] = useState(null)
    const nextLayer = {
        node: layerEl,
        level: Math.max(parentLayer.level, level),
    }
    const portalNode =
        level > parentLayer.level ? document.body : parentLayer.node

    return createPortal(
        <div
            ref={setLayerEl}
            className={cx(className, position, `level-${level}`, {
                translucent,
            })}
            data-test={dataTest}
            onClick={onClick}
        >
            {layerEl && (
                <LayerContext.Provider value={nextLayer}>
                    {children}
                </LayerContext.Provider>
            )}
            <style jsx>{`
                div {
                    z-index: ${level};
                    pointer-events: ${pointerEvents};
                }
            `}</style>
            <style jsx>{`
                div {
                    height: 100%;
                    width: 100%;
                    top: 0;
                    left: 0;
                }
                div.fixed {
                    position: fixed;
                    height: 100vh;
                    width: 100vw;
                }
                div.absolute {
                    position: absolute;
                }
                div.relative {
                    position: relative;
                }
                div.translucent {
                    background-color: rgba(33, 43, 54, 0.4);
                }
            `}</style>
        </div>,
        portalNode
    )
}

Layer.defaultProps = {
    position: 'fixed',
    dataTest: 'dhis2-uicore-layer',
    pointerEvents: 'all',
}

Layer.propTypes = {
    children: propTypes.node,
    className: propTypes.string,
    dataTest: propTypes.string,
    level: propTypes.number,
    pointerEvents: propTypes.oneOf(['all', 'none']),
    position: propTypes.oneOf(['absolute', 'relative', 'fixed']),
    translucent: propTypes.bool,
    onClick: propTypes.func,
}

export { Layer }
