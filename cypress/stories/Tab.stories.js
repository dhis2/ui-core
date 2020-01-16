import React from 'react'
import { storiesOf } from '@storybook/react'
import { TabBar, Tab } from '../../src'

storiesOf('Tab', module).add('With onClick', () => (
    <TabBar>
        <Tab onClick={(...args) => window.onClick(...args)}>Tab A</Tab>
    </TabBar>
))
