import React from 'react'
import { storiesOf } from '@storybook/react'
import { Select, MultiSelectInput, MultiSelectOption } from '../src'

const logSelection = values =>
    alert(`Selected: ${JSON.stringify(values, null, 2)}`)
const longLabel =
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas quibusdam est debitis odio, earum explicabo error magni. Expedita voluptatem accusantium nostrum minus, voluptate mollitia placeat perspiciatis quibusdam dicta, fugiat dolor quisquam alias, impedit commodi? Inventore, laboriosam, molestias. Non quod odit eum adipisci, tempora rerum perferendis, incidunt consectetur nesciunt. Qui voluptatibus asperiores dicta doloremque est vitae tempora sapiente dignissimos maiores saepe, animi necessitatibus modi laboriosam quae blanditiis voluptatem recusandae. Praesentium ipsum dolores voluptatum repudiandae cumque, tempore tempora, excepturi numquam atque reiciendis suscipit alias? Architecto dignissimos enim blanditiis laborum'

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
            onChange={logSelection}
            input={<MultiSelectInput />}
            menu={<div>Dropdown items</div>}
        >
            <MultiSelectOption value="1" label="one" />
            <MultiSelectOption value="2" label="two" />
            <MultiSelectOption value="3" label="three" />
            <MultiSelectOption value="4" label="four" />
        </Select>
    ))
    .add('Long selections', () => (
        <Select
            selected={[
                { label: longLabel, value: '1' },
                { label: 'three', value: '3' },
            ]}
            onChange={logSelection}
            input={<MultiSelectInput />}
            menu={<div>Dropdown items</div>}
        >
            <MultiSelectOption value="1" label={longLabel} />
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
            onChange={logSelection}
            input={<MultiSelectInput prefix="Prefix text" />}
            menu={<div>Dropdown items</div>}
        >
            <MultiSelectOption value="value" label="label" />
        </Select>
    ))
    .add('Clearable with selection', () => (
        <Select
            selected={[{ label: 'label', value: 'value' }]}
            onChange={logSelection}
            input={<MultiSelectInput clearable />}
            menu={<div>Dropdown items</div>}
        >
            <MultiSelectOption value="value" label="label" />
        </Select>
    ))
