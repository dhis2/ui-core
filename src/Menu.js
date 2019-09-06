import React from 'react'
import propTypes from 'prop-types'

import { Card } from './Card.js'
import { MenuList } from './MenuList.js'
import { spacers } from './theme.js'

/**
 * @module
 * @param {Menu.PropTypes}
 * @returns {React.Component}
 *
 * @example import { Menu } from '@dhis2/ui-core'
 *
 * @see Specification: {@link https://github.com/dhis2/design-system/blob/master/molecules/menu.md|Design system}
 * @see Live demo: {@link /demo/?path=/story/menu--default|Storybook}
 */
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

/**
 * @typedef {Object} PropTypes
 * @static
 *
 * @prop {*} [children]
 * @prop {string} [className]
 */
Menu.propTypes = {
    children: MenuList.propTypes.children,
    className: propTypes.string,
}

export { Menu }