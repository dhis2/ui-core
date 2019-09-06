import React from 'react'
import propTypes from 'prop-types'

/**
 * @module
 * @param {FieldSet.PropTypes} props
 * @returns {React.Component}
 * @example import { FieldSet } from @dhis2/ui-core
 * @see Live demo: {@link /demo/?path=/story/fieldset--default}
 */
const FieldSet = ({ className, children }) => (
    <fieldset className={className}>
        {children}
        <style jsx>{`
            fieldset {
                border: none;
                margin: 0;
                padding: 0;
            }
        `}</style>
    </fieldset>
)

/**
 * @typedef {Object} PropTypes
 * @static
 * @prop {Node} children
 * @prop {string} [className]
 */
FieldSet.propTypes = {
    children: propTypes.node.isRequired,
    className: propTypes.string,
}

export { FieldSet }