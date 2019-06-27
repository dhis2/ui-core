const DURATION = 350

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
            elapsedTime,
            duration,
            startValue,
            change,
        })

        if (elapsedTime >= duration) {
            if (scrollValue !== endValue) {
                scroll(scrollBox, endValue)
            }
            callback && callback()
        } else {
            scroll(scrollBox, scrollValue)
            window.requestAnimationFrame(step)
        }
    }
}

function scroll(scrollBox, scrollValue) {
    scrollBox.scrollLeft = scrollValue
}

function easeInOutQuad({ currentTime, duration, initialValue, change }) {
    return (currentTime /= duration / 2) < 1
        ? (change / 2) * currentTime * currentTime + initialValue
        : (-change / 2) * (--currentTime * (currentTime - 2) - 1) + initialValue
}
