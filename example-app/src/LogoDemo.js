/** @format */

import React, { Component } from 'react'

import Paper from 'ui/core/Paper'

import Logo from 'ui/core/Logo'

export default class ProgressDemo extends Component {
    render() {
        return (
            <Paper elevation={6} padded>
                <h3>Logotype components</h3>
                <hr />
                <Logo icon width="48px" />
                <Logo logo />
            </Paper>
        )
    }
}
