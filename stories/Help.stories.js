import React from 'react'
import { storiesOf } from '@storybook/react'
import { Help } from '../src'

storiesOf('Help', module)
    .add('Default', () => <Help text="Allow me to be of assistance" />)

    .add('Status: Warning', () => (
        <Help status="warning" text="Allow me to be of assistance" />
    ))
    .add('Status: Valid', () => (
        <Help status="valid" text="Allow me to be of assistance" />
    ))
    .add('Status: Error', () => (
        <Help status="error" text="Allow me to be of assistance" />
    ))
