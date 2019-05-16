export const extractBodyStyles = () => ({
    overflow: document.body.style.overflow,
    overflowX: document.body.style.overflowX,
    overflowY: document.body.style.overflowY,
})

export const disableScroll = () => {
    document.body.style.overflow = 'hidden'
    document.body.style.overflowX = 'hidden'
    document.body.style.overflowY = 'hidden'
}

export const setBodyStyles = styles => {
    Object.assign(document.body.style, styles)
}

export const getScrollAndClientOffset = () => {
    const body = document.body
    const docEl = document.documentElement

    return {
        scrollTop: window.pageYOffset || docEl.scrollTop || body.scrollTop,
        scrollLeft: window.pageXOffset || docEl.scrollLeft || body.scrollLeft,
        clientTop: docEl.clientTop || body.clientTop || 0,
        clientLeft: docEl.clientLeft || body.clientLeft || 0,
    }
}

export const getPosition = (
    anchorHorizontal,
    anchorVertical,
    popover,
    hasScreencover
) => {
    if (!anchorHorizontal || !anchorVertical || !popover) {
        return { left: 0, top: 0 }
    }

    const styles = {}
    const viewportWidth = window.innerWidth
    const viewportHeight = window.innerHeight
    const { scrollTop, clientTop } = getScrollAndClientOffset()

    const anchorRectHorizontal = anchorHorizontal.getBoundingClientRect()
    const anchorRectVertical = anchorVertical.getBoundingClientRect()
    const popoverRect = popover.getBoundingClientRect()

    const leftOffset = anchorRectHorizontal.x + anchorRectHorizontal.width
    const rightOffset = anchorRectHorizontal.x - popoverRect.width

    const fitsToTheLeft = viewportWidth - leftOffset - popoverRect.width > 0
    const fitsToTheRight = rightOffset > 0
    const fitsToTheTop =
        viewportHeight - anchorRectHorizontal.y > popoverRect.height

    const left = fitsToTheLeft ? leftOffset : rightOffset

    styles.left = left + 'px'

    if (fitsToTheTop) {
        if (hasScreencover) {
            styles.top = (scrollTop || clientTop) + anchorRectVertical.y + 'px'
        } else {
            styles.top = anchorRectVertical.y + 'px'
        }

        styles.bottom = 'auto'
    } else {
        styles.bottom = 0
        styles.top = 'auto'
    }

    return styles
}
