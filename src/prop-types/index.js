export const boolAndMutuallyExclusiveWith = (...excludedPropNames) => (
    props,
    propName,
    componentName
) => {
    const prop = props[propName]
    const propType = typeof prop
    let error = null

    if (excludedPropNames.length === 0) {
        error = new Error(
            `boolAndMutuallyExclusiveWith was called without any arguments for property '${propName}'.`
        )
    }

    // may be either true/false or undefined
    if (propType !== 'boolean' && propType !== 'undefined') {
        error = new Error(
            `'${propName}' should be boolean. Instead received type '${propType}'.`
        )
    }

    if (prop && excludedPropNames.some(propName => props[propName])) {
        const names = excludedPropNames.join(', ')
        error = new Error(
            `Property '${propName}' is mutually exclusive with '${names}', but multiple values are true.`
        )
    }

    return error
}
