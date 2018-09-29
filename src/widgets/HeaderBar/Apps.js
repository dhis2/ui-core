/** @format */

import React from 'react'
import PropTypes from 'prop-types'

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

Search.propTypes = {
    value: PropTypes.string,
    onChange: PropTypes.func,
}

function Item({ name, path, img }) {
    return (
        <a href={path} className="app">
            <img src={img} />
            <div className="name">{name}</div>
        </a>
    )
}

Item.propTypes = {
    name: PropTypes.string,
    path: PropTypes.string,
    img: PropTypes.string,
}

function List({ apps, filter }) {
    return (
        <div className="apps">
            {apps
                .filter(
                    ({ name }) =>
                        filter.length > 0
                            ? name.toLowerCase().includes(filter.toLowerCase())
                            : true
                )
                .map(({ name, path, img }) => (
                    <Item
                        key={`app-${name}`}
                        name={name}
                        path={path}
                        img={img}
                    />
                ))}
        </div>
    )
}

function isPointInRect({ x, y }, { left, right, top, bottom }) {
    return x >= left && x <= right && y >= top && y <= bottom
}

export default class Apps extends React.Component {
    state = {
        show: false,
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
                            <List
                                apps={this.props.apps}
                                filter={this.state.filter}
                            />
                        </Paper>
                    </div>
                )}
            </div>
        )
    }
}
