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
            <SelectOption value="3" label="three" />
            <SelectOption value="4" label="four" />
            <SelectOption value="5" label="five" />
            <SelectOption value="6" label="six" />
            <SelectOption value="7" label="seven" />
            <SelectOption value="8" label="eight" />
            <SelectOption value="9" label="nine" />
            <SelectOption value="10" label="ten" />
        </Select>
    ))
