import { isRtl } from '../utils';

export const TOP = 'top';
export const MIDDLE = 'middle';
export const BOTTOM = 'bottom';
export const LEFT = 'left';
export const CENTER = 'center';
export const RIGHT = 'right';

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
    const { horizontal, vertical } = anchorAttachPoint;
    const rect = el.getBoundingClientRect();

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
                x = rect.right;
                break;
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
                y = rect.bottom;
                break;
            default:
                y = rect.bottom;
        }
    }

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
                left = anchor.x - rect.width;
                break;
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
                top = anchor.y - rect.height;
                break;
            default:
                top = anchor.y;
        }
    }

    return { top, left, width: rect.width, height: rect.height };
}

function getWindowContainedPosition({ top, left, width, height }) {
    let containedTop = top;
    let containedLeft = left;

    if (top + height > window.innerHeight) {
        containedTop = window.innerHeight - height;
    }

    if (left + width > window.innerWidth) {
        containedLeft = window.innerWidth - width;
    }

    if (top < 0) {
        containedTop = 0;
    }

    if (left < 0) {
        containedLeft = 0;
    }

    return {
        top: containedTop,
        left: containedLeft,
    };
}
