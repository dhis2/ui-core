import React from 'react'
import { storiesOf } from '@storybook/react'
import { CircularProgress } from '../src'

storiesOf('CircularProgress', module)
    .add('Default', () => <CircularProgress />)

    .add('Overlay page', () => <CircularProgress overlay />)

    .add('Small', () => <CircularProgress small />)

    .add('Large', () => <CircularProgress large />)
