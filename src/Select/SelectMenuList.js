import React from 'react'
import propTypes from '@dhis2/prop-types'
import { spacers } from '../theme.js'

const SelectMenuList = ({ children }) => (
    <ul>
        {children}

        <style jsx>{`
            ul {
                display: block;
                position: relative;
                width: 100%;
                margin: 0;
                padding: ${spacers.dp4} 0;

                user-select: none;
            }
        `}</style>
    </ul>
)

SelectMenuList.propTypes = {
    children: propTypes.node.isRequired,
}

export { SelectMenuList }
