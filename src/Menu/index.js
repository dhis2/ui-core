import React from 'react'
import propTypes from 'prop-types'
import { Card } from '../Card'

const Menu = ({ children, className }) => (
    <Card>
        <ul className={className}>{children}</ul>
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
    </Card>
)

Menu.propTypes = {
    className: propTypes.string,
    children: propTypes.arrayOf(propTypes.element).isRequired,
}

export { Menu }
