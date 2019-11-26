import React from 'react'
import { storiesOf } from '@storybook/react'
import { MultiSelect, MultiSelectOption } from '../src'

storiesOf('MultiSelect', module)
    .add('With options', () => (
        <MultiSelect
            className="select"
            onChange={(...args) => window.onChange(...args)}
        >
            <MultiSelectOption value="1" label="option one" />
            <MultiSelectOption value="2" label="option two" />
            <MultiSelectOption value="3" label="option three" />
        </MultiSelect>
    ))
    .add('With options and a selection', () => (
        <MultiSelect
            className="select"
            selected={[{ value: '1', label: 'option one' }]}
            onChange={(...args) => window.onChange(...args)}
        >
            <MultiSelectOption value="1" label="option one" />
            <MultiSelectOption value="2" label="option two" />
            <MultiSelectOption value="3" label="option three" />
        </MultiSelect>
    ))
    .add('With options and multiple selections', () => (
        <MultiSelect
            className="select"
            selected={[
                { value: '1', label: 'option one' },
                { value: '2', label: 'option two' },
            ]}
        >
            <MultiSelectOption value="1" label="option one" />
            <MultiSelectOption value="2" label="option two" />
            <MultiSelectOption value="3" label="option three" />
        </MultiSelect>
    ))
    .add('With clear button and selection', () => (
        <MultiSelect
            clearable
            clearText="Clear"
            className="select"
            selected={[{ value: '1', label: 'option one' }]}
            onChange={(...args) => window.onChange(...args)}
        >
            <MultiSelectOption value="1" label="option one" />
            <MultiSelectOption value="2" label="option two" />
            <MultiSelectOption value="3" label="option three" />
        </MultiSelect>
    ))
    .add('With filter field', () => (
        <MultiSelect filterable noMatchText="No match found" className="select">
            <MultiSelectOption value="1" label="option one" />
            <MultiSelectOption value="2" label="option two" />
            <MultiSelectOption value="3" label="option three" />
        </MultiSelect>
    ))
