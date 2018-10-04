/** @format */

import React, { Component } from 'react'

import Logo from 'ui/core/Logo'

export default class LogoDemo extends Component {
    render() {
        return (
            <div style={{ marginTop: 20 }}>
                <h6>Logo</h6>
                <br />
                <Logo type="icon" width="48px" />
                <Logo type="logo" />
            </div>
        )
    }
}
