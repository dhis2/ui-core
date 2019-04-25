import React from 'react'
import { storiesOf } from '@storybook/react'
import { Help } from '../src'

storiesOf('Help', module)
    .add('Default', () => <Help>Allow me to be of assistance</Help>)

    .add('Status: Warning', () => (
        <Help status="warning">Allow me to be of assistance</Help>
    ))
    .add('Status: Valid', () => (
        <Help status="valid">Allow me to be of assistance</Help>
    ))
    .add('Status: Error', () => (
        <Help status="error">Allow me to be of assistance</Help>
    ))
