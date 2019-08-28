import React from 'react'
import { storiesOf } from '@storybook/react'
import { FileInput } from '../src'

import markdown from './info/atoms/fileInput.md'

storiesOf('FileInput', module)
    .addParameters({
        notes: {
            markdown,
        },
    })
    .add('Default', () => <FileInput label="upload something" />)
    .add('With file', () => (
        <FileInput
            label="upload something"
            value={new File([], 'filename.txt')}
        />
    ))
    .add('Required', () => <FileInput label="upload something" required />)
    .add('Statuses', () => (
        <>
            <FileInput label="Valid" valid />
            <FileInput label="Warning" warning />
            <FileInput label="Error" error />
        </>
    ))
