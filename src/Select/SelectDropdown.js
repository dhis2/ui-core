import React from 'react'
import propTypes from 'prop-types'
import { layers } from '../theme.js'
import { SelectMenu } from './SelectMenu.js'

const noop = () => {}

const SelectDropdown = ({ children, onClick, selected }) => (
    <React.Fragment>
        <SelectMenu className="select-menu">
            {React.Children.map(children, child => {
                const { value, label } = child.props
                const hasValue = 'value' in selected
                const hasLabel = 'label' in selected

                let active = false

                if (hasValue && hasLabel) {
                    active =
                        value === selected.value && label === selected.label
                }

                return React.cloneElement(child, {
                    ...child.props,
                    onClick: active ? noop : onClick,
                    active,
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
    selected: propTypes.object.isRequired,
}

export { SelectDropdown }
