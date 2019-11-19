import React from 'react'
import { storiesOf } from '@storybook/react'
import { FileListItem } from '../src'

window.onRemove = (payload, event) => {
    console.log('onRemove payload', payload)
    console.log('onRemove event', event)
}

window.onCancel = (payload, event) => {
    console.log('onCancel payload', payload)
    console.log('onCancel event', event)
}

const onRemove = (...args) => window.onRemove(...args)
const onCancel = (...args) => window.onCancel(...args)

storiesOf('FileListItem', module)
    .add('Default', () => (
        <FileListItem
            label="File list item"
            onRemove={onRemove}
            removeText="Remove"
        />
    ))
    .add('Loading', () => (
        <FileListItem
            loading
            label="File list item"
            onRemove={onRemove}
            removeText="Remove"
            onCancel={onCancel}
            cancelText="Cancel"
        />
    ))
