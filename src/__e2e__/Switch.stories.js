import { storiesOf } from '@storybook/react'
import React from 'react'
import { Switch } from '../index.js'

window.onChange = window.Cypress.cy.stub()
window.onBlur = window.Cypress.cy.stub()
window.onFocus = window.Cypress.cy.stub()

storiesOf('Switch', module)
    .add('With onChange', () => (
        <Switch
            name="Ex"
            label="Switch"
            value="default"
            onChange={(...args) => window.onChange(...args)}
        />
    ))
    .add('With initialFocus and onBlur', () => (
        <Switch
            initialFocus
            name="Ex"
            label="Switch"
            value="default"
            onBlur={(...args) => window.onBlur(...args)}
        />
    ))
    .add('With onFocus', () => (
        <Switch
            name="Ex"
            label="Switch"
            value="default"
            onFocus={(...args) => window.onFocus(...args)}
        />
    ))
    .add('With disabled', () => (
        <Switch name="Ex" label="Switch" value="default" disabled />
    ))
    .add('With label', () => (
        <Switch name="Ex" label="The label" value="default" />
    ))
    .add('With initialFocus', () => (
        <Switch name="Ex" label="The label" value="default" initialFocus />
    ))
