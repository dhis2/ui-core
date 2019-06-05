export const getElementInnerDimension = (element, direction) => {
    const attribute = direction === 'vertical' ? 'Height' : 'Width'

    if (element === window || element === document.documentElement) {
        return window[`inner${attribute}`]
    }

    if (element === document.body) {
        return Math.max(
            document.documentElement[`client${attribute}`],
            document.body[`scroll${attribute}`],
            document.documentElement[`scroll${attribute}`],
            document.body[`offset${attribute}`],
            document.documentElement[`offset${attribute}`]
        )
    }

    return parseInt(
        window
            .getComputedStyle(element, null)
            .getPropertyValue(attribute.toLowerCase())
            .replace('px', ''),
        10
    )
}

export const getViewportOffset = () => {
    const doc = document.documentElement
    const left = (window.pageXOffset || doc.scrollLeft) - (doc.clientLeft || 0)
    const top = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0)

    return { left, top }
}

export const getElementOffset = element => {
    if (element === document.body) {
        return 0
    }

    const viewportOffset = getViewportOffset()

    if (element === window || element === document.documentElement) {
        return viewportOffset
    }

    const rect = element.getBoundingClientRect()
    const left = viewportOffset.left + rect.left
    const top = viewportOffset.top + rect.top

    return { left, top }
}

export const doesElementFitInsideContainer = (element, container) => {
    const containerWidth = getElementInnerDimension(container, 'horizontal')
    const containerHeight = getElementInnerDimension(container, 'vertical')
    const elementRect = element.getBoundingClientRect()

    return (
        elementRect.width <= containerWidth &&
        elementRect.height <= containerHeight
    )
}
