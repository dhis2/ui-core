/** @format */

import React, { Component } from 'react'

import Paper from 'ui/core/Paper'

import CircularProgress from 'ui/core/CircularProgress'
import LinearProgress from 'ui/core/LinearProgress'

export default class ProgressDemo extends Component {
    render() {
        return (
            <Paper elevation={6} padded>
                <h3>Progress components</h3>
                <hr />
                <CircularProgress size="small" />
                <CircularProgress />
                <CircularProgress size="large" />
                <LinearProgress padded amount={90} />
                <LinearProgress padded />
                <div
                    className="accent-primary-lightest-background"
                    style={{
                        width: 400,
                        height: 300,
                        position: 'relative',
                    }}
                >
                    <p>Put a loader over the top</p>
                    <CircularProgress center />
                </div>
            </Paper>
        )
    }
}
