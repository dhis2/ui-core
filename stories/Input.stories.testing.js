import { storiesOf } from '@storybook/react'
import React from 'react'
import { Input } from '../src'

const onChange = (...args) => window.onChange(...args)
const onFocus = (...args) => window.onFocus(...args)
const onBlur = (...args) => window.onBlur(...args)

const defaultProps = {
    label: 'Default label',
    name: 'Default',
    value: '',
    onChange,
    onFocus,
    onBlur,
}

storiesOf('Input', module)
    .add('Default', () => <Input {...defaultProps} />)
    .add('Focused', () => <Input {...defaultProps} initialFocus />)
