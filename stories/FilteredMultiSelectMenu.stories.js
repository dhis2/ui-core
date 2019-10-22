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
        </Select>
    ))
