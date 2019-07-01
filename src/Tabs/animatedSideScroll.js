const DURATION = 250

export function animatedSideScroll({
    targetEl,
    scrollBox,
    duration = DURATION,
    callback,
}) {
    const startValue = scrollBox.scrollLeft
    const endValue = getEndValue(targetEl, scrollBox, startValue)
    const change = endValue - startValue
    const step = createFrameStepper({
        scrollBox,
        duration,
        callback,
        startValue,
        endValue,
        change,
    })

    window.requestAnimationFrame(step)
}

function getEndValue(targetEl, scrollBox, startValue) {
    return Math.round(
        targetEl.offsetLeft > startValue
            ? // scrolling forward
              targetEl.offsetLeft + targetEl.offsetWidth - scrollBox.offsetWidth
            : // scrolling backwards
              targetEl.offsetLeft
    )
}

function createFrameStepper({
    scrollBox,
    duration,
    callback,
    startValue,
    endValue,
    change,
}) {
    let startTimestamp, elapsedTime, scrollValue

    return function step(timestamp) {
        if (!startTimestamp) {
            startTimestamp = timestamp
        }

        elapsedTime = timestamp - startTimestamp
        scrollValue = easeInOutQuad({
            currentTime: elapsedTime,
            duration,
            startValue,
            change,
        })

        if (elapsedTime >= duration) {
            if (scrollValue !== endValue) {
                scrollBox.scrollLeft = endValue
            }
            callback && callback()
        } else {
            scrollBox.scrollLeft = scrollValue
            window.requestAnimationFrame(step)
        }
    }
}

function easeInOutQuad({ currentTime, duration, startValue, change }) {
    return (currentTime /= duration / 2) < 1
        ? (change / 2) * currentTime * currentTime + startValue
        : (-change / 2) * (--currentTime * (currentTime - 2) - 1) + startValue
}
