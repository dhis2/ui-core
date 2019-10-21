import React from 'react'
import { storiesOf } from '@storybook/react'
import { Select, FilteredSelectMenu, SelectOption } from '../src'

storiesOf('FilteredSelectMenu', module)
    .add('Default', () => (
        <Select
            selected={{}}
            onChange={() => {}}
            input={<div>Input text</div>}
            menu={<FilteredSelectMenu />}
        />
    ))
    .add('Options', () => (
        <Select
            selected={{}}
            onChange={() => {}}
            input={<div>Input text</div>}
            menu={<FilteredSelectMenu />}
        >
            <SelectOption value="1" label="one" />
            <SelectOption value="2" label="two" />
        </Select>
    ))
