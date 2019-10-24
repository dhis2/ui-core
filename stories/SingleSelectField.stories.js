import React from 'react'
import { storiesOf } from '@storybook/react'
import { SingleSelectField, SingleSelectOption } from '../src'

const defaultProps = {
    label: 'Default label',
    selected: { value: '1', label: 'one' },
    onChange: ({ label }) => alert(`Selected changed to: ${label}`),
    empty: 'No data',
    noMatchText: `No match found for "%%FILTER%%"`,
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
    .add('No placeholder, no selected options', () => (
        <SingleSelectField {...defaultProps} selected={{}}>
            {options}
        </SingleSelectField>
    ))
    .add('Placeholder, no selected options', () => (
        <SingleSelectField
            {...defaultProps}
            placeholder="Placeholder text"
            selected={{}}
        >
            {options}
        </SingleSelectField>
    ))
    .add('Prefix, no selected options', () => (
        <SingleSelectField {...defaultProps} prefix="Prefix text" selected={{}}>
            {options}
        </SingleSelectField>
    ))
    .add('Prefix, with selected options', () => (
        <SingleSelectField {...defaultProps} prefix="Prefix text">
            {options}
        </SingleSelectField>
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
    .add('Status: Loading', () => (
        <SingleSelectField {...defaultProps} selected={{}} loading>
            {options}
        </SingleSelectField>
    ))
    .add('Status: Loading with text', () => (
        <SingleSelectField
            {...defaultProps}
            selected={{}}
            loading
            loadingText="Loading options"
        >
            {options}
        </SingleSelectField>
    ))
    .add('Required', () => (
        <SingleSelectField {...defaultProps} required>
            {options}
        </SingleSelectField>
    ))
    .add('Maximum height', () => (
        <SingleSelectField {...defaultProps} maxHeight="100px">
            {options}
        </SingleSelectField>
    ))
    .add('Clearable', () => (
        <SingleSelectField {...defaultProps} clearable>
            {options}
        </SingleSelectField>
    ))
    .add('Filterable', () => (
        <SingleSelectField {...defaultProps} filterable>
            {options}
        </SingleSelectField>
    ))
    .add('Empty', () => <SingleSelectField {...defaultProps} selected={{}} />)
    .add('Custom empty', () => (
        <SingleSelectField
            {...defaultProps}
            selected={{}}
            empty={<div>There are no options</div>}
        />
    ))
