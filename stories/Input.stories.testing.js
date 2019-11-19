import { storiesOf } from '@storybook/react'
import React from 'react'

import { Input } from '../src'

window.onChange = (payload, event) => {
    console.log('onChange payload', payload)
    console.log('onChange event', event)
}

window.onFocus = (payload, event) => {
    console.log('onFocus payload', payload)
    console.log('onFocus event', event)
}

window.onBlur = (payload, event) => {
    console.log('onBlur payload', payload)
    console.log('onBlur event', event)
}

const onChange = (...args) => window.onChange(...args)
const onFocus = (...args) => window.onFocus(...args)
const onBlur = (...args) => window.onBlur(...args)

createStory('Input', {
    label: 'Default label',
    name: 'Default',
    value: '',
    onChange,
    onFocus,
    onBlur,
})

function createStory(name, props) {
    return storiesOf(name, module)
        .add('Default', () => <Input {...props} />)
        .add('Focus', () => (
            <>
                <Input className="initially-focused" {...props} initialFocus />
                <Input className="initially-unfocused" {...props} />
            </>
        ))
}
