export const TOP = 'top';
export const MIDDLE = 'middle';
export const BOTTOM = 'bottom';
export const LEFT = 'left';
export const CENTER = 'center';
export const RIGHT = 'right';

export default function(targetEl, anchorEl, horizontalAlignment, verticalAlignment) {
    const anchorPoint = getAnchorPoint(anchorEl, horizontalAlignment, verticalAlignment);
    const virtualPosition = getRelativePosition(
        targetEl,
        anchorPoint,
        horizontalAlignment,
        verticalAlignment
    );
    const restrictedPosition = getWindowContainedPosition(virtualPosition);

    return restrictedPosition;
}

function getAnchorPoint(el, horizontalAlignment, verticalAlignment) {
    let x, y;
    const rect = el.getBoundingClientRect();
    switch (horizontalAlignment) {
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

    switch (verticalAlignment) {
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

    return { x, y };
}

function getRelativePosition(el, anchor, horizontalAlignment, verticalAlignment) {
    let top, left;
    const { width, height } = el.getBoundingClientRect();

    switch (horizontalAlignment) {
        case LEFT:
            left = anchor.x;
            break;
        case CENTER:
            left = anchor.x - width / 2;
            break;
        case RIGHT:
            left = anchor.x - width;
            break;
        default:
            left = anchor.x - width;
    }

    switch (verticalAlignment) {
        case TOP:
            top = anchor.y - height;
            break;
        case MIDDLE:
            top = anchor.y - height / 2;
            break;
        case BOTTOM:
            top = anchor.y;
            break;
        default:
            top = anchor.y;
    }
    return { top, left, width, height };
}

function getWindowContainedPosition({ top, left, width, height }) {
    let containedTop = top;
    let containedLeft = left;
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;

    if (top + height > windowHeight) {
        containedTop = windowHeight - height;
    }

    if (left + width > windowWidth) {
        containedLeft = windowWidth - width;
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
