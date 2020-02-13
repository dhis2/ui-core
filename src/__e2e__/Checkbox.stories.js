import { storiesOf } from '@storybook/react'
import React from 'react'
import { Checkbox } from '../index.js'

window.onClick = window.Cypress.cy.stub()
window.onChange = window.Cypress.cy.stub()
window.onBlur = window.Cypress.cy.stub()
window.onFocus = window.Cypress.cy.stub()

storiesOf('Checkbox', module)
    .add('With onChange', () => (
        <Checkbox
            name="Ex"
            label="Checkbox"
            value="default"
            onChange={(...args) => window.onChange(...args)}
        />
    ))
    .add('With initialFocus and onBlur', () => (
        <Checkbox
            initialFocus
            name="Ex"
            label="Checkbox"
            value="default"
            onBlur={(...args) => window.onBlur(...args)}
        />
    ))
    .add('With onFocus', () => (
        <Checkbox
            name="Ex"
            label="Checkbox"
            value="default"
            onFocus={(...args) => window.onFocus(...args)}
        />
    ))
    .add('Disabled with onClick', () => (
        <Checkbox
            name="Ex"
            label="Checkbox"
            value="default"
            disabled
            onClick={(...args) => window.onClick(...args)}
        />
    ))
    .add('With label', () => (
        <Checkbox name="Ex" label="The label" value="default" />
    ))
    .add('With initialFocus', () => (
        <Checkbox name="Ex" label="The label" value="default" initialFocus />
    ))
