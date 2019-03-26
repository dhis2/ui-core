import React from 'react'
import { storiesOf } from '@storybook/react'
import { DropdownButton } from '../src'

const options = []

storiesOf('DropdownButton', module).add('Default', () => (
    <DropdownButton label="Drop it!" list={options} />
))
