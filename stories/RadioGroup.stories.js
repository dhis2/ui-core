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
    .add('Without label', () => (
        <RadioGroup
            name="choice"
            value="red"
            options={[
                { label: 'The red pill', value: 'red' },
                { label: 'The blue pill', value: 'blue' },
            ]}
            required
        />
    ))
    .add('Statuses', () => (
        <>
            <RadioGroup
                name="valid"
                label="Valid"
                value="red"
                options={[
                    { label: 'The red pill', value: 'red' },
                    { label: 'The blue pill', value: 'blue' },
                ]}
                valid
            />
            <br />
            <RadioGroup
                name="warning"
                label="Warning"
                value="red"
                options={[
                    { label: 'The red pill', value: 'red' },
                    { label: 'The blue pill', value: 'blue' },
                ]}
                warning
            />
            <br />
            <RadioGroup
                name="error"
                label="Error"
                value="red"
                options={[
                    { label: 'The red pill', value: 'red' },
                    { label: 'The blue pill', value: 'blue' },
                ]}
                error
            />
            <br />
            <RadioGroup
                name="disabled"
                label="Disabled"
                value="red"
                options={[
                    { label: 'The red pill', value: 'red' },
                    { label: 'The blue pill', value: 'blue' },
                ]}
                disabled
            />
        </>
    ))
