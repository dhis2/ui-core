import React from 'react'
import propTypes from 'prop-types'
import { multiSelectedPropType } from '../common-prop-types.js'
import { Empty } from '../Select/Empty.js'

const createHandler = ({ active, onChange, selected }) => ({
    value,
    label,
}) => {
    // If the option is active, remove it from selected
    if (active) {
        const filtered = selected.filter(selection => {
            const matchesLabel = label === selection.label
            const matchesValue = value === selection.value
            return !matchesLabel && !matchesValue
        })
        return onChange(filtered)
    }

    // Otherwise, add it to selected
    return onChange(selected.concat([{ value, label }]))
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
