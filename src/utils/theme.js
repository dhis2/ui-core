/**
 * Provide static theme classes for components to be used in cx.bind
 * e.g. 'primary', 'primary-bg'
 *
 * @format
 * @returns { 'primary': true , 'primary-bg': true }
 */

export function t(...classes) {
    const obj = {}

    classes.forEach(n => {
        if (typeof n === 'string' || typeof n === 'number' || !!n) {
            obj[n] = true
        }
    })

    return obj
}
