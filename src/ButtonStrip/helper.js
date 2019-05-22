import React from 'react'
import { Button } from '../Button'

export const buttonArrayPropType = (props, propName, componentName) => {
    const prop = props[propName]

    let error = null
    let count = 0

    React.Children.forEach(prop, function(child) {
        count++
        if (child.type !== Button) {
            error = new Error(
                `${componentName} children should be of type 'Button'.`
            )
        }
    })

    if (count < 2) {
        error = new Error(`${componentName} should have at least 2 children.`)
    }

    return error
}
