import React from 'react'
import propTypes from 'prop-types'
import { multiSelectedPropType } from '../common-prop-types.js'
import { Empty } from '../Select/Empty.js'

const createHandler = ({ active, onChange, selected, value, label }) => e => {
    const clickedOption = { value, label }

    e.stopPropagation()
    e.preventDefault()

    // If the option is active (i.e. currently selected), remove the option from the array of
    // selected options
    if (active) {
        // Remove the clicked option from the currently selected options
        const filtered = selected.filter(option => {
            const matchesLabel = clickedOption.label === option.label
            const matchesValue = clickedOption.value === option.value
            return !matchesLabel && !matchesValue
        })

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
        const { value, label } = child.props
        const isValidOption = 'value' in child.props && 'label' in child.props

        // Return early if the child isn't an option, to prevent attaching handlers etc.
        if (!isValidOption) {
            return child
        }

        // Check if the current option is active
        const active = !!selected.find(selection => {
            const matchesLabel = label === selection.label
            const matchesValue = value === selection.value
            return matchesLabel && matchesValue
        })

        // Create a click handler for the option
        const onClick = createHandler({
            active,
            onChange,
            selected,
            value,
            label,
        })

        return React.cloneElement(child, {
            ...child.props,
            onClick,
            active,
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
