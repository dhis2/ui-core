/** @format */

import { easeInOutQuad } from './css'

const HORIZONTAL = 'horizontal'
const VERTICAL = 'vertical'
const END = 'end'
const START = 'start'

/**
 * to: can be an element or one of "end" "start"
 * scrollBox: can be the window object or an element
 * direction: can be one of "horizontal" "vertical"
 * offset: is a number by which to scroll beyond a target, scrolling will stop before the target if a negative number is provided
 * duration: is a number which describes the animation's duration in ms
 * callback: is an optional function to execute when the scroll animation is done
 */
export function animations({
    to,
    scrollBox = window,
    direction = 'vertical',
    offset = 0,
    duration = 350,
    callback,
}) {
    const isWindowScroll = scrollBox instanceof Window
    const scrollHandler = getScrollHandler(scrollBox, direction, isWindowScroll)
    const startValue = getStartValue(scrollBox, direction, isWindowScroll)
    const endValue = getEndValue(
        to,
        direction,
        scrollBox,
        offset,
        isWindowScroll,
        startValue
    )
    const change = endValue - startValue

    let startTimestamp, elapsedTime, scrollValue
    function step(timestamp) {
        if (!startTimestamp) {
            startTimestamp = timestamp
        }

        elapsedTime = timestamp - startTimestamp
        scrollValue = easeInOutQuad(elapsedTime, startValue, change, duration)

        if (elapsedTime >= duration) {
            if (scrollValue !== endValue) {
                scrollHandler(endValue)
            }
            callback && callback()
        } else {
            scrollHandler(scrollValue)
            window.requestAnimationFrame(step)
        }
    }

    window.requestAnimationFrame(step)
}

function getScrollHandler(scrollBox, direction, isWindowScroll) {
    switch (true) {
        case !isWindowScroll && direction === HORIZONTAL:
            return scrollValue => (scrollBox.scrollLeft = scrollValue)
        case !isWindowScroll && direction === VERTICAL:
            return scrollValue => (scrollBox.scrollTop = scrollValue)
        case isWindowScroll && direction === HORIZONTAL:
            return scrollValue => window.scrollTo({ left: scrollValue })
        case isWindowScroll && direction === VERTICAL:
        default:
            return scrollValue => window.scrollTo({ top: scrollValue })
    }
}

function getStartValue(scrollBox, direction, isWindowScroll) {
    const doc = getDoc()
    switch (true) {
        case !isWindowScroll && direction === HORIZONTAL:
            return scrollBox.scrollLeft
        case !isWindowScroll && direction === VERTICAL:
            return scrollBox.scrollTop
        case isWindowScroll && direction === HORIZONTAL:
            return (
                (window.pageXOffset || doc.scrollLeft) - (doc.clientLeft || 0)
            )
        case isWindowScroll && direction === VERTICAL:
        default:
            return (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0)
    }
}

function getEndValue(
    to,
    direction,
    scrollBox,
    offset,
    isWindowScroll,
    startValue
) {
    const doc = getDoc()
    const scrollingToElement = Boolean(to.nodeType)
    switch (true) {
        case scrollingToElement:
            return getElemEndValue(
                to,
                direction,
                scrollBox,
                offset,
                isWindowScroll,
                startValue
            )
        case to === START:
            return 0
        case to === END && isWindowScroll && direction === HORIZONTAL:
            return doc.scrollWidth - window.innerWidth
        case to === END && isWindowScroll && direction === VERTICAL:
        default:
            return doc.scrollHeight - window.innerHeight
    }
}

function getElemEndValue(
    el,
    direction,
    scrollBox,
    offset,
    isWindowScroll,
    startValue
) {
    const { top, left, width, height } = el.getBoundingClientRect()
    const doc = getDoc()
    const typeSelector = isWindowScroll ? 'window' : 'element'
    const movementSelector =
        (direction === HORIZONTAL && el.offsetLeft > startValue) ||
        (direction === VERTICAL && el.offsetTop > startValue)
            ? 'forward'
            : 'back'

    const lookup = {
        window: {
            horizontal: {
                forward:
                    left + window.scrollX + width + offset - doc.clientWidth,
                back: left + window.scrollX - offset,
            },
            vertical: {
                forward:
                    top + window.scrollY + height + offset - doc.clientHeight,
                back: top + window.scrollY - offset,
            },
        },
        element: {
            horizontal: {
                forward:
                    el.offsetLeft +
                    el.offsetWidth -
                    scrollBox.offsetWidth +
                    offset,
                back: el.offsetLeft - offset,
            },
            vertical: {
                forward:
                    el.offsetTop +
                    el.offsetHeight -
                    scrollBox.clientHeight +
                    offset,
                back: el.offsetTop - offset,
            },
        },
    }
    return Math.round(lookup[typeSelector][direction][movementSelector])
}

function getDoc() {
    return document.documentElement || document.body
}
