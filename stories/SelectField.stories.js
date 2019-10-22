import React from 'react'
import { storiesOf } from '@storybook/react'
import { SelectField, SelectOption } from '../src'

const defaultProps = {
    label: 'Default label',
    selected: { value: '1', label: 'one' },
    onChange: () => {},
}

const options = [
    <SelectOption key="1" value="1" label="one" />,
    <SelectOption key="2" value="2" label="two" />,
]

storiesOf('SelectField', module)
    .add('Default', () => (
        <SelectField {...defaultProps}>{options}</SelectField>
    ))
    .add('With Help text', () => (
        <SelectField {...defaultProps} helpText="A helpful text.">
            {options}
        </SelectField>
    ))
    .add('With valid status', () => (
        <SelectField
            {...defaultProps}
            helpText="A helpful text."
            validationText="Totally valid"
            valid
        >
            {options}
        </SelectField>
    ))
    .add('With warning status', () => (
        <SelectField
            {...defaultProps}
            helpText="A helpful text."
            validationText="Hm, not quite, I warn thee!"
            warning
        >
            {options}
        </SelectField>
    ))
    .add('With error status', () => (
        <SelectField
            {...defaultProps}
            helpText="A helpful text."
            validationText="NO! TOTALLY WRONG!"
            error
        >
            {options}
        </SelectField>
    ))
    .add('With loading status', () => (
        <SelectField {...defaultProps} loading>
            {options}
        </SelectField>
    ))
    .add('Required', () => (
        <SelectField {...defaultProps} required>
            {options}
        </SelectField>
    ))
