import React from 'react'
import { storiesOf } from '@storybook/react'
import { RadioGroup } from '../src'

import markdown from './info/molecules/radioGroup.md'

storiesOf('RadioGroup', module)
    .addParameters({
        notes: {
            markdown,
        },
    })
    .add('Default (inline)', () => (
        <RadioGroup
            name="choice"
            label="Choose something"
            value="blue"
            options={[
                { label: 'The red pill', value: 'red' },
                { label: 'The blue pill', value: 'blue' },
            ]}
        />
    ))
    .add('Stacked', () => (
        <RadioGroup
            name="choice"
            label="Choose something"
            value="blue"
            options={[
                { label: 'The red pill', value: 'red' },
                { label: 'The blue pill', value: 'blue' },
            ]}
            inline={false}
        />
    ))
    .add('Required', () => (
        <RadioGroup
            name="choice"
            label="Choose something"
            value="red"
            options={[
                { label: 'The red pill', value: 'red' },
                { label: 'The blue pill', value: 'blue' },
            ]}
            required
        />
    ))
