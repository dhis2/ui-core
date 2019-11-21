import propTypes from '@dhis2/prop-types'
import React from 'react'

/**
 * @module
 *
 * @param {Constrictor.PropTypes} props
 * @returns {React.Component}
 *
 * @desc con·stric·tor | \kən-ˈstrik-tər\
 * 1: a muscle that contracts a cavity or orifice or compresses an organ
 * 2: a snake (such as a boa constrictor) that coils around and compresses prey
 * 3: one that constricts
 */
export const Constrictor = ({ width, minWidth, maxWidth, children }) => (
    <div>
        {children}
        <style jsx>{`
            div {
                ${width ? `width: ${width};` : ''}
                ${minWidth ? `min-width: ${minWidth};` : ''}
                ${maxWidth ? `max-width: ${maxWidth};` : ''}
            }
        `}</style>
    </div>
)

/**
 * @typedef {Object} PropTypes
 * @static
 *
 * @prop {string} [width]
 * @prop {string} [minWidth]
 * @prop {string} [maxWidth]
 */
Constrictor.propTypes = {
    width: propTypes.string,
    minWidth: propTypes.string,
    maxWidth: propTypes.string,
    children: propTypes.node,
}
