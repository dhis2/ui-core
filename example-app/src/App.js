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

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            switchOn: false,
            inputText: '',
            inputText1: '',
            inputText2: '',
            inputText3: '',
            inputText4: '',
            rtl: isDocRTL(),
            selectValue: null,
        }
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
                <div
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        margin: '20px 0 0 0',
                    }}
                >
                    <Switch
                        label="RTL: Off/On"
                        checked={this.state.rtl}
                        onChange={this.toggleRTL}
                        helpText="Toggle text direction"
                    />
                </div>
                <ButtonDemo />
                <TabsDemo />
                <DialogDemo />
                <TypographyDemo />
                <ProgressDemo />
                <InputDemo />
                <MenuDemo />
                <LogoDemo />
            </UI>
        )
    }
}

export default App
