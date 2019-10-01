import React from 'react'
import propTypes from 'prop-types'
import { layers } from '../theme.js'
import { SelectMenu } from './SelectMenu.js'

const SelectDropdown = ({ children, onClick, value }) => (
    <React.Fragment>
        <SelectMenu className="select-menu">
            {React.Children.map(children, child => {
                return React.cloneElement(child, {
                    ...child.props,
                    onClick: onClick(child.props.label),
                    active: child.props.value === value,
                })
            })}
        </SelectMenu>

        <style jsx>{`
            .select-menu {
                position: absolute;
                z-index: ${layers.applicationTop};
                left: 0;
                right: 0;
            }
        `}</style>
    </React.Fragment>
)

SelectDropdown.propTypes = {
    children: propTypes.node.isRequired,
    onClick: propTypes.func.isRequired,
    value: propTypes.string.isRequired,
}

export { SelectDropdown }
