import React from 'react'
import propTypes from 'prop-types'

const MenuList = ({ children, className }) => (
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

MenuList.propTypes = {
    className: propTypes.string,
    children: propTypes.any.isRequired,
}

export { MenuList }
