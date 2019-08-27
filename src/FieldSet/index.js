import React from 'react'
import propTypes from 'prop-types'

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

FieldSet.propTypes = {
    className: propTypes.string,
    children: propTypes.node.isRequired,
}

export { FieldSet }
