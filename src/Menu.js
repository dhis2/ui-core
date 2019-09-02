import React from 'react'
import propTypes from 'prop-types'

import { Card } from './Card.js'
import { MenuList } from './MenuList.js'
import { spacers } from './theme.js'

const Menu = ({ children, className }) => (
    <div className={className}>
        <Card>
            <div className="menu-list-wrapper">
                <MenuList>{children}</MenuList>
            </div>
        </Card>

        <style jsx>{`
            .menu-list-wrapper {
                padding: ${spacers.dp4} 0;
            }
        `}</style>
    </div>
)

Menu.propTypes = {
    children: MenuList.propTypes.children,
    className: propTypes.string,
}

export { Menu }
