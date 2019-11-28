import React from 'react'
import { storiesOf } from '@storybook/react'
import { MultiSelectField, MultiSelectOption } from '../src'

storiesOf('MultiSelectField', module).add('With label', () => (
    <MultiSelectField label="The label">
        <MultiSelectOption value="1" label="one" />,
        <MultiSelectOption value="2" label="two" />,
        <MultiSelectOption value="3" label="three" />,
    </MultiSelectField>
))
