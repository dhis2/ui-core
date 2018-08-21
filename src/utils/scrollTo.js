import easings from './easings';
const HORIZONTAL = 'horizontal';
const VERTICAL = 'vertical';
const END = 'end';
const START = 'start';
/**
 * to: can be an element or one of "end" "start"
 * scrollTarget: can be the window object or an element
 * direction: can be one of "horizontal" "vertical"
 * duration: is a number which describes the animation's duration in ms
 * callback: is an optional function to execute when the scroll animation is done
 */
export default function scrollTo(
    to,
    scrollTarget = window,
    direction = 'vertical',
    duration = 350,
    callback
) {
    const scrollHandler = getScrollHandler(scrollTarget, direction);
    const startValue = getStartValue(scrollTarget, direction);
    const endValue = getEndValue(to, direction, scrollTarget, startValue);
    const change = endValue - startValue;
    let currTime = 0;
    const freq = 20;

    const scrollInterval = setInterval(function() {
        currTime += freq;
        const scrollValue = easings.easeInOutQuad(currTime, startValue, change, duration);
        scrollHandler(scrollValue);
        if (currTime >= duration) {
            clearInterval(scrollInterval);
            callback && callback();
        }
    }, freq);
}

function getScrollHandler(target, direction) {
    const targetIsWindow = target instanceof Window;

    switch (true) {
        case !targetIsWindow && direction === HORIZONTAL:
            return scrollValue => (target.scrollLeft = scrollValue);
        case !targetIsWindow && direction === VERTICAL:
            return scrollValue => (target.scrollTop = scrollValue);
        case targetIsWindow && direction === HORIZONTAL:
            return scrollValue => window.scrollTo({ left: scrollValue });
        case targetIsWindow && direction === VERTICAL:
        default:
            return scrollValue => window.scrollTo({ top: scrollValue });
    }
}

function getStartValue(target, direction) {
    if (target instanceof Window) {
        const doc = document.documentElement;
        if (direction === HORIZONTAL) {
            return (window.pageXOffset || doc.scrollLeft) - (doc.clientLeft || 0);
        } else {
            return (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
        }
    } else {
        if (direction === HORIZONTAL) {
            return target.scrollLeft;
        } else {
            return target.scrollTop;
        }
    }
}

function getEndValue(to, direction, scrollTarget, startValue) {
    const doc = document.documentElement;
    const scrollingToElement = Boolean(to.nodeType);
    const targetIsWindow = scrollTarget instanceof Window;

    switch (true) {
        case scrollingToElement:
            return getEndValueForElement(to, direction, scrollTarget, startValue);
        case to === START:
            return 0;
        case to === END && targetIsWindow && direction === HORIZONTAL:
            return doc.clientWidth - window.innerWidth;
        case to === END && targetIsWindow && direction === VERTICAL:
        default:
            return doc.clientHeight - window.innerHeight;
    }
}

function getEndValueForElement(el, direction, scrollTarget, startValue) {
    const { width, height } = el.getBoundingClientRect();
}
