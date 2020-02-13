import React from 'react'
import { storiesOf } from '@storybook/react'
import { Tab } from '../index.js'

window.onClick = window.Cypress.cy.stub()

storiesOf('Tab', module)
    .add('With onClick', () => (
        <Tab onClick={(...args) => window.onClick(...args)}>Tab A</Tab>
    ))
    .add('With children', () => <Tab>I am a child</Tab>)
    .add('With icon', () => <Tab icon={<div>Icon</div>}>Children</Tab>)
    .add('With onClick and disabled', () => (
        <Tab onClick={(...args) => window.onClick(...args)} disabled>
            Tab A
        </Tab>
    ))
