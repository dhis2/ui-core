import React from 'react'

import { storiesOf } from '@storybook/react'

import { Fieldset } from '../src'
import { iconStatuses } from '../src/icons/constants'
import { inputSizes } from '../src/forms/constants'

const FieldsetWrapper = props => (
    <Fieldset label="Label" size={inputSizes.DEFAULT} {...props} />
)

storiesOf('Fieldset', module)
    .add('Default', () => (
        <FieldsetWrapper hasValue={true} status={iconStatuses.DEFAULT}>
            Test
        </FieldsetWrapper>
    ))
    .add('Valid', () => (
        <FieldsetWrapper hasValue={true} status={iconStatuses.VALID}>
            Test
        </FieldsetWrapper>
    ))
    .add('Warning', () => (
        <FieldsetWrapper hasValue={true} status={iconStatuses.WARNING}>
            Test
        </FieldsetWrapper>
    ))
    .add('Error', () => (
        <FieldsetWrapper hasValue={true} status={iconStatuses.ERROR}>
            Test
        </FieldsetWrapper>
    ))
    .add('Dense', () => (
        <FieldsetWrapper hasValue={true} size={inputSizes.DENSE}>
            Test
        </FieldsetWrapper>
    ))
