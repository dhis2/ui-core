/** @format */

import { isRtl } from '../../utils/index'

export const TOP = 'top'
export const MIDDLE = 'middle'
export const BOTTOM = 'bottom'
export const LEFT = 'left'
export const CENTER = 'center'
export const RIGHT = 'right'

// Enough to make sure the popop doesn't hide under a scroll-bar
const EDGE_MARGIN = 18

export default function(
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

    if (attachPoint.horizontal === LEFT) {
        horizontal = RIGHT
    } else if (attachPoint.horizontal === RIGHT) {
        horizontal = LEFT
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
    } = getScrolllAndClientOffset()

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
            case LEFT:
                return rect.left
            case CENTER:
                return rect.left + multiplier * (el.offsetWidth / 2)
            case RIGHT:
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
            case TOP:
                return rect.top
            case MIDDLE:
                return rect.top + multiplier * (el.offsetHeight / 2)
            case BOTTOM:
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
    } = getScrolllAndClientOffset()
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
    }
}

function getScrolllAndClientOffset() {
    const body = document.body
    const docEl = document.documentElement
    return {
        scrollTop: window.pageYOffset || docEl.scrollTop || body.scrollTop,
        scrollLeft: window.pageXOffset || docEl.scrollLeft || body.scrollLeft,
        clientTop: docEl.clientTop || body.clientTop || 0,
        clientLeft: docEl.clientLeft || body.clientLeft || 0,
    }
}
