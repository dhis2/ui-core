import React from 'react'
import { storiesOf } from '@storybook/react'
import { Select, MultiSelectInput, MultiSelectOption } from '../src'

storiesOf('MultiSelectInput', module)
    .add('Default', () => (
        <Select
            selected={[]}
            onChange={() => {}}
            input={<MultiSelectInput />}
            menu={<div>Dropdown items</div>}
        />
    ))
    .add('Selection', () => (
        <Select
            selected={[{ label: 'label', value: 'value' }]}
            onChange={() => {}}
            input={<MultiSelectInput />}
            menu={<div>Dropdown items</div>}
        >
            <MultiSelectOption value="value" label="label" />
        </Select>
    ))
    .add('Placeholder', () => (
        <Select
            selected={[]}
            onChange={() => {}}
            input={<MultiSelectInput placeholder="Placeholder text" />}
            menu={<div>Dropdown items</div>}
        />
    ))
    .add('Prefix', () => (
        <Select
            selected={[]}
            onChange={() => {}}
            input={<MultiSelectInput prefix="Prefix text" />}
            menu={<div>Dropdown items</div>}
        />
    ))
    .add('Prefix with selection', () => (
        <Select
            selected={[{ label: 'label', value: 'value' }]}
            onChange={() => {}}
            input={<MultiSelectInput prefix="Prefix text" />}
            menu={<div>Dropdown items</div>}
        >
            <MultiSelectOption value="value" label="label" />
        </Select>
    ))
    .add('Clearable with selection', () => (
        <Select
            selected={[{ label: 'label', value: 'value' }]}
            onChange={() => alert('Cleared')}
            input={<MultiSelectInput clearable />}
            menu={<div>Dropdown items</div>}
        >
            <MultiSelectOption value="value" label="label" />
        </Select>
    ))
