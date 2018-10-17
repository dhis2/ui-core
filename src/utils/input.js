export function inputColorClass(checked = false, disabled = false) {
    if (checked) {
        return 'secondary-light'
    } else if (disabled) {
        return 'grey-light'
    }

    return 'grey'
}
