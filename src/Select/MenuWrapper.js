import React from 'react'
import ReactDOM from 'react-dom'
import propTypes from '@dhis2/prop-types'
import { resolve } from 'styled-jsx/css'
import { Card } from '../Card.js'
import { layers } from '../theme.js'
import { Layer } from '../LayerContext.js'

const MenuWrapper = ({
    children,
    maxHeight,
    className,
    menuRef,
    menuTop,
    menuLeft,
    menuWidth,
    zIndex,
}) => {
    const { styles, className: cardClassName } = resolve`
        height: auto;
        max-height: ${maxHeight};
        overflow: auto;
    `
    return ReactDOM.createPortal(
        <Layer zIndexBase={layers.applicationTop} zIndex={zIndex}>
            {zIndexComputed => (
                <div className={className} ref={menuRef}>
                    <Card className={cardClassName}>{children}</Card>

                    {styles}

                    <style jsx>{`
                        div {
                            position: absolute;
                            z-index: ${zIndexComputed};
                            top: ${menuTop};
                            left: ${menuLeft};
                            width: ${menuWidth};
                        }
                    `}</style>
                </div>
            )}
        </Layer>,
        document.body
    )
}

MenuWrapper.defaultProps = {
    maxHeight: '280px',
}

MenuWrapper.propTypes = {
    className: propTypes.string,
    children: propTypes.node,
    maxHeight: propTypes.string,
    selectRef: propTypes.object.isRequired,
    menuRef: propTypes.object.isRequired,
    menuTop: propTypes.string.isRequired,
    menuLeft: propTypes.string.isRequired,
    menuWidth: propTypes.string.isRequired,
    zIndex: propTypes.number,
}

export { MenuWrapper }
