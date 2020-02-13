import React from 'react'
import { storiesOf } from '@storybook/react'
import { FileListItem } from '../index.js'

window.onRemove = window.Cypress.cy.stub()
window.onCancel = window.Cypress.cy.stub()

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
    .add('Loading with onCancel and cancelText', () => (
        <FileListItem
            loading
            label="File list item"
            removeText="Remove"
            onCancel={() => {}}
            onRemove={() => {}}
            cancelText="Cancel"
        />
    ))
    .add('With label', () => (
        <FileListItem label="Label" removeText="Remove" onRemove={() => {}} />
    ))
    .add('With removeText', () => (
        <FileListItem label="Label" removeText="Remove" onRemove={() => {}} />
    ))
