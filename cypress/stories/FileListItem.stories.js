import React from 'react'
import { storiesOf } from '@storybook/react'
import { FileListItem } from '../../src'

storiesOf('FileListItem', module)
    .add('With onRemove', () => (
        <FileListItem
            label="File list item"
            onRemove={(...args) => window.onRemove(...args)}
            removeText="Remove"
        />
    ))
    .add('Loading with onCancel', () => (
        <FileListItem
            loading
            label="File list item"
            removeText="Remove"
            onCancel={(...args) => window.onCancel(...args)}
            cancelText="Cancel"
        />
    ))
