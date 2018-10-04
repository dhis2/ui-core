/** @format */

import React, { Component } from 'react'

import UI from 'ui/core/UI'
import LogoDemo from './LogoDemo'
import MenuDemo from './MenuDemo'
import InputDemo from './InputDemo'
import ButtonDemo from './ButtonDemo'
import DialogDemo from './DialogDemo'
import ProgressDemo from './ProgressDemo'
import TypographyDemo from './TypographyDemo'
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
                    <div
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}
                    >
                        <SwitchDemo
                            rtl={this.state.rtl}
                            onChange={this.toggleRTL}
                        />
                    </div>
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
                    <ProgressDemo />
                </Block>
                <Block>
                    <InputDemo />
                </Block>
                <Block>
                    <LogoDemo />
                </Block>
                <Block>
                    <MenuDemo />
                </Block>
                <Block>
                    <TypographyDemo />
                </Block>
            </UI>
        )
    }
}

export default App
