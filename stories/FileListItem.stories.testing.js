import React from 'react'
import { storiesOf } from '@storybook/react'
import { FileListItem } from '../src'

const onRemove = (...args) => window.onRemove(...args)
const onCancel = (...args) => window.onCancel(...args)

storiesOf('FileListItem', module)
    .add('Onremove', () => (
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
            removeText="Remove"
            onCancel={onCancel}
            cancelText="Cancel"
        />
    ))
