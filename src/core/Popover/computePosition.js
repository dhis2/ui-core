/** @format */

import { isDocRTL } from '../../utils'

// Enough to make sure the popop doesn't hide under a scroll-bar
const EDGE_MARGIN = 18

export default function computePosition(
    targetEl,
    anchorEl,
    anchorPosition,
    popoverPosition
) {
    const position = getAnchorPosition(
        anchorEl,
        isDocRTL() ? flipHorizontal(anchorPosition) : anchorPosition
    )
    const relativePosition = getRelativePosition(
        targetEl,
        position,
        isDocRTL() ? flipHorizontal(popoverPosition) : popoverPosition
    )

    return getWindowContainedPosition(relativePosition)
}

function flipHorizontal(position) {
    let horizontal = position.horizontal

    if (position.horizontal === 'left') {
        horizontal = 'right'
    } else if (position.horizontal === 'right') {
        horizontal = 'left'
    }

    return { ...position, horizontal }
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

function getHorizontalPosition(horizontal, el, rect, toLeft = false) {
    const multiplier = toLeft ? -1 : 1

    if (typeof horizontal === 'number') {
        return rect.left + horizontal
    } else if (horizontal === 'left') {
        return rect.left
    } else if (horizontal === 'center') {
        return rect.left + multiplier * (el.offsetWidth / 2)
    }

    return rect.left + multiplier * el.offsetWidth
}

function getVerticalPosition(vertical, el, rect, toLeft = false) {
    const multiplier = toLeft ? -1 : 1

    if (typeof vertical === 'number') {
        return rect.top + vertical
    } else if (vertical === 'top') {
        return rect.top
    } else if (vertical === 'middle') {
        return rect.top + multiplier * (el.offsetHeight / 2)
    }

    return rect.top + multiplier * el.offsetHeight
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
