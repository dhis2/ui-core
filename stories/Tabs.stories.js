import React from 'react'
import { storiesOf } from '@storybook/react'
import { TabBar, Tab } from '../src'
import { AttachFile } from '../src/icons/AttachFile'

const Wrapper = fn => (
    <div
        style={{
            maxWidth: 700,
        }}
    >
        {fn()}
        <p>Max-width of this container is 700 px</p>
    </div>
)

storiesOf('TabBar', module)
    .addDecorator(Wrapper)
    .add('Default (fluid)', () => (
        <TabBar>
            <Tab>Tab A</Tab>
            <Tab>Tab B</Tab>
            <Tab selected>Tab C</Tab>
            <Tab>Tab D</Tab>
            <Tab>Tab E</Tab>
            <Tab>Tab F</Tab>
            <Tab>Tab G</Tab>
        </TabBar>
    ))
    .add('Fixed - tabs fill content', () => (
        <TabBar fixed>
            <Tab>Tab A</Tab>
            <Tab>Tab B</Tab>
            <Tab selected>Tab C</Tab>
            <Tab>Tab D</Tab>
            <Tab>Tab E</Tab>
            <Tab>Tab F</Tab>
            <Tab>Tab G</Tab>
        </TabBar>
    ))
    .add('Tabs with scroller', () => (
        <TabBar scrollable>
            <Tab>Tab A</Tab>
            <Tab>Tab B</Tab>
            <Tab>Tab C</Tab>
            <Tab>Tab D</Tab>
            <Tab>Tab E</Tab>
            <Tab>Tab F</Tab>
            <Tab>Tab G</Tab>
            <Tab>Tab H</Tab>
            <Tab>Tab I</Tab>
            <Tab>Tab J</Tab>
            <Tab>Tab K</Tab>
            <Tab>Tab L</Tab>
            <Tab selected>Tab M</Tab>
            <Tab>Tab N</Tab>
            <Tab>Tab O</Tab>
            <Tab>Tab P</Tab>
            <Tab>Tab Q</Tab>
            <Tab>Tab R</Tab>
        </TabBar>
    ))
    .add('Tab states', () => (
        <TabBar>
            <Tab>Default</Tab>
            <Tab selected>Selected</Tab>
            <Tab disabled>Disabled</Tab>
            <Tab>
                Text overflow - This tab has a very long text and it exceeds the
                maximum width of 320px
            </Tab>
        </TabBar>
    ))
    .add('Tab states - with icon', () => (
        <TabBar>
            <Tab icon={<AttachFile />}>Default</Tab>
            <Tab icon={<AttachFile />} selected>
                Selected
            </Tab>
            <Tab icon={<AttachFile />} disabled>
                Disabled
            </Tab>
            <Tab icon={<AttachFile />}>
                Text overflow - This tab has a very long text and it exceeds the
                maximum width of 320px
            </Tab>
        </TabBar>
    ))
