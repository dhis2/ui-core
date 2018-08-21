import easings from './easings';

// 60 FPS means a frame lasts 1/60*1000=16.67 ms
// so this interval frequency should in theory ensure for a smooth animation
const FREQUENCY = 16;
const HORIZONTAL = 'horizontal';
const VERTICAL = 'vertical';
const END = 'end';
const START = 'start';

/**
 * to: can be an element or one of "end" "start"
 * scrollBox: can be the window object or an element
 * direction: can be one of "horizontal" "vertical"
 * offset: is a number by which to scroll beyond a target, scrolling will stop before the target if a negative number is provided
 * duration: is a number which describes the animation's duration in ms
 * callback: is an optional function to execute when the scroll animation is done
 */
export default function animatedScrollTo({
    to,
    scrollBox = window,
    direction = 'vertical',
    offset = 0,
    duration = 350,
    callback,
}) {
    const isWindowScroll = scrollBox instanceof Window;
    const scrollHandler = getScrollHandler(scrollBox, direction, isWindowScroll);
    const startValue = getStartValue(scrollBox, direction, isWindowScroll);
    const endValue = getEndValue(to, direction, scrollBox, offset, isWindowScroll);
    const change = endValue - startValue;

    let currentTime = 0;
    let scrollValue;
    const scrollInterval = setInterval(() => {
        currentTime += FREQUENCY;
        scrollValue = easings.easeInOutQuad(currentTime, startValue, change, duration);

        if (currentTime >= duration) {
            if (scrollValue !== endValue) {
                scrollHandler(endValue);
            }
            clearInterval(scrollInterval);
            callback && callback();
        } else {
            scrollHandler(scrollValue);
        }
    }, FREQUENCY);
}

function getScrollHandler(scrollBox, direction, isWindowScroll) {
    switch (true) {
        case !isWindowScroll && direction === HORIZONTAL:
            return scrollValue => (scrollBox.scrollLeft = scrollValue);
        case !isWindowScroll && direction === VERTICAL:
            return scrollValue => (scrollBox.scrollTop = scrollValue);
        case isWindowScroll && direction === HORIZONTAL:
            return scrollValue => window.scrollTo({ left: scrollValue });
        case isWindowScroll && direction === VERTICAL:
        default:
            return scrollValue => window.scrollTo({ top: scrollValue });
    }
}

function getStartValue(scrollBox, direction, isWindowScroll) {
    const doc = getDoc();
    switch (true) {
        case !isWindowScroll && direction === HORIZONTAL:
            return scrollBox.scrollLeft;
        case !isWindowScroll && direction === VERTICAL:
            return scrollBox.scrollTop;
        case isWindowScroll && direction === HORIZONTAL:
            return (window.pageXOffset || doc.scrollLeft) - (doc.clientLeft || 0);
        case isWindowScroll && direction === VERTICAL:
        default:
            return (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
    }
}

function getEndValue(to, direction, scrollBox, offset, isWindowScroll) {
    const doc = getDoc();
    const scrollingToElement = Boolean(to.nodeType);
    switch (true) {
        case scrollingToElement:
            return getElemEndValue(to, direction, scrollBox, offset, isWindowScroll);
        case to === START:
            return 0;
        case to === END && isWindowScroll && direction === HORIZONTAL:
            return doc.scrollWidth - window.innerWidth;
        case to === END && isWindowScroll && direction === VERTICAL:
        default:
            return doc.scrollHeight - window.innerHeight;
    }
}

function getElemEndValue(el, direction, scrollBox, offset, isWindowScroll) {
    const { top, left, width, height } = el.getBoundingClientRect();
    const doc = getDoc();
    const typeSelector = isWindowScroll ? 'window' : 'element';

    const movementSelector =
        (direction === HORIZONTAL && left > 0) || (direction === VERTICAL && top > 0)
            ? 'forward'
            : 'back';

    const { top: boxTop, left: boxLeft } = !isWindowScroll
        ? scrollBox.getBoundingClientRect()
        : {};

    const lookup = {
        window: {
            horizontal: {
                forward: left + window.scrollX + width + offset - doc.clientWidth,
                back: left + window.scrollX - offset,
            },
            vertical: {
                forward: top + window.scrollY + height + offset - doc.clientHeight,
                back: top + window.scrollY - offset,
            },
        },
        element: {
            horizontal: {
                forward: left - boxLeft + width + offset - scrollBox.clientWidth,
                back: left + scrollBox.scrollLeft - boxLeft - offset,
            },
            vertical: {
                forward: top - boxTop + height + offset - scrollBox.clientHeight,
                back: top + scrollBox.scrollTop - boxTop - offset,
            },
        },
    };

    return lookup[typeSelector][direction][movementSelector];
}

function getDoc() {
    return document.documentElement || document.body;
}
