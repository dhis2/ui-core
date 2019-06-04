import React from 'react'
import { storiesOf } from '@storybook/react'
import { CircularLoader } from '../src'

storiesOf('CircularLoader', module)
    .add('Default', () => <CircularLoader />)

    .add('Small', () => <CircularLoader small />)

    .add('Large', () => <CircularLoader large />)
