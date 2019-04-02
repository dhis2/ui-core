import React from 'react'

import { storiesOf } from '@storybook/react'

import { LabelOutlined } from '../src/forms/LabelOutlined'
import { iconStatuses } from '../src/icons/constants'
import { inputSizes } from '../src/forms/constants'

const LabelOutlinedWrapper = props => (
    <LabelOutlined label="Label" size={inputSizes.DEFAULT} {...props} />
)

storiesOf('Label: outlined', module)
    .add('Default', () => (
        <LabelOutlinedWrapper hasValue={true} status={iconStatuses.DEFAULT}>
            Test
        </LabelOutlinedWrapper>
    ))
    .add('Valid', () => (
        <LabelOutlinedWrapper hasValue={true} status={iconStatuses.VALID}>
            Test
        </LabelOutlinedWrapper>
    ))
    .add('Warning', () => (
        <LabelOutlinedWrapper hasValue={true} status={iconStatuses.WARNING}>
            Test
        </LabelOutlinedWrapper>
    ))
    .add('Error', () => (
        <LabelOutlinedWrapper hasValue={true} status={iconStatuses.ERROR}>
            Test
        </LabelOutlinedWrapper>
    ))
    .add('Dense', () => (
        <LabelOutlinedWrapper hasValue={true} size={inputSizes.DENSE}>
            Test
        </LabelOutlinedWrapper>
    ))
