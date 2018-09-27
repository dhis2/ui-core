/** @format */

import React, { Component } from 'react'

import Paper from 'ui/core/Paper'

import Logo from 'ui/core/Logo'

export default class ProgressDemo extends Component {
    render() {
        return (
            <Paper>
                <h3>Logotype components</h3>
                <hr />
                <Logo type="icon" width="48px" />
                <Logo type="logo" />
            </Paper>
        )
    }
}
