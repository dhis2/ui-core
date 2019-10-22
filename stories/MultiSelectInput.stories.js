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
    .add('Selections', () => (
        <Select
            selected={[
                { label: 'one', value: '1' },
                { label: 'three', value: '3' },
            ]}
            onChange={values =>
                alert(`Selected ${JSON.stringify(values, null, 2)}`)
            }
            input={<MultiSelectInput />}
            menu={<div>Dropdown items</div>}
        >
            <MultiSelectOption value="1" label="one" />
            <MultiSelectOption value="2" label="two" />
            <MultiSelectOption value="3" label="three" />
            <MultiSelectOption value="4" label="four" />
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
            onChange={values =>
                alert(`Selected ${JSON.stringify(values, null, 2)}`)
            }
            input={<MultiSelectInput prefix="Prefix text" />}
            menu={<div>Dropdown items</div>}
        >
            <MultiSelectOption value="value" label="label" />
        </Select>
    ))
    .add('Clearable with selection', () => (
        <Select
            selected={[{ label: 'label', value: 'value' }]}
            onChange={values =>
                alert(`Selected ${JSON.stringify(values, null, 2)}`)
            }
            input={<MultiSelectInput clearable />}
            menu={<div>Dropdown items</div>}
        >
            <MultiSelectOption value="value" label="label" />
        </Select>
    ))
