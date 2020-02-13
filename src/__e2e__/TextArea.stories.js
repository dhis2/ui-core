import React from 'react'
import { storiesOf } from '@storybook/react'
import { TextArea } from '../index.js'

window.onChange = window.Cypress.cy.stub()
window.onBlur = window.Cypress.cy.stub()
window.onFocus = window.Cypress.cy.stub()

storiesOf('TextArea', module)
    .add('With onChange', () => (
        <TextArea
            onChange={(...args) => window.onChange(...args)}
            name="textarea"
        />
    ))
    .add('With initialFocus and onBlur', () => (
        <TextArea
            initialFocus
            name="textarea"
            onBlur={(...args) => window.onBlur(...args)}
        />
    ))
    .add('With onFocus', () => (
        <TextArea
            name="textarea"
            onFocus={(...args) => window.onFocus(...args)}
        />
    ))
    .add('With initialFocus', () => <TextArea name="textarea" initialFocus />)
    .add('With disabled', () => <TextArea name="textarea" disabled />)
