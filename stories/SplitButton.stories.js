import React from 'react'
import { storiesOf } from '@storybook/react'
import { SplitButton } from '../src'

const options = []

storiesOf('SplitButton', module).add('Default', () => (
    <SplitButton label="Drop it!" list={options} />
))
