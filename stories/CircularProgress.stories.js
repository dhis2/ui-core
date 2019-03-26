import React from 'react'
import { storiesOf } from '@storybook/react'
import { CircularProgress } from '../src'

storiesOf('CircularProgress', module)
    .add('Default', () => <CircularProgress />)

    .add('Overlay', () => <CircularProgress overlay={true} />)

    .add('Large', () => <CircularProgress size="large" />)
