import React from 'react'
import propTypes from 'prop-types'
import { Selected } from './Selected.js'

const OptionsToSelected = ({ options, selected }) => {
    const selectedOption = React.Children.toArray(options).find(option => {
        const matchesValue = selected.value === option.props.value
        const matchesLabel = selected.label === option.props.label

        return matchesValue && matchesLabel
    })

    if (!selectedOption) {
        return null
    }

    return <Selected icon={selectedOption.props.icon} label={selected.label} />
}

OptionsToSelected.propTypes = {
    options: propTypes.node.isRequired,
    selected: propTypes.object.isRequired,
}

export { OptionsToSelected }
