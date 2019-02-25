function argsEqual(args1, args2) {
    return args1.every((arg, idx) => args2[idx] === arg)
}

export default function memoize(func) {
    let prevRes
    let prevArgs = []
    let calledOnce = false

    return function(...args) {
        if (calledOnce && argsEqual(prevArgs, args)) {
            return prevRes
        }
        prevRes = func.apply(this, args)
        prevArgs = args
        calledOnce = true
        return prevRes
    }
}
