import propTypes from 'prop-types'

const mutuallyExclusiveFactory = (exlusivePropNames, propType, isRequired) => (
    props,
    propName,
    componentName
) => {
    if (exlusivePropNames.length === 0) {
        return new Error(
            `mutuallyExclusive was called without any arguments for property '${propName}'.`
        )
    }

    if (isRequired && typeof props[propName] === 'undefined') {
        return new Error(`${propName} is required.`)
    }

    // This is how to programatically invoke a propTypes check
    // https://github.com/facebook/prop-types#proptypescheckproptypes
    propTypes.checkPropTypes(
        {
            [propName]: propType,
        },
        props,
        propName,
        componentName
    )

    if (props[propName]) {
        const thruthySiblingPropName = exlusivePropNames.find(
            name => props[name] && name !== propName
        )

        if (thruthySiblingPropName) {
            return new Error(
                `Property '${propName}' is mutually exclusive with '${thruthySiblingPropName}', but both have a value.`
            )
        }
    }

    return null
}

export const mutuallyExclusive = (exlusivePropNames, propType) => {
    const fn = mutuallyExclusiveFactory(exlusivePropNames, propType, false)
    fn.isRequired = mutuallyExclusiveFactory(exlusivePropNames, propType, true)
    return fn
}
