/** @format */

import { isRtl } from '../../utils'

// Enough to make sure the popop doesn't hide under a scroll-bar
const EDGE_MARGIN = 18

export default function computePosition(
    targetEl,
    anchorEl,
    anchorAttachPoint,
    popoverAttachPoint
) {
    const anchorPosition = getAnchorPosition(
        anchorEl,
        isRtl() ? flipHorizontal(anchorAttachPoint) : anchorAttachPoint
    )
    const relativePosition = getRelativePosition(
        targetEl,
        anchorPosition,
        isRtl() ? flipHorizontal(popoverAttachPoint) : popoverAttachPoint
    )

    return getWindowContainedPosition(relativePosition)
}

function flipHorizontal(attachPoint) {
    let horizontal = attachPoint.horizontal

    if (attachPoint.horizontal === 'left') {
        horizontal = 'right'
    } else if (attachPoint.horizontal === 'right') {
        horizontal = 'left'
    }

    return { ...attachPoint, horizontal }
}

function getAnchorPosition(el, { horizontal, vertical }) {
    const rect = el.getBoundingClientRect()
    const {
        scrollTop,
        scrollLeft,
        clientTop,
        clientLeft,
    } = getScrollAndClientOffset()

    return {
        left:
            getHorizontalPosition(horizontal, el, rect) +
            scrollLeft -
            clientLeft,
        top: getVerticalPosition(vertical, el, rect) + scrollTop - clientTop,
    }
}

function getRelativePosition(el, anchor, { horizontal, vertical }) {
    return {
        top: getVerticalPosition(vertical, el, anchor, true),
        left: getHorizontalPosition(horizontal, el, anchor, true),
        width: el.offsetWidth,
        height: el.offsetHeight,
    }
}

function getHorizontalPosition(horizontal, el, rect, toLeft) {
    const multiplier = toLeft ? -1 : 1
    if (typeof horizontal === 'number') {
        return rect.left + horizontal
    } else {
        switch (horizontal) {
            case 'left':
                return rect.left
            case 'center':
                return rect.left + multiplier * (el.offsetWidth / 2)
            case 'right':
            default:
                return rect.left + multiplier * el.offsetWidth
        }
    }
}

function getVerticalPosition(vertical, el, rect, toLeft) {
    const multiplier = toLeft ? -1 : 1
    if (typeof vertical === 'number') {
        return rect.top + vertical
    } else {
        switch (vertical) {
            case 'top':
                return rect.top
            case 'middle':
                return rect.top + multiplier * (el.offsetHeight / 2)
            case 'bottom':
            default:
                return rect.top + multiplier * el.offsetHeight
        }
    }
}

function getWindowContainedPosition({ top, left, width, height }) {
    const {
        scrollTop,
        scrollLeft,
        clientTop,
        clientLeft,
    } = getScrollAndClientOffset()
    const windowTopEdge = scrollTop - clientTop + EDGE_MARGIN
    const windowBottomEdge =
        window.innerHeight + scrollTop - clientTop - EDGE_MARGIN
    const windowLeftEdge = scrollLeft - clientLeft + EDGE_MARGIN
    const windowRightEdge =
        window.innerWidth + scrollLeft - clientLeft - EDGE_MARGIN

    let containedTop = top
    let containedLeft = left

    if (top + height > windowBottomEdge) {
        containedTop = windowBottomEdge - height
    }

    if (left + width > windowRightEdge) {
        containedLeft = windowRightEdge - width
    }

    if (top < windowTopEdge) {
        containedTop = windowTopEdge
    }

    if (left < windowLeftEdge) {
        containedLeft = windowLeftEdge
    }

    return {
        top: containedTop,
        left: containedLeft,
        opacity: 1,
    }
}

function getScrollAndClientOffset() {
    const body = document.body
    const docEl = document.documentElement
    return {
        scrollTop: window.pageYOffset || docEl.scrollTop || body.scrollTop,
        scrollLeft: window.pageXOffset || docEl.scrollLeft || body.scrollLeft,
        clientTop: docEl.clientTop || body.clientTop || 0,
        clientLeft: docEl.clientLeft || body.clientLeft || 0,
    }
}
