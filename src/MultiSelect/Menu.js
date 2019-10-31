import React from 'react'
import propTypes from 'prop-types'
import { multiSelectedPropType } from '../common-prop-types.js'
import { Empty } from '../Select/Empty.js'
import { removeOption } from './remove-option.js'

const onDisabledClick = e => {
    e.stopPropagation()
    e.preventDefault()
}

const createHandler = ({ isActive, onChange, selected, value, label }) => e => {
    const clickedOption = { value, label }

    e.stopPropagation()
    e.preventDefault()

    // If the option is currently selected remove it from the array of selected options
    if (isActive) {
        const filtered = removeOption(clickedOption, selected)

        return onChange(filtered)
    }

    // Otherwise, add it to selected
    return onChange(selected.concat([clickedOption]))
}

const Menu = ({ options, onChange, selected, empty }) => {
    if (React.Children.count(options) === 0) {
        // If it's a string, supply it to our <Empty> component so it looks better
        if (typeof empty === 'string') {
            return <Empty message={empty} />
        }

        // Otherwise just render the supplied markup
        return empty
    }

    const children = React.Children.map(options, child => {
        const { value, label, disabled: isDisabled } = child.props
        const isValidOption = 'value' in child.props && 'label' in child.props

        // Return early if the child isn't an option, to prevent attaching handlers etc.
        if (!isValidOption) {
            return child
        }

        // Active means the option is currently selected
        const isActive = !!selected.find(selection => {
            const matchesLabel = label === selection.label
            const matchesValue = value === selection.value
            return matchesLabel && matchesValue
        })

        // Create the appropriate click handler for the option
        const onClick = isDisabled
            ? onDisabledClick
            : createHandler({
                  isActive,
                  onChange,
                  selected,
                  value,
                  label,
              })

        return React.cloneElement(child, {
            ...child.props,
            onClick,
            active: isActive,
        })
    })

    return <React.Fragment>{children}</React.Fragment>
}

Menu.propTypes = {
    empty: propTypes.node,
    options: propTypes.node,
    onChange: propTypes.func,
    selected: multiSelectedPropType,
}

export { Menu }
