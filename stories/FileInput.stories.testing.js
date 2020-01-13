import React from 'react'
import { storiesOf } from '@storybook/react'
import { FileInput } from '../src'

const onChange = (payload, event) => {
    // NOTE: if files is not transformed into an array,
    // cypress will get an empty file list!
    window.onChange &&
        window.onChange(
            {
                ...payload,
                files: [...payload.files],
            },
            event
        )
}

storiesOf('FileInput', module)
    .add('One file', () => (
        <FileInput
            onChange={onChange}
            buttonLabel="Upload file"
            name="upload"
        />
    ))
    .add('Multiple files', () => (
        <FileInput
            name="upload"
            onChange={onChange}
            buttonLabel="Upload files"
            multiple
        />
    ))
