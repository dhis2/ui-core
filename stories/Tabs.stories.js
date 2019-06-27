import React from 'react'
import { storiesOf } from '@storybook/react'
import { Tabs, Tab } from '../src'
import { Indeterminate } from '../src/icons/Checkbox'

import markdown from './info/molecules/tabs.md'

class TabsContainer extends React.Component {
    state = {
        tabIndex: 10,
    }
    setTabIndex = index => {
        this.setState({ tabIndex: index })
    }
    render() {
        return (
            <Tabs selected={this.state.tabIndex}>
                <Tab onClick={() => this.setTabIndex(0)}>Test A</Tab>
                <Tab onClick={() => this.setTabIndex(1)}>Test B</Tab>
                <Tab disabled onClick={() => this.setTabIndex(2)}>
                    Test C
                </Tab>
                <Tab onClick={() => this.setTabIndex(3)}>Test D</Tab>
                <Tab onClick={() => this.setTabIndex(4)}>Test E</Tab>
                <Tab onClick={() => this.setTabIndex(5)}>Test F</Tab>
                <Tab onClick={() => this.setTabIndex(6)}>Test G</Tab>
                <Tab onClick={() => this.setTabIndex(7)}>Test H</Tab>
                <Tab onClick={() => this.setTabIndex(8)}>Test I</Tab>
                <Tab onClick={() => this.setTabIndex(9)}>Test J</Tab>
                <Tab onClick={() => this.setTabIndex(10)}>Test K</Tab>
                <Tab onClick={() => this.setTabIndex(11)}>Test L</Tab>
            </Tabs>
        )
    }
}

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

storiesOf('Tabs', module)
    .addParameters({
        notes: {
            markdown,
        },
    })
    .addDecorator(Wrapper)
    .add('Default (fluid)', () => (
        <Tabs selected={3}>
            <Tab>Tab A</Tab>
            <Tab>Tab B</Tab>
            <Tab>Tab C</Tab>
            <Tab>Tab D</Tab>
            <Tab>Tab E</Tab>
        </Tabs>
    ))
    .add('Fluid - with side scroll', () => (
        <Tabs selected={3}>
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
            <Tab>Tab M</Tab>
            <Tab>Tab N</Tab>
            <Tab>Tab O</Tab>
            <Tab>Tab P</Tab>
            <Tab>Tab Q</Tab>
            <Tab>Tab R</Tab>
        </Tabs>
    ))
    .add('Fixed - tabs fill content', () => (
        <Tabs fixed selected={3}>
            <Tab>Tab A</Tab>
            <Tab>Tab B</Tab>
            <Tab>Tab C</Tab>
            <Tab>Tab D</Tab>
            <Tab>Tab E</Tab>
        </Tabs>
    ))
    .add('Tab states', () => (
        <Tabs fixed selected={1}>
            <Tab>Default</Tab>
            <Tab>Active</Tab>
            <Tab disabled>Disabled</Tab>
        </Tabs>
    ))
    .add('Tab states - with icon', () => (
        <Tabs fixed selected={1}>
            <Tab icon={<Indeterminate />}>Default</Tab>
            <Tab icon={<Indeterminate />}>Active</Tab>
            <Tab icon={<Indeterminate />} disabled>
                Disabled
            </Tab>
        </Tabs>
    ))
    .add('Interactive demo with scrolling', () => <TabsContainer />)
