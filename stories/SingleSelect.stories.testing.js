import React from 'react'
import { storiesOf } from '@storybook/react'
import { SingleSelect, SingleSelectOption } from '../src'

storiesOf('SingleSelect', module).add('With options', () => (
    <SingleSelect className="select">
        <SingleSelectOption value="1" label="option one" />
        <SingleSelectOption value="2" label="option two" />
        <SingleSelectOption value="3" label="option three" />
    </SingleSelect>
))
