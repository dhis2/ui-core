import { colors } from '../theme.js'

export const borderColor = colors.grey400
export const borderRadius = '3px'

export const isOption = (left, right) =>
    left.label === right.label && left.value === right.value

export const findOptionIndex = (options, option) =>
    options.findIndex(current => isOption(current, option))

export const findOption = (options, option) =>
    options.find(current => isOption(current, option))

export const addOption = (options, option) => {
    const found = findOption(options, option)
    if (found) return options
    return [...options, option]
}

export const removeOption = (options, option) => {
    const index = findOptionIndex(options, option)

    if (index === -1) return options
    if (index === 0) return options.slice(1)

    return [...options.slice(0, index), ...options.slice(index + 1)]
}

export const toggleOption = (options, option) =>
    findOption(options, option)
        ? removeOption(options, option)
        : addOption(options, option)

export const toggleOptions = (
    collection,
    optionsToToggle,
    modifier = toggleOption
) => {
    return optionsToToggle.reduce(
        (curSelected, option) => modifier(curSelected, option),
        collection
    )
}
