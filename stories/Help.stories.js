import React from 'react'
import { storiesOf } from '@storybook/react'
import { Help } from '../src'
import { Valid, Warning, Error, Loading } from '../src/icons/Status'
import { AttachFile } from '../src/icons/AttachFile'

storiesOf('Help', module)
    .add('Default', () => <Help>Allow me to be of assistance</Help>)

    .add('Status: Warning', () => (
        <Help warning>Allow me to be of assistance</Help>
    ))
    .add('Status: Valid', () => <Help valid>Allow me to be of assistance</Help>)
    .add('Status: Error', () => <Help error>Allow me to be of assistance</Help>)
    .add('Text overflow', () => (
        <div style={{ width: 200 }}>
            <Help>I take up more space than my container</Help>
        </div>
    ))
    .add('Icons', () => (
        <>
            <Help icon={<AttachFile />}>I have an AttachFile icon</Help>
            <Help icon={<Loading />}>I have an Loading icon</Help>
            <Help icon={<Error />} error>
                I have an Error icon and error status
            </Help>
            <Help icon={<Warning />} warning>
                I have an Warning icon and warning status
            </Help>
            <Help icon={<Valid />} valid>
                I have an Valid icon and valid status
            </Help>
        </>
    ))
