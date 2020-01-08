import React from 'react'
import { storiesOf } from '@storybook/react'
import { TabBar, Tab } from '../src'

const onClick = (...args) => window.onClick(...args)

storiesOf('Tab', module).add('With onClick', () => (
    <TabBar>
        <Tab onClick={onClick}>Tab A</Tab>
    </TabBar>
))
