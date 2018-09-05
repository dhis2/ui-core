import { isRtl } from '../utils';

export const TOP = 'top';
export const MIDDLE = 'middle';
export const BOTTOM = 'bottom';
export const LEFT = 'left';
export const CENTER = 'center';
export const RIGHT = 'right';

const EDGE_MARGIN = 18;

export default function(targetEl, anchorEl, anchorAttachPoint, popoverAttachPoint) {
    if (isRtl()) {
        flipHorizontal([anchorAttachPoint, popoverAttachPoint]);
    }

    const anchorPosition = getAnchorPosition(anchorEl, anchorAttachPoint);
    const virtualPosition = getRelativePosition(
        targetEl,
        anchorPosition,
        popoverAttachPoint
    );
    const restrictedPosition = getWindowContainedPosition(virtualPosition);

    return restrictedPosition;
}

function flipHorizontal(attachPoints) {
    attachPoints.forEach(point => {
        if (point.horizontal === LEFT) {
            point.horizontal = RIGHT;
        } else if (point.horizontal === RIGHT) {
            point.horizontal = LEFT;
        }
    });
}

function getAnchorPosition(el, anchorAttachPoint) {
    let x, y;
    const rect = el.getBoundingClientRect();
    const { horizontal, vertical } = anchorAttachPoint;
    const { scrollTop, scrollLeft, clientTop, clientLeft } = getScrolllAndClientOffset();

    if (typeof horizontal === 'number') {
        x = rect.left + horizontal;
    } else {
        switch (horizontal) {
            case LEFT:
                x = rect.left;
                break;
            case CENTER:
                x = rect.left + rect.width / 2;
                break;
            case RIGHT:
            default:
                x = rect.right;
        }
    }

    if (typeof vertical === 'number') {
        y = rect.top + vertical;
    } else {
        switch (vertical) {
            case TOP:
                y = rect.top;
                break;
            case MIDDLE:
                y = rect.top + rect.height / 2;
                break;
            case BOTTOM:
            default:
                y = rect.top + rect.height;
        }
    }

    x += scrollLeft - clientLeft;
    y += scrollTop - clientTop;

    return { x, y };
}

function getRelativePosition(el, anchor, popoverAttachPoint) {
    let top, left;
    const { horizontal, vertical } = popoverAttachPoint;
    const rect = el.getBoundingClientRect();

    if (typeof horizontal === 'number') {
        left = rect.left + horizontal;
    } else {
        switch (horizontal) {
            case LEFT:
                left = anchor.x;
                break;
            case CENTER:
                left = anchor.x - rect.width / 2;
                break;
            case RIGHT:
            default:
                left = anchor.x - rect.width;
        }
    }

    if (typeof vertical === 'number') {
        top = rect.top + vertical;
    } else {
        switch (vertical) {
            case TOP:
                top = anchor.y;
                break;
            case MIDDLE:
                top = anchor.y - rect.height / 2;
                break;
            case BOTTOM:
            default:
                top = anchor.y - rect.height;
        }
    }

    return { top, left, width: rect.width, height: rect.height };
}

function getWindowContainedPosition({ top, left, width, height }) {
    const { scrollTop, scrollLeft, clientTop, clientLeft } = getScrolllAndClientOffset();
    const windowTopEdge = scrollTop - clientTop + EDGE_MARGIN;
    const windowBottomEdge = window.innerHeight + scrollTop - clientTop - EDGE_MARGIN;
    const windowLeftEdge = scrollLeft - clientLeft + EDGE_MARGIN;
    const windowRightEdge = window.innerWidth + scrollLeft - clientLeft - EDGE_MARGIN;

    let containedTop = top;
    let containedLeft = left;

    if (top + height > windowBottomEdge) {
        containedTop = windowBottomEdge - height;
    }

    if (left + width > windowRightEdge) {
        containedLeft = windowRightEdge - width;
    }

    if (top < windowTopEdge) {
        containedTop = windowTopEdge;
    }

    if (left < windowLeftEdge) {
        containedLeft = windowLeftEdge;
    }

    return {
        top: containedTop,
        left: containedLeft,
    };
}

function getScrolllAndClientOffset() {
    const body = document.body;
    const docEl = document.documentElement;
    return {
        scrollTop: window.pageYOffset || docEl.scrollTop || body.scrollTop,
        scrollLeft: window.pageXOffset || docEl.scrollLeft || body.scrollLeft,
        clientTop: docEl.clientTop || body.clientTop || 0,
        clientLeft: docEl.clientLeft || body.clientLeft || 0,
    };
}
