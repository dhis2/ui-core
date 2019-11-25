import React from 'react'
import propTypes from '@dhis2/prop-types'
import cx from 'classnames'

import { Layer } from './LayerContext.js'

/**
 * @module
 * @private
 * @param {Object} PropTypes
 * @returns {React.Component}
 */
const Backdrop = ({ onClick, transparent, children, zIndex, className }) => {
    return (
        <Layer zIndex={zIndex}>
            {zIndexComputed => (
                <div
                    className={cx('backdrop', className)}
                    onClick={event => onClick && onClick({}, event)}
                >
                    <div
                        onClick={e => {
                            // stop events from bubbling up through the
                            // children to the backdrop click handler
                            e.stopPropagation()
                        }}
                    >
                        {children}
                    </div>

                    <style jsx>{`
                        .backdrop {
                            position: fixed;
                            height: 100%;
                            width: 100%;
                            left: 0;
                            top: 0;
                        }
                    `}</style>

                    <style jsx>{`
                        .backdrop {
                            background: ${transparent
                                ? 'transparent'
                                : 'rgba(33, 43, 54, 0.4)'};

                            z-index: ${zIndexComputed};
                        }
                    `}</style>
                </div>
            )}
        </Layer>
    )
}

/**
 * @typedef {Object} PropTypes
 * @static
 * @prop {function} onClick
 * @prop {boolean} transparent
 * @prop {Node} children
 * @prop {number} zIndex
 * @prop {string} className
 */
Backdrop.propTypes = {
    onClick: propTypes.func,
    transparent: propTypes.bool,
    children: propTypes.node,
    zIndex: propTypes.number,
    className: propTypes.string,
}

export { Backdrop }
