import React from 'react'
import { storiesOf } from '@storybook/react'
import { MultiSelectField, MultiSelectOption } from '../src'

const defaultProps = {
    label: 'Default label',
    selected: [{ value: '1', label: 'one' }],
    onChange: () => {},
}

const options = [
    <MultiSelectOption key="1" value="1" label="one" />,
    <MultiSelectOption key="2" value="2" label="two" />,
]

storiesOf('MultiSelectField', module)
    .add('Default', () => (
        <MultiSelectField {...defaultProps}>{options}</MultiSelectField>
    ))
    .add('With Help text', () => (
        <MultiSelectField {...defaultProps} helpText="A helpful text.">
            {options}
        </MultiSelectField>
    ))
    .add('With valid status', () => (
        <MultiSelectField
            {...defaultProps}
            helpText="A helpful text."
            validationText="Totally valid"
            valid
        >
            {options}
        </MultiSelectField>
    ))
    .add('With warning status', () => (
        <MultiSelectField
            {...defaultProps}
            helpText="A helpful text."
            validationText="Hm, not quite, I warn thee!"
            warning
        >
            {options}
        </MultiSelectField>
    ))
    .add('With error status', () => (
        <MultiSelectField
            {...defaultProps}
            helpText="A helpful text."
            validationText="NO! TOTALLY WRONG!"
            error
        >
            {options}
        </MultiSelectField>
    ))
    .add('With loading status', () => (
        <MultiSelectField {...defaultProps} selected={[]} loading>
            {options}
        </MultiSelectField>
    ))
    .add('Required', () => (
        <MultiSelectField {...defaultProps} required>
            {options}
        </MultiSelectField>
    ))
