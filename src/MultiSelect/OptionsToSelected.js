import React from 'react'
import propTypes from 'prop-types'
import { Chip } from '../Chip.js'

const OptionsToSelected = ({ options, selected, onOptionRemove }) => {
    if (!options) {
        return null
    }

    const optionsArray = React.Children.toArray(options)
    const selectedOptions = selected.map(({ value, label }) => {
        return optionsArray.find(option => {
            const matchesValue = value === option.props.value
            const matchesLabel = label === option.props.label

            return matchesValue && matchesLabel
        })
    })

    if (!selectedOptions) {
        return null
    }

    return (
        <React.Fragment>
            {selectedOptions.map(option => (
                <Chip
                    key={option.props.label}
                    onRemove={() =>
                        onOptionRemove({
                            value: option.props.value,
                            label: option.props.label,
                        })
                    }
                >
                    {option.props.label}
                </Chip>
            ))}
        </React.Fragment>
    )
}

OptionsToSelected.propTypes = {
    options: propTypes.node,
    selected: propTypes.array.isRequired,
    onOptionRemove: propTypes.func.isRequired,
}

export { OptionsToSelected }
