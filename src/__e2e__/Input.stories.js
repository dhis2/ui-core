import { storiesOf } from '@storybook/react'
import React from 'react'
import { Input } from '../index.js'

window.onChange = window.Cypress.cy.stub()
window.onBlur = window.Cypress.cy.stub()
window.onFocus = window.Cypress.cy.stub()

storiesOf('Input', module)
    .add('With onChange', () => (
        <Input
            label="Default label"
            name="Default"
            value=""
            onChange={(...args) => window.onChange(...args)}
        />
    ))
    .add('With initialFocus and onBlur', () => (
        <Input
            label="Default label"
            name="Default"
            value=""
            initialFocus
            onBlur={(...args) => window.onBlur(...args)}
        />
    ))
    .add('With onFocus', () => (
        <Input
            label="Default label"
            name="Default"
            value=""
            onFocus={(...args) => window.onFocus(...args)}
        />
    ))
    .add('With initialFocus', () => (
        <Input label="Default label" name="Default" value="" initialFocus />
    ))
    .add('With disabled', () => (
        <Input label="Default label" name="Default" value="" disabled />
    ))
