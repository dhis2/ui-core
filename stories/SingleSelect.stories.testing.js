import React from 'react'
import { storiesOf } from '@storybook/react'
import { SingleSelect, SingleSelectOption } from '../src'

storiesOf('SingleSelect', module)
    .add('With options', () => (
        <SingleSelect
            className="select"
            onChange={(...args) => window.onChange(...args)}
        >
            <SingleSelectOption value="1" label="option one" />
            <SingleSelectOption value="2" label="option two" />
            <SingleSelectOption value="3" label="option three" />
        </SingleSelect>
    ))
    .add('With prefix', () => (
        <SingleSelect className="select" prefix="Prefix text">
            <SingleSelectOption value="1" label="option one" />
            <SingleSelectOption value="2" label="option two" />
            <SingleSelectOption value="3" label="option three" />
        </SingleSelect>
    ))
    .add('With prefix and selection', () => (
        <SingleSelect
            className="select"
            prefix="Prefix text"
            selected={{ value: '1', label: 'option one' }}
        >
            <SingleSelectOption value="1" label="option one" />
            <SingleSelectOption value="2" label="option two" />
            <SingleSelectOption value="3" label="option three" />
        </SingleSelect>
    ))
    .add('With placeholder', () => (
        <SingleSelect className="select" placeholder="Placeholder text">
            <SingleSelectOption value="1" label="option one" />
            <SingleSelectOption value="2" label="option two" />
            <SingleSelectOption value="3" label="option three" />
        </SingleSelect>
    ))
    .add('With placeholder and selection', () => (
        <SingleSelect
            className="select"
            selected={{ value: '1', label: 'option one' }}
            placeholder="Placeholder text"
        >
            <SingleSelectOption value="1" label="option one" />
            <SingleSelectOption value="2" label="option two" />
            <SingleSelectOption value="3" label="option three" />
        </SingleSelect>
    ))
    .add('With disabled option', () => (
        <SingleSelect
            className="select"
            onChange={(...args) => window.onChange(...args)}
        >
            <SingleSelectOption value="1" label="option one" />
            <SingleSelectOption value="2" label="option two" />
            <SingleSelectOption value="3" label="option three" />
            <SingleSelectOption value="4" label="disabled option" disabled />
        </SingleSelect>
    ))
    .add('With options and a selection', () => (
        <SingleSelect
            className="select"
            selected={{ value: '1', label: 'option one' }}
            onChange={(...args) => window.onChange(...args)}
        >
            <SingleSelectOption value="1" label="option one" />
            <SingleSelectOption value="2" label="option two" />
            <SingleSelectOption value="3" label="option three" />
        </SingleSelect>
    ))
    .add('With clear button and selection', () => (
        <SingleSelect
            clearable
            clearText="Clear"
            className="select"
            selected={{ value: '1', label: 'option one' }}
            onChange={(...args) => window.onChange(...args)}
        >
            <SingleSelectOption value="1" label="option one" />
            <SingleSelectOption value="2" label="option two" />
            <SingleSelectOption value="3" label="option three" />
        </SingleSelect>
    ))
    .add('With filter field', () => (
        <SingleSelect
            filterable
            noMatchText="No match found"
            className="select"
        >
            <SingleSelectOption value="1" label="option one" />
            <SingleSelectOption value="2" label="option two" />
            <SingleSelectOption value="3" label="option three" />
        </SingleSelect>
    ))
