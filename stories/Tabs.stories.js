import React from 'react'
import { storiesOf } from '@storybook/react'
import { Tabs, Tab } from '../src'

import markdown from './info/atoms/buttonStrip.md'

class TabsContainer extends React.Component {
    state = {
        tabIndex: 0,
    }
    setTabIndex = index => {
        this.setState({ tabIndex: index })
    }
    render() {
        return (
            <Tabs selected={this.state.tabIndex}>
                <Tab onClick={() => this.setTabIndex(0)}>Test A</Tab>
                <Tab onClick={() => this.setTabIndex(1)}>Test B</Tab>
                <Tab onClick={() => this.setTabIndex(2)}>Test C</Tab>
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
            width: '450px',
            border: '1px solid #c4c9cc',
        }}
    >
        {fn()}
    </div>
)

storiesOf('Tabs', module)
    .addParameters({
        notes: {
            markdown,
        },
    })
    .addDecorator(Wrapper)
    .add('Default', () => <TabsContainer />)
