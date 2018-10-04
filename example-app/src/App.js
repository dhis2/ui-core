/** @format */

import React, { Component } from 'react'

import InputDemo from './InputDemo'
import ProgressDemo from './ProgressDemo'
import LogoDemo from './LogoDemo'
import ButtonDemo from './ButtonDemo'
import MenuDemo from './MenuDemo'
import TypographyDemo from './TypographyDemo'
import DialogDemo from './DialogDemo'
import UI from 'ui/core/UI'
import HeaderBarDemo from './HeaderBarDemo.js'
import Switch from 'ui/core/Input/Switch'
import { setDocDir, isDocRTL } from 'ui/utils/rtl'

import './styles.css'
import TabsDemo from './TabsDemo'

function SwitchDemo({ rtl, onChange }) {
    return (
        <Switch
            label="RTL: Off/On"
            checked={rtl}
            onChange={onChange}
            helpText="Toggle text direction"
        />
    )
}

function Block({ children }) {
    return <div style={{ margin: 20 }}>{children}</div>
}

class App extends Component {
    state = {
        rtl: isDocRTL(),
    }

    toggleRTL = () => {
        if (isDocRTL()) {
            this.setState({ rtl: false })
            setDocDir('en_US')
        } else {
            this.setState({ rtl: true })
            setDocDir('ar')
        }
    }

    render() {
        return (
            <UI theme="blue">
                <HeaderBarDemo />
                <Block>
                    <SwitchDemo
                        rtl={this.state.rtl}
                        onChange={this.toggleRTL}
                    />
                </Block>
                <Block>
                    <ButtonDemo />
                </Block>
                <Block>
                    <TabsDemo />
                </Block>
                <Block>
                    <DialogDemo />
                </Block>
                <Block>
                    <TypographyDemo />
                </Block>
                <ProgressDemo />
                <InputDemo />
                <MenuDemo />
                <LogoDemo />
            </UI>
        )
    }
}

export default App
