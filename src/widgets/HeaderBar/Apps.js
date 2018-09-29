/** @format */

import React from 'react'
import Paper from '../../core/Paper'
import Icon from '../../core/Icon'
import TextField from '../../core/Input/TextField'

function Search({ value, onChange }) {
    return (
        <div className="search">
            <TextField label="Search apps" value={value} onChange={onChange} />
            <Icon name="settings" />
        </div>
    )
}

function isPointInRect({ x, y }, { left, right, top, bottom }) {
    return x >= left && x <= right && y >= top && y <= bottom
}

export default class Apps extends React.Component {
    state = {
        show: true,
        filter: '',
    }

    componentDidMount() {
        document.addEventListener('click', this.onDocClick)
    }

    componentWillMount() {
        document.removeEventListener('click', this.onDocClick)
    }

    onDocClick = evt => {
        if (this.elContainer && this.elApps) {
            const target = { x: evt.clientX, y: evt.clientY }
            const apps = this.elApps.getBoundingClientRect()
            const container = this.elContainer.getBoundingClientRect()

            if (
                !isPointInRect(target, apps) &&
                !isPointInRect(target, container)
            ) {
                this.setState({ show: false })
            }
        }
    }

    onToggle = () => this.setState({ show: !this.state.show })

    onChange = evt => this.setState({ filter: evt.target.value })

    render() {
        return (
            <div className="apps-container" ref={c => (this.elContainer = c)}>
                <Icon name="apps" onClick={this.onToggle} />
                {this.state.show && (
                    <div className="contents" ref={c => (this.elApps = c)}>
                        <Paper width="416px" height="301px">
                            <Search
                                value={this.state.filter}
                                onChange={this.onChange}
                            />
                        </Paper>
                    </div>
                )}
            </div>
        )
    }
}
