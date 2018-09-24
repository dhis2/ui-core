/** @format */

import React from 'react'
import Button from './Button'
import * as VARIANTS from './variants'

// The DropdownButton is a component in its own right
export { default as DropdownButton } from './DropdownButton'

// Note that the generic Button can be imported from here too
// This could be convenient for switching button type based on component state
export { Button }

// These other named exports are more convenient and explicit
export const FlatButton = props => <Button variant={VARIANTS.FLAT} {...props} />
export const RaisedButton = props => (
    <Button variant={VARIANTS.RAISED} {...props} />
)
export const PrimaryButton = props => (
    <Button variant={VARIANTS.PRIMARY} {...props} />
)
export const OutlinedButton = props => (
    <Button variant={VARIANTS.OUTLINED} {...props} />
)
export const CircleButton = props => (
    <Button variant={VARIANTS.CIRCLE} {...props} />
)

export default Button
