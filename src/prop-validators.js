import propTypes from 'prop-types'

export const mutuallyExclusive = (exlusivePropNames, propType) => (
    props,
    propName,
    componentName
) => {
    if (exlusivePropNames.length === 0) {
        return new Error(
            `mutuallyExclusive was called without any arguments for property '${propName}'.`
        )
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
