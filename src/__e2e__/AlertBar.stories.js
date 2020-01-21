import React from 'react'
import { storiesOf } from '@storybook/react'
import { AlertBar } from '../index.js'

storiesOf('AlertBar', module)
    .add('Default', () => <AlertBar>Default</AlertBar>)
    .add('Custom duration', () => (
        <AlertBar duration={2000}>Custom duration</AlertBar>
    ))
    .add('Permanent with actions', () => (
        <AlertBar
            permanent
            actions={[
                { label: 'Save', onClick: () => {} },
                { label: 'Cancel', onClick: () => {} },
            ]}
        >
            With Actions
        </AlertBar>
    ))
