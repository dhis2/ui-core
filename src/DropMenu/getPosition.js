export const getPosition = anchorEl => {
    if (!anchorEl) {
        return {
            top: 'auto',
            left: 'auto',
        }
    }

    const body = document.body
    const docEl = document.documentElement
    const rect = anchorEl.getBoundingClientRect()
    const scrollTop = window.pageYOffset || docEl.scrollTop || body.scrollTop
    const scrollLeft = window.pageXOffset || docEl.scrollLeft || body.scrollLeft
    const clientTop = docEl.clientTop || body.clientTop || 0
    const clientLeft = docEl.clientLeft || body.clientLeft || 0
    const top = rect.bottom + scrollTop - clientTop
    const left = rect.left + scrollLeft - clientLeft

    return {
        top: `${top}px`,
        left: `${left}px`,
    }
}
