/** @format */

export default function(fn, threshhold = 150, scope) {
    let last
    let deferTimer
    return function() {
        var context = scope || this

        const now = Date.now()
        const args = arguments
        if (last && now < last + threshhold) {
            // hold on to it
            clearTimeout(deferTimer)
            deferTimer = setTimeout(function() {
                last = now
                fn.apply(context, args)
            }, threshhold)
        } else {
            last = now
            fn.apply(context, args)
        }
    }
}
