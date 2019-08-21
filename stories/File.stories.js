import React from 'react'
import { storiesOf } from '@storybook/react'
import { FileField } from '../src'

import markdown from './info/atoms/file.md'

storiesOf('File', module)
    .addParameters({
        notes: {
            markdown,
        },
    })
    .add('Default', () => <FileField label="upload something" />)
    .add('With file', () => (
        <FileField
            label="upload something"
            value={new File([], 'filename.txt')}
        />
    ))
    .add('Required', () => <FileField label="upload something" required />)
    .add('Statusses', () => (
        <>
            <FileField label="Valid" valid />
            <FileField label="Warning" warning />
            <FileField label="Error" error />
        </>
    ))
