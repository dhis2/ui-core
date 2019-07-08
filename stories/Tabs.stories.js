import React from 'react'
import { storiesOf } from '@storybook/react'
import { TabBar, Tab, ScrollBar } from '../src'
import { Indeterminate } from '../src/icons/Checkbox'

import markdown from './info/molecules/tabs.md'

class TabsContainer extends React.Component {
    state = {
        tabIndex: 5,
    }
    setTabIndex = index => {
        this.setState({ tabIndex: index })
    }
    render() {
        return (
            <ScrollBar>
                <TabBar>
                    <Tab
                        selected={this.state.tabIndex === 0}
                        onClick={() => this.setTabIndex(0)}
                    >
                        Test A
                    </Tab>
                    <Tab
                        selected={this.state.tabIndex === 1}
                        onClick={() => this.setTabIndex(1)}
                    >
                        Test B
                    </Tab>
                    <Tab
                        selected={this.state.tabIndex === 2}
                        disabled
                        onClick={() => this.setTabIndex(2)}
                    >
                        Test C
                    </Tab>
                    <Tab
                        selected={this.state.tabIndex === 3}
                        onClick={() => this.setTabIndex(3)}
                    >
                        Test D
                    </Tab>
                    <Tab
                        selected={this.state.tabIndex === 4}
                        onClick={() => this.setTabIndex(4)}
                    >
                        Test E
                    </Tab>
                    <Tab
                        selected={this.state.tabIndex === 5}
                        onClick={() => this.setTabIndex(5)}
                    >
                        Test F
                    </Tab>
                    <Tab
                        selected={this.state.tabIndex === 6}
                        onClick={() => this.setTabIndex(6)}
                    >
                        Test G
                    </Tab>
                    <Tab
                        selected={this.state.tabIndex === 7}
                        onClick={() => this.setTabIndex(7)}
                    >
                        Test H
                    </Tab>
                    <Tab
                        selected={this.state.tabIndex === 8}
                        onClick={() => this.setTabIndex(8)}
                    >
                        Test I
                    </Tab>
                    <Tab
                        selected={this.state.tabIndex === 9}
                        onClick={() => this.setTabIndex(9)}
                    >
                        Test J
                    </Tab>
                    <Tab
                        selected={this.state.tabIndex === 10}
                        onClick={() => this.setTabIndex(10)}
                    >
                        Test K
                    </Tab>
                    <Tab
                        selected={this.state.tabIndex === 11}
                        onClick={() => this.setTabIndex(11)}
                    >
                        Test L
                    </Tab>
                </TabBar>
            </ScrollBar>
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
        <ScrollBar>
            <TabBar>
                <Tab>Tab A</Tab>
                <Tab>Tab B</Tab>
                <Tab>Tab C</Tab>
                <Tab selected>Tab D</Tab>
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
            </TabBar>
        </ScrollBar>
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
            <Tab icon={<Indeterminate />}>Default</Tab>
            <Tab icon={<Indeterminate />} selected>
                Selected
            </Tab>
            <Tab icon={<Indeterminate />} disabled>
                Disabled
            </Tab>
            <Tab icon={<Indeterminate />}>
                Text overflow - This tab has a very long text and it exceeds the
                maximum width of 320px
            </Tab>
        </TabBar>
    ))
    .add('Interactive demo with scrolling', () => <TabsContainer />)
