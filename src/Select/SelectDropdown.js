import React from 'react'
import propTypes from 'prop-types'
import { SelectMenu } from './SelectMenu.js'

const noop = () => {}

const SelectDropdown = ({ children, onClick, selected, maxHeight }) => (
    <SelectMenu maxHeight={maxHeight}>
        {React.Children.map(children, child => {
            const { value, label } = child.props
            const hasValue = 'value' in selected
            const hasLabel = 'label' in selected

            let active = false

            if (hasValue && hasLabel) {
                active = value === selected.value && label === selected.label
            }

            return React.cloneElement(child, {
                ...child.props,
                onClick: active ? noop : onClick,
                active,
            })
        })}
    </SelectMenu>
)

SelectDropdown.propTypes = {
    children: propTypes.node.isRequired,
    onClick: propTypes.func.isRequired,
    selected: propTypes.object.isRequired,
    maxHeight: propTypes.string,
}

export { SelectDropdown }
