import React from 'react'
import { storiesOf } from '@storybook/react'
import { SingleSelectField, SingleSelectOption } from '../src'

const defaultProps = {
    label: 'Default label',
    selected: { value: '1', label: 'one' },
    onChange: selected =>
        alert(`Selected changed to: ${JSON.stringify(selected, null, 2)}`),
    empty: 'No data',
    noMatchText: `No match found for filter`,
    tabIndex: '0',
    clearText: 'Clear',
    filterPlaceholder: 'Type to filter options',
}

const options = [
    <SingleSelectOption key="1" value="1" label="one" />,
    <SingleSelectOption key="2" value="2" label="two" />,
    <SingleSelectOption key="3" value="3" label="three" />,
    <SingleSelectOption key="4" value="4" label="four" />,
    <SingleSelectOption key="5" value="5" label="five" />,
    <SingleSelectOption key="6" value="6" label="six" />,
    <SingleSelectOption key="7" value="7" label="seven" />,
    <SingleSelectOption key="8" value="8" label="eight" />,
    <SingleSelectOption key="9" value="9" label="nine" />,
    <SingleSelectOption key="10" value="10" label="ten" />,
]

storiesOf('SingleSelectField', module)
    .add('Default', () => (
        <SingleSelectField {...defaultProps}>{options}</SingleSelectField>
    ))
    .add('With Help text', () => (
        <SingleSelectField {...defaultProps} helpText="A helpful text.">
            {options}
        </SingleSelectField>
    ))
    .add('Status: Valid', () => (
        <SingleSelectField
            {...defaultProps}
            helpText="A helpful text."
            validationText="Totally valid"
            valid
        >
            {options}
        </SingleSelectField>
    ))
    .add('Status: Warning', () => (
        <SingleSelectField
            {...defaultProps}
            helpText="A helpful text."
            validationText="Hm, not quite, I warn thee!"
            warning
        >
            {options}
        </SingleSelectField>
    ))
    .add('Status: Error', () => (
        <SingleSelectField
            {...defaultProps}
            helpText="A helpful text."
            validationText="NO! TOTALLY WRONG!"
            error
        >
            {options}
        </SingleSelectField>
    ))
    .add('Required', () => (
        <SingleSelectField {...defaultProps} required>
            {options}
        </SingleSelectField>
    ))
    .add('Disabled', () => (
        <SingleSelectField {...defaultProps} disabled>
            {options}
        </SingleSelectField>
    ))
