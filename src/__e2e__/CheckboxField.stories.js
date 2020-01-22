import { storiesOf } from '@storybook/react'
import React from 'react'
import { CheckboxField } from '../index.js'

storiesOf('CheckboxField', module).add('With label and required', () => (
    <CheckboxField name="Ex" label="CheckboxField" required value="checked" />
))
