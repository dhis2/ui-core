/** @format */

import React, { Component } from 'react'

import UI from 'ui/core/UI'

import HeaderBarDemo from './HeaderBarDemo.js'
import InputDemo from './InputDemo.js'
import ProgressDemo from './ProgressDemo.js'
import LogoDemo from './LogoDemo.js'
import ButtonDemo from './ButtonDemo.js'
import MenuDemo from './MenuDemo.js'
import TypographyDemo from './TypographyDemo.js'

import Switch from 'ui/core/Input/Switch'

import Paper from 'ui/core/Paper'

import { isRTL, setTextDirection } from 'ui/utils'

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
            rtl: isRTL(),
            selectValue: null,
        }
    }

    toggleRTL = () => {
        if (isRTL()) {
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

                <LogoDemo />
                <TypographyDemo />
                <ProgressDemo />
                <InputDemo />
                <ButtonDemo />
                <MenuDemo />
            </UI>
        )
    }
}

export default App
