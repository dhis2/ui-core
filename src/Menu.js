import React from 'react'
import propTypes from '@dhis2/prop-types'

import { Card } from './Card.js'
import { MenuList } from './MenuList.js'
import { spacers } from './theme.js'
;('') // TODO: https://github.com/jsdoc/jsdoc/issues/1718

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
const Menu = ({ children, className, dataTest }) => (
    <div className={className} data-test={dataTest}>
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

Menu.defaultProps = {
    dataTest: 'dhis2-uicore-menu',
}

/**
 * @typedef {Object} PropTypes
 * @static
 *
 * @prop {*} [children]
 * @prop {string} [className]
 * @prop {string} [dataTest]
 */
Menu.propTypes = {
    children: MenuList.propTypes.children,
    className: propTypes.string,
    dataTest: propTypes.string,
}

export { Menu }
