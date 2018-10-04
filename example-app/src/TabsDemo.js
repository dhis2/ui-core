/** @format */

import React from 'react'
import { Tabs, Tab } from 'ui/core/Tabs'
import Icon from 'ui/core/Icon'

const tabsList = [
    { label: 'Tab number 1', icon: 'face' },
    { label: 'Tab number 2', icon: 'face' },
    { label: 'Tab number 3', icon: 'face' },
    { label: 'Tab number 4', icon: 'face', disabled: true },
    { label: 'Tab number 5', icon: 'face' },
    { label: 'Tab number 6', icon: 'face' },
    { label: 'Tab number 7', icon: 'face' },
    { label: 'Tab number 8', icon: 'face' },
    { label: 'Tab number 9', icon: 'face' },
    { label: 'Tab number 10', icon: 'face' },
    { label: 'Tab number 11', icon: 'face' },
    { label: 'Tab number 12', icon: 'face' },
    { label: 'Tab number 13', icon: 'face' },
    { label: 'Tab number 14', icon: 'face' },
    { label: 'Tab number 15', icon: 'face' },
    { label: 'Tab number 16', icon: 'face' },
    { label: 'Tab number 17', icon: 'face' },
    { label: 'Tab number 18', icon: 'face' },
    { label: 'Tab number 19', icon: 'face' },
    { label: 'Tab number 20', icon: 'face' },
    { label: 'Tab number 21', icon: 'face' },
    { label: 'Tab number 22', icon: 'face' },
    { label: 'Tab number 23', icon: 'face' },
    { label: 'Tab number 24', icon: 'face' },
    { label: 'Tab number 25', icon: 'face' },
    { label: 'Tab number 26', icon: 'face' },
    { label: 'Tab number 27', icon: 'face' },
    { label: 'Tab number 28', icon: 'face' },
    { label: 'Tab number 29', icon: 'face' },
    { label: 'Tab number 30', icon: 'face' },
    { label: 'Tab number 31', icon: 'face' },
    { label: 'Tab number 32', icon: 'face' },
    { label: 'Tab number 33', icon: 'face' },
    { label: 'Tab number 34', icon: 'face' },
    { label: 'Tab number 35', icon: 'face' },
    { label: 'Tab number 36', icon: 'face' },
    { label: 'Tab number 37', icon: 'face' },
    { label: 'Tab number 38', icon: 'face' },
    { label: 'Tab number 39', icon: 'face' },
    { label: 'Tab number 40', icon: 'face' },
    { label: 'Tab number 41', icon: 'face' },
    { label: 'Tab number 42', icon: 'face' },
    { label: 'Tab number 43', icon: 'face' },
    { label: 'Tab number 44', icon: 'face' },
    { label: 'Tab number 45', icon: 'face' },
    { label: 'Tab number 46', icon: 'face' },
    { label: 'Tab number 47', icon: 'face' },
    { label: 'Tab number 48', icon: 'face' },
    { label: 'Tab number 49', icon: 'face' },
    { label: 'Tab number 50', icon: 'face' },
    { label: 'Tab number 51', icon: 'face' },
    { label: 'Tab number 52', icon: 'face' },
    { label: 'Tab number 53', icon: 'face' },
    { label: 'Tab number 54', icon: 'face' },
    { label: 'Tab number 55', icon: 'face' },
    { label: 'Tab number 56', icon: 'face' },
    { label: 'Tab number 57', icon: 'face' },
    { label: 'Tab number 58', icon: 'face' },
    { label: 'Tab number 59', icon: 'face' },
    { label: 'Tab number 60', icon: 'face' },
    { label: 'Tab number 61', icon: 'face' },
    { label: 'Tab number 62', icon: 'face' },
    { label: 'Tab number 63', icon: 'face' },
    { label: 'Tab number 64', icon: 'face' },
]

const styles = {
    tabContainer: {
        position: 'relative',
        width: '100%',
        // height: '150px',
        marginBottom: '1rem',
    },
    tabHeader: {
        margin: '4rem',
        textAlign: 'center',
    },
    inlineCode: {
        display: 'inline',
    },
}

export default class TabsDemo extends React.Component {
    state = {
        activeTabIndex: 60,
        activeSecondaryTabIndex: 2,
    }

    tabs = tabsList.map((tab, index) => ({
        ...tab,
        onClick: () => this.tabChangeHandler(index),
    }))

    tabChangeHandler = clickedTabIndex => {
        this.setState({
            activeTabIndex: clickedTabIndex,
        })
    }

    activateSubTab = clickedTabIndex => {
        this.setState({
            activeSecondaryTabIndex: clickedTabIndex,
        })
    }

    render() {
        return (
            <div>
                <h6>Tabs</h6>
                <br />
                <div style={styles.tabContainer}>
                    <Tabs
                        stacked
                        items={this.tabs}
                        selected={this.state.activeTabIndex}
                    />
                    <p style={styles.tabHeader}>
                        Content for tab nr {this.state.activeTabIndex + 1}
                    </p>
                </div>

                <div style={styles.tabContainer}>
                    <Tabs
                        contained
                        cluster="center"
                        selected={this.state.activeSecondaryTabIndex}
                    >
                        <Tab onClick={() => this.activateSubTab(0)}>
                            <span style={{ display: 'inline-flex' }}>
                                <Icon name="face" />
                                <span>Sub tab 1</span>
                            </span>
                        </Tab>
                        <Tab onClick={() => this.activateSubTab(1)}>
                            <span style={{ display: 'inline-flex' }}>
                                Sub tab 2
                            </span>
                        </Tab>
                        <Tab onClick={() => this.activateSubTab(3)}>
                            <span style={{ display: 'inline-flex' }}>
                                <Icon name="face" />
                                Sub tab 1
                            </span>
                        </Tab>
                    </Tabs>
                    <p style={styles.tabHeader}>
                        Content for tab nr{' '}
                        {this.state.activeSecondaryTabIndex + 1}
                    </p>
                </div>
            </div>
        )
    }
}
