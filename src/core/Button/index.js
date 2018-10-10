import React from 'react'
import Button from './Button'

export * from './DropdownButton'

export const FlatButton = props => <Button kind="flat" {...props} />
export const RaisedButton = props => <Button kind="raised" {...props} />
export const PrimaryButton = props => <Button kind="primary" {...props} />
export const OutlinedButton = props => <Button kind="outlined" {...props} />
export const CircleButton = props => <Button kind="circle" {...props} />

export { Button }
export default Button
