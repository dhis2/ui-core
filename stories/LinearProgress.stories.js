import React from 'react'
import { storiesOf } from '@storybook/react'
import { LinearProgress } from '../src'

storiesOf('LinearProgress', module)
    .add('Indeterminate', () => <LinearProgress />)

    .add('Determinate', () => <LinearProgress amount={60} />)
