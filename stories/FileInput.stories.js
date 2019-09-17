import React from 'react'
import { storiesOf } from '@storybook/react'
import { FileInput, Help, Field } from '../src'

const onChange = () => {
    console.log('onChange')
}
const onRemove = () => {
    console.log('onRemove')
}
const onCancel = () => {
    console.log('onCancel')
}

storiesOf('FileInput', module)
    .add('Default', () => (
        <FileInput onChange={onChange} buttonLabel="Upload file" />
    ))
    .add('With label', () => (
        <FileInput
            onChange={onChange}
            label="Upload something"
            buttonLabel="Upload file"
        />
    ))
    .add('Required', () => (
        <FileInput
            onChange={onChange}
            label="upload something"
            buttonLabel="Upload file"
            required
        />
    ))
    .add('Multiple', () => (
        <FileInput
            onChange={onChange}
            label="upload multiple things"
            buttonLabel="Upload files"
            multiple
        />
    ))
    .add('Disabled', () => (
        <FileInput
            onChange={onChange}
            label="upload something"
            buttonLabel="Upload file"
            disabled
        />
    ))
    .add('Sizes', () => (
        <>
            <Field>
                <FileInput
                    onChange={onChange}
                    label="upload something"
                    buttonLabel="Default size"
                />
            </Field>
            <Field>
                <FileInput
                    onChange={onChange}
                    label="upload something"
                    buttonLabel="Small"
                    small
                />
            </Field>
            <Field>
                <FileInput
                    onChange={onChange}
                    label="upload something"
                    buttonLabel="Large"
                    large
                />
            </Field>
        </>
    ))
    .add('Statuses', () => (
        <>
            <Field>
                <FileInput
                    onChange={onChange}
                    label="upload something"
                    buttonLabel="Default"
                />
            </Field>
            <Field>
                <FileInput
                    onChange={onChange}
                    label="upload something"
                    buttonLabel="Valid"
                    valid
                />
            </Field>
            <Field>
                <FileInput
                    onChange={onChange}
                    label="upload something"
                    buttonLabel="Warning"
                    warning
                />
            </Field>
            <Field>
                <FileInput
                    onChange={onChange}
                    label="upload something"
                    buttonLabel="Error"
                    error
                >
                    <Help error indent={false}>
                        Something went wrong
                    </Help>
                </FileInput>
            </Field>
        </>
    ))
    .add('File list', () => (
        <div style={{ width: 250 }}>
            <FileInput
                onChange={onChange}
                label="Upload something"
                buttonLabel="Upload file"
            >
                <FileInput.FileList>
                    <FileInput.FileListItem
                        label="picture1.jpg"
                        onRemove={onRemove}
                        onCancel={onCancel}
                        cancelText="Cancel"
                        removeText="Remove"
                    />
                    <FileInput.FileListItem
                        label="image_that_is_uploading.jpg"
                        onRemove={onRemove}
                        onCancel={onCancel}
                        cancelText="Cancel"
                        removeText="Remove"
                        loading
                    />
                    <FileInput.FileListItem
                        label="image_file_name_is_to_long_to_display_on_one_line.jpg"
                        onRemove={onRemove}
                        onCancel={onCancel}
                        cancelText="Cancel"
                        removeText="Remove"
                    />
                </FileInput.FileList>
            </FileInput>
            <br />
            <p style={{ color: 'grey' }}>
                <em>Bounding box is 250px wide</em>
            </p>
        </div>
    ))
    .add('Placeholder text', () => (
        <FileInput
            onChange={onChange}
            label="Upload something"
            buttonLabel="Upload file"
        >
            <FileInput.FileList>
                <FileInput.Placeholder>
                    No file(s) selected yet
                </FileInput.Placeholder>
            </FileInput.FileList>
        </FileInput>
    ))
    .add('Help text', () => (
        <FileInput
            onChange={onChange}
            label="Upload something"
            buttonLabel="Upload file"
        >
            <Help indent={false}>Please select any file type</Help>
        </FileInput>
    ))
    .add('Design system stacking order', () => (
        <FileInput
            onChange={onChange}
            label="upload something"
            buttonLabel="Upload file"
        >
            <Help indent={false}>
                Please select any type of file (help-text first)
            </Help>

            <Help indent={false} error>
                Something went wrong (error second)
            </Help>

            <FileInput.FileList>
                <FileInput.FileListItem
                    label="picture1.jpg"
                    onRemove={onRemove}
                    onCancel={onCancel}
                    cancelText="Cancel"
                    removeText="Remove"
                />
                <FileInput.FileListItem
                    label="picture2.jpg"
                    onRemove={onRemove}
                    onCancel={onCancel}
                    cancelText="Cancel"
                    removeText="Remove"
                    loading
                />
            </FileInput.FileList>
        </FileInput>
    ))
    .add('Design system stacking order - empty file list', () => (
        <FileInput
            onChange={onChange}
            label="upload something"
            buttonLabel="Upload file"
        >
            <Help indent={false}>
                Please select any type of file (help-text first)
            </Help>

            <Help indent={false} error>
                Something went wrong (error second)
            </Help>

            <FileInput.FileList>
                <FileInput.Placeholder>
                    No file(s) selected yet
                </FileInput.Placeholder>
            </FileInput.FileList>
        </FileInput>
    ))
