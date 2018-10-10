/**
 *
 * @param fn
 * @param threshold
 * @param scope     the (this) context in which the function runs
 */
export function throttle(fn, threshold = 150, scope = undefined) {
    let last
    let deferTimer

    return function() {
        let context = scope || this

        const now = Date.now()
        const args = arguments
        if (last && now < last + threshold) {
            // hold on to it
            clearTimeout(deferTimer)
            deferTimer = setTimeout(function() {
                last = now
                fn.apply(context, args)
            }, threshold)
        } else {
            last = now
            fn.apply(context, args)
        }
    }
}

/**
 * defers running the function passed as argument by 1 millisecond
 *
 * @param fn
 */
export function defer(fn) {
    setTimeout(fn, 1)
}
