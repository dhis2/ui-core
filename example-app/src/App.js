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

import { setTextDirection, isDocRTL } from 'ui/utils/rtl'

import './styles.css'

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
            setTextDirection({ keyUiLocale: 'en_US' })
            this.setState({
                rtl: false,
            })
        } else {
            setTextDirection({ keyUiLocale: 'ar' })
            this.setState({
                rtl: true,
            })
        }
    }
    /*
                <HeaderBarDemo />
                <DialogDemo />
                <TypographyDemo />
                <ProgressDemo />
                <InputDemo />
                <MenuDemo />
                 */

    render() {
        return (
            <UI theme="green">
                <Paper>
                    <Switch
                        label="RTL: Off/On"
                        checked={this.state.rtl}
                        onChange={this.toggleRTL}
                        helpText="Toggle text direction"
                    />
                </Paper>

                <LogoDemo />
                <ButtonDemo />
            </UI>
        )
    }
}

export default App
