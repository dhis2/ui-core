import React from 'react'

// Find an option in an array of react children
export const findOptionChild = (targetOption, optionChildren) =>
    React.Children.toArray(optionChildren).find(currentOption => {
        const matchesLabel = targetOption.label === currentOption.props.label
        const matchesValue = targetOption.value === currentOption.props.value

        return matchesLabel && matchesValue
    })

// Find an option in an array of option objects
export const findOption = (targetOption, optionArray) =>
    optionArray.find(currentOption => {
        const matchesLabel = targetOption.label === currentOption.label
        const matchesValue = targetOption.value === currentOption.value

        return matchesLabel && matchesValue
    })

// Remove an option from an array of options
export const removeOption = (targetOption, optionArray) =>
    optionArray.filter(currentOption => {
        const matchesLabel = targetOption.label === currentOption.label
        const matchesValue = targetOption.value === currentOption.value

        return !matchesLabel && !matchesValue
    })
