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
    .add('With options, a selection and disabled', () => (
        <MultiSelect
            disabled
            className="select"
            selected={[{ value: '1', label: 'option one' }]}
        >
            <MultiSelectOption value="1" label="option one" />
            <MultiSelectOption value="2" label="option two" />
            <MultiSelectOption value="3" label="option three" />
        </MultiSelect>
    ))
    .add('With options and disabled', () => (
        <MultiSelect disabled className="select">
            <MultiSelectOption value="1" label="option one" />
            <MultiSelectOption value="2" label="option two" />
            <MultiSelectOption value="3" label="option three" />
        </MultiSelect>
    ))
    .add('With prefix', () => (
        <MultiSelect className="select" prefix="Prefix text">
            <MultiSelectOption value="1" label="option one" />
            <MultiSelectOption value="2" label="option two" />
            <MultiSelectOption value="3" label="option three" />
        </MultiSelect>
    ))
    .add('With prefix and selection', () => (
        <MultiSelect
            className="select"
            prefix="Prefix text"
            selected={[{ value: '1', label: 'option one' }]}
        >
            <MultiSelectOption value="1" label="option one" />
            <MultiSelectOption value="2" label="option two" />
            <MultiSelectOption value="3" label="option three" />
        </MultiSelect>
    ))
    .add('With placeholder', () => (
        <MultiSelect className="select" placeholder="Placeholder text">
            <MultiSelectOption value="1" label="option one" />
            <MultiSelectOption value="2" label="option two" />
            <MultiSelectOption value="3" label="option three" />
        </MultiSelect>
    ))
    .add('With placeholder and selection', () => (
        <MultiSelect
            className="select"
            selected={[{ value: '1', label: 'option one' }]}
            placeholder="Placeholder text"
        >
            <MultiSelectOption value="1" label="option one" />
            <MultiSelectOption value="2" label="option two" />
            <MultiSelectOption value="3" label="option three" />
        </MultiSelect>
    ))
    .add('With disabled option', () => (
        <MultiSelect
            className="select"
            onChange={(...args) => window.onChange(...args)}
        >
            <MultiSelectOption value="1" label="option one" />
            <MultiSelectOption value="2" label="option two" />
            <MultiSelectOption value="3" label="option three" />
            <MultiSelectOption value="4" label="disabled option" disabled />
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
