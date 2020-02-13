import React from 'react'
import { storiesOf } from '@storybook/react'
import { Chip } from '../index.js'

window.onClick = window.Cypress.cy.stub()
window.onRemove = window.Cypress.cy.stub()

storiesOf('Chip', module)
    .add('Default', () => <Chip>Message</Chip>)
    .add('With onClick', () => (
        <Chip onClick={(...args) => window.onClick(...args)}>Chippy</Chip>
    ))
    .add('With onRemove', () => (
        <Chip onRemove={(...args) => window.onRemove(...args)}>Chipmunk</Chip>
    ))
    .add('With children', () => <Chip>I am a child</Chip>)
    .add('With icon', () => <Chip icon={<div>Icon</div>}>Message</Chip>)
