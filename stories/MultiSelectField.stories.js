import React from 'react'
import { storiesOf } from '@storybook/react'
import { MultiSelectField, MultiSelectOption } from '../src'

const defaultProps = {
    label: 'Default label',
    selected: [{ value: '1', label: 'one' }],
    onChange: selected =>
        alert(`Selected changed to: ${JSON.stringify(selected, null, 2)}`),
    empty: 'No data',
    noMatchText: `No match found for filter`,
    tabIndex: '0',
    clearText: 'Clear',
    filterPlaceholder: 'Type to filter options',
}

const options = [
    <MultiSelectOption key="1" value="1" label="one" />,
    <MultiSelectOption key="2" value="2" label="two" />,
    <MultiSelectOption key="3" value="3" label="three" />,
    <MultiSelectOption key="4" value="4" label="four" />,
    <MultiSelectOption key="5" value="5" label="five" />,
    <MultiSelectOption key="6" value="6" label="six" />,
    <MultiSelectOption key="7" value="7" label="seven" />,
]

storiesOf('MultiSelectField', module)
    .add('Default', () => (
        <MultiSelectField {...defaultProps}>{options}</MultiSelectField>
    ))
    .add('No placeholder, no selected options', () => (
        <MultiSelectField {...defaultProps} selected={[]}>
            {options}
        </MultiSelectField>
    ))
    .add('Placeholder, no selected options', () => (
        <MultiSelectField
            {...defaultProps}
            placeholder="Placeholder text"
            selected={[]}
        >
            {options}
        </MultiSelectField>
    ))
    .add('Prefix, no selected options', () => (
        <MultiSelectField {...defaultProps} prefix="Prefix text" selected={[]}>
            {options}
        </MultiSelectField>
    ))
    .add('Prefix, with selected options', () => (
        <MultiSelectField {...defaultProps} prefix="Prefix text">
            {options}
        </MultiSelectField>
    ))
    .add('With Help text', () => (
        <MultiSelectField {...defaultProps} helpText="A helpful text.">
            {options}
        </MultiSelectField>
    ))
    .add('Status: Valid', () => (
        <MultiSelectField
            {...defaultProps}
            helpText="A helpful text."
            validationText="Totally valid"
            valid
        >
            {options}
        </MultiSelectField>
    ))
    .add('Status: Warning', () => (
        <MultiSelectField
            {...defaultProps}
            helpText="A helpful text."
            validationText="Hm, not quite, I warn thee!"
            warning
        >
            {options}
        </MultiSelectField>
    ))
    .add('Status: Error', () => (
        <MultiSelectField
            {...defaultProps}
            helpText="A helpful text."
            validationText="NO! TOTALLY WRONG!"
            error
        >
            {options}
        </MultiSelectField>
    ))
    .add('Status: Loading', () => (
        <MultiSelectField {...defaultProps} selected={[]} loading>
            {options}
        </MultiSelectField>
    ))
    .add('Status: Loading with text', () => (
        <MultiSelectField
            {...defaultProps}
            selected={[]}
            loading
            loadingText="Loading options"
        >
            {options}
        </MultiSelectField>
    ))
    .add('Required', () => (
        <MultiSelectField {...defaultProps} required>
            {options}
        </MultiSelectField>
    ))
    .add('Maximum height', () => (
        <MultiSelectField {...defaultProps} maxHeight="100px">
            {options}
        </MultiSelectField>
    ))
    .add('Clearable', () => (
        <MultiSelectField {...defaultProps} clearable>
            {options}
        </MultiSelectField>
    ))
    .add('Filterable', () => (
        <MultiSelectField {...defaultProps} filterable>
            {options}
        </MultiSelectField>
    ))
    .add('Empty', () => <MultiSelectField {...defaultProps} selected={[]} />)
    .add('Custom empty', () => (
        <MultiSelectField
            {...defaultProps}
            selected={[]}
            empty={<div>There are no options</div>}
        />
    ))
    .add('Initial focus', () => (
        <MultiSelectField {...defaultProps} initialFocus>
            {options}
        </MultiSelectField>
    ))
    .add('Disabled', () => (
        <MultiSelectField {...defaultProps} disabled>
            {options}
        </MultiSelectField>
    ))
    .add('Dense', () => (
        <MultiSelectField {...defaultProps} dense>
            {options}
        </MultiSelectField>
    ))
