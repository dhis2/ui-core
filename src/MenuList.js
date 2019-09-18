import React from 'react'
import propTypes from 'prop-types'

/**
 * @module
 * @param {MenuList.PropTypes}
 * @returns {React.Component}
 *
 * @example import { MenuList } from '@dhis2/ui-core'
 *
 * @see Specification: {@link https://github.com/dhis2/design-system/blob/master/molecules/menu.md|Design system}
 * @see Live demo: {@link /demo/?path=/story/menulist--default|Storybook}
 */
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

/**
 * @typedef {Object} PropTypes
 * @static
 *
 * @prop {Element} children
 * @prop {string} [className]
 */
MenuList.propTypes = {
    className: propTypes.string,
    children: propTypes.node.isRequired,
}

export { MenuList }
