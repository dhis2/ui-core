export const removeOption = (targetOption, selectedOptions) =>
    selectedOptions.filter(currentOption => {
        const matchesLabel = targetOption.label === currentOption.label
        const matchesValue = targetOption.value === currentOption.value

        return !matchesLabel && !matchesValue
    })
