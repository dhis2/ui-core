import React from 'react'
import propTypes from '@dhis2/prop-types'

const SelectMenuList = ({ children, className }) => (
    <ul className={className}>
        {children}

        <style jsx>{`
            ul {
                display: block;
                position: relative;
                width: 100%;
                margin: 0;

                padding: 0;
                user-select: none;
            }
        `}</style>
    </ul>
)

SelectMenuList.propTypes = {
    className: propTypes.string,
    children: propTypes.node.isRequired,
}

export { SelectMenuList }
