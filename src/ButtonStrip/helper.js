import React from 'react'
import { Button } from '../Button'

export const buttonArrayPropType = (props, propName, componentName) => {
    const prop = props[propName]

    let error = null

    if (React.Children.count(prop) < 2) {
        error = new Error(`${componentName} should have at least 2 children.`)
    }

    React.Children.forEach(prop, function(child) {
        if (child.type !== Button) {
            error = new Error(
                `${componentName} children should be of type 'Button'.`
            )
        }
    })

    return error
}
