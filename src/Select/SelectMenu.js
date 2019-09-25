import React from 'react'
import propTypes from 'prop-types'
import { layers } from '../theme.js'
import { Menu } from '../Menu.js'

/**
 * @module
 * @param {SelectMenu.PropTypes} props
 * @returns {React.Component}
 * @example import { SelectMenu } from @dhis2/ui-core
 */
const SelectMenu = ({ children, onOptionClick, currentValue }) => (
    <div>
        <Menu>
            {React.Children.map(children, child => {
                return React.cloneElement(child, {
                    ...child.props,
                    onClick: onOptionClick,
                    active: child.props.value === currentValue,
                })
            })}
        </Menu>

        <style jsx>{`
            div {
                position: absolute;
                z-index: ${layers.applicationTop};
                left: 0;
                right: 0;
            }
        `}</style>
    </div>
)

/**
 * @typedef {Object} PropTypes
 * @static
 * @prop {string} [className]
 * @prop {Element} [component] - The element to show as the dropdown
 * @prop {function} [onClose] - Function to trigger when click happens outside of the DOM element
 * @prop {boolean} [stayOpen] - Decides if the menu should call the onClose function or not
 * @prop {Object} [anchorEl] - DOM node to position itself against,
 * needs to have the `getBoundingClientRect` function on its
 * `prototype`.
 */
SelectMenu.propTypes = {
    children: propTypes.node.isRequired,
    onOptionClick: propTypes.func.isRequired,
    currentValue: propTypes.string,
}

export { SelectMenu }
