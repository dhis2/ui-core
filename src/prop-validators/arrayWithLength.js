import propTypes from 'prop-types'

const arrayWithLengthFactory = ({
    min = 0,
    max = Infinity,
    propType,
    isRequired,
}) => (props, propName, componentName) => {
    const arr = props[propName]

    if (isRequired && typeof arr === 'undefined') {
        return new Error(`${propName} is required.`)
    }

    if (arr && !Array.isArray(arr)) {
        return new Error(`${propName} is not an array.`)
    }

    if (arr && arr.length > max) {
        return new Error(
            `${propName} array exceeds the maximum length of ${max}`
        )
    }

    if (arr && arr.length < min) {
        return new Error(
            `${propName} array length lower than the minimum of ${min}`
        )
    }

    if (arr && propType) {
        const len = arr.length
        for (let i = 0; i < len; i++) {
            propTypes.checkPropTypes(
                {
                    [i]: propType,
                },
                arr,
                propName,
                componentName
            )
        }
    }

    return null
}

export const arrayWithLength = (min, max, propType) => {
    const fn = arrayWithLengthFactory({ min, max, propType, isRequired: false })
    fn.isRequired = arrayWithLengthFactory({
        min,
        max,
        propType,
        isRequired: true,
    })
    return fn
}
