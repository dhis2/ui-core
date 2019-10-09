import React from 'react'
import propTypes from 'prop-types'

const OptionsToSelected = ({ options, selected }) => {
    const selectedOption = React.Children.toArray(options).find(option => {
        const matchesValue = selected.value === option.props.value
        const matchesLabel = selected.label === option.props.label

        return matchesValue && matchesLabel
    })

    const Icon = selectedOption.props.icon

    return (
        <span>
            {Icon && <Icon />}
            {selected.label}
        </span>
    )
}

OptionsToSelected.propTypes = {
    options: propTypes.node.isRequired,
    selected: propTypes.object.isRequired,
}

export { OptionsToSelected }
