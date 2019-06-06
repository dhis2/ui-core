import React from 'react'

const instanceOfComponentFactory = (Component, isRequired) => (
    props,
    propName
) => {
    const children = props[propName]
    const count = React.Children.count(children)

    if (isRequired && count === 0) {
        return new Error(`${propName} is required.`)
    }

    if (count > 1) {
        return new Error(
            `Prop validator 'instanceOfComponent' expected 1 component instance, instead found ${count}.`
        )
    }

    if (children.type !== Component) {
        const componentName = Component.name || Component.displayName
        return new Error(
            `Child at index ${propName} is not an instance of component ${componentName}.`
        )
    }

    return null
}

export const instanceOfComponent = Component => {
    const fn = instanceOfComponentFactory(Component, false)
    fn.isRequired = instanceOfComponentFactory(Component, true)
    return fn
}
