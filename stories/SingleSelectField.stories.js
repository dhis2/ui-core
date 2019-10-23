import React from 'react'
import { storiesOf } from '@storybook/react'
import { SingleSelectField, SingleSelectOption } from '../src'

const defaultProps = {
    label: 'Default label',
    selected: { value: '1', label: 'one' },
    onChange: () => {},
}

const options = [
    <SingleSelectOption key="1" value="1" label="one" />,
    <SingleSelectOption key="2" value="2" label="two" />,
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
    .add('Status: Loading', () => (
        <SingleSelectField {...defaultProps} selected={{}} loading>
            {options}
        </SingleSelectField>
    ))
    .add('Required', () => (
        <SingleSelectField {...defaultProps} required>
            {options}
        </SingleSelectField>
    ))
