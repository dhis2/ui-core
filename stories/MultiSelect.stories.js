import React from 'react'
import { storiesOf } from '@storybook/react'
import { MultiSelect, MultiOption } from '../src'

storiesOf('MultiSelect', module)
    .add('Displays a single selected option', () => (
        <MultiSelect
            onChange={values =>
                alert(`Values changed to ${JSON.stringify(values, null, 2)}`)
            }
            selected={[{ label: 'one', value: '1' }]}
            placeholder="Please select a value"
        >
            <MultiOption label="one" value="1" />
            <MultiOption label="two" value="2" />
            <MultiOption label="three" value="3" />
            <MultiOption label="four" value="4" />
        </MultiSelect>
    ))
    .add('Displays multiple selected options', () => (
        <MultiSelect
            onChange={values =>
                alert(`Values changed to ${JSON.stringify(values, null, 2)}`)
            }
            selected={[
                { label: 'one', value: '1' },
                { label: 'two', value: '2' },
            ]}
            placeholder="Please select a value"
        >
            <MultiOption label="one" value="1" />
            <MultiOption label="two" value="2" />
            <MultiOption label="three" value="3" />
            <MultiOption label="four" value="4" />
        </MultiSelect>
    ))
