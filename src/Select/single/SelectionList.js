import React from 'react'
import propTypes from 'prop-types'
import { SelectionItem } from './SelectionItem.js'

const SelectionList = ({ options, selected }) => {
    if (React.Children.count(options) === 0) {
        return null
    }

    const selectedOption = React.Children.toArray(options).find(option => {
        const matchesValue = selected.value === option.props.value
        const matchesLabel = selected.label === option.props.label

        return matchesValue && matchesLabel
    })

    if (!selectedOption) {
        return null
    }

    return (
        <SelectionItem
            icon={selectedOption.props.icon}
            label={selected.label}
        />
    )
}

SelectionList.propTypes = {
    options: propTypes.node,
    selected: propTypes.object.isRequired,
}

export { SelectionList }
