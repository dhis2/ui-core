import React from 'react'

import { storiesOf } from '@storybook/react'

import { ArrowDown } from '../src/icons/Arrow'
import { LabelFilled } from '../src/forms/LabelFilled'
import { iconStatuses } from '../src/icons/constants'
import { inputSizes } from '../src/forms/constants'

const Input = props => (
    <input type="text" value={props.value} name="input-name" {...props} />
)

const LabelFilledWrapper = props => (
    <LabelFilled
        label="Label"
        size={inputSizes.DEFAULT}
        hasValue={!!props.value}
        tailIcon={() => <ArrowDown />}
        {...props}
    />
)

LabelFilledWrapper.defaultProps = {
    value: 'Label',
    children: <Input />,
}

storiesOf('Label: filled', module)
    .add('Default without value', () => (
        <LabelFilledWrapper status={iconStatuses.DEFAULT} value="" />
    ))
    .add('Default with value', () => (
        <LabelFilledWrapper status={iconStatuses.DEFAULT} />
    ))
    .add('Valid', () => <LabelFilledWrapper status={iconStatuses.VALID} />)
    .add('Warning', () => <LabelFilledWrapper status={iconStatuses.WARNING} />)
    .add('Error', () => <LabelFilledWrapper status={iconStatuses.ERROR} />)
    .add('Dense', () => <LabelFilledWrapper size={inputSizes.DENSE} />)
