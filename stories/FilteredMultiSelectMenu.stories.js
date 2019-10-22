import React from 'react'
import { storiesOf } from '@storybook/react'
import { Select, FilteredMultiSelectMenu, MultiSelectOption } from '../src'

storiesOf('FilteredMultiSelectMenu', module)
    .add('Default', () => (
        <Select
            selected={[]}
            onChange={() => {}}
            input={<div>Input text</div>}
            menu={<FilteredMultiSelectMenu />}
        />
    ))
    .add('Options', () => (
        <Select
            selected={[]}
            onChange={() => {}}
            input={<div>Input text</div>}
            menu={<FilteredMultiSelectMenu />}
        >
            <MultiSelectOption value="1" label="one" />
            <MultiSelectOption value="2" label="two" />
            <MultiSelectOption value="3" label="three" />
            <MultiSelectOption value="4" label="four" />
            <MultiSelectOption value="5" label="five" />
            <MultiSelectOption value="6" label="six" />
            <MultiSelectOption value="7" label="seven" />
            <MultiSelectOption value="8" label="eight" />
            <MultiSelectOption value="9" label="nine" />
            <MultiSelectOption value="10" label="ten" />
        </Select>
    ))
