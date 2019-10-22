import React from 'react'
import { storiesOf } from '@storybook/react'
import { Select, SelectInput, SelectOption } from '../src'

const longLabel =
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas quibusdam est debitis odio, earum explicabo error magni. Expedita voluptatem accusantium nostrum minus, voluptate mollitia placeat perspiciatis quibusdam dicta, fugiat dolor quisquam alias, impedit commodi? Inventore, laboriosam, molestias. Non quod odit eum adipisci, tempora rerum perferendis, incidunt consectetur nesciunt. Qui voluptatibus asperiores dicta doloremque est vitae tempora sapiente dignissimos maiores saepe, animi necessitatibus modi laboriosam quae blanditiis voluptatem recusandae. Praesentium ipsum dolores voluptatum repudiandae cumque, tempore tempora, excepturi numquam atque reiciendis suscipit alias? Architecto dignissimos enim blanditiis laborum'

const Icon = () => (
    <svg
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="100%"
        viewBox="0 0 32 32"
    >
        <path d="M0 32h16v-32h-16v32zM10 4h4v4h-4v-4zM10 12h4v4h-4v-4zM10 20h4v4h-4v-4zM2 4h4v4h-4v-4zM2 12h4v4h-4v-4zM2 20h4v4h-4v-4zM18 10h14v2h-14zM18 32h4v-8h6v8h4v-18h-14z"></path>
    </svg>
)

storiesOf('SelectInput', module)
    .add('Default', () => (
        <Select
            selected={{}}
            onChange={() => {}}
            input={<SelectInput />}
            menu={<div>Dropdown items</div>}
        />
    ))
    .add('Selection', () => (
        <Select
            selected={{ label: 'label', value: 'value' }}
            onChange={() => {}}
            input={<SelectInput />}
            menu={<div>Dropdown items</div>}
        >
            <SelectOption value="value" label="label" />
        </Select>
    ))
    .add('Long selection', () => (
        <Select
            selected={{ label: longLabel, value: 'value' }}
            onChange={() => {}}
            input={<SelectInput />}
            menu={<div>Dropdown items</div>}
        >
            <SelectOption value="value" label={longLabel} />
        </Select>
    ))
    .add('Selection with icon', () => (
        <Select
            selected={{ label: 'label', value: 'value' }}
            onChange={() => {}}
            input={<SelectInput />}
            menu={<div>Dropdown items</div>}
        >
            <SelectOption value="value" label="label" icon={<Icon />} />
        </Select>
    ))
    .add('Placeholder', () => (
        <Select
            selected={{}}
            onChange={() => {}}
            input={<SelectInput placeholder="Placeholder text" />}
            menu={<div>Dropdown items</div>}
        />
    ))
    .add('Prefix', () => (
        <Select
            selected={{}}
            onChange={() => {}}
            input={<SelectInput prefix="Prefix text" />}
            menu={<div>Dropdown items</div>}
        />
    ))
    .add('Prefix with selection', () => (
        <Select
            selected={{ label: 'label', value: 'value' }}
            onChange={() => {}}
            input={<SelectInput prefix="Prefix text" />}
            menu={<div>Dropdown items</div>}
        >
            <SelectOption value="value" label="label" />
        </Select>
    ))
    .add('Clearable with selection', () => (
        <Select
            selected={{ label: 'label', value: 'value' }}
            onChange={() => alert('Cleared')}
            input={<SelectInput clearable />}
            menu={<div>Dropdown items</div>}
        >
            <SelectOption value="value" label="label" />
        </Select>
    ))
