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

import Paper from 'ui/core/Paper'

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
            <UI theme="green">
                <HeaderBarDemo />
                <Paper>
                    <Switch
                        label="RTL: Off/On"
                        checked={this.state.rtl}
                        onChange={this.toggleRTL}
                        helpText="Toggle text direction"
                    />
                </Paper>
                <TabsDemo />
                <DialogDemo />
                <TypographyDemo />
                <ProgressDemo />
                <InputDemo />
                <MenuDemo />
                <LogoDemo />
                <ButtonDemo />
            </UI>
        )
    }
}

export default App
