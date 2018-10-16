import React from 'react'

import CircularProgress from 'core/CircularProgress'
import LinearProgress from 'core/LinearProgress'

export default class ProgressDemo extends React.Component {
    render() {
        return (
            <div>
                <h6>Progress</h6>
                <br />
                <CircularProgress size="small" />
                <CircularProgress />
                <CircularProgress size="large" />
                <LinearProgress padded amount={90} />
                <LinearProgress padded />
            </div>
        )
    }
}
