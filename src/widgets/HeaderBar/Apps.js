import React from 'react'
import PropTypes from 'prop-types'

import Card from '../../core/Card'
import Icon from '../../core/Icon'
import InputField from '../../core/InputField'
import { gotoURL, isPointInRect } from '../../utils'
import s from './styles'

function Search({ value, onChange, onSettingsClick }) {
    return (
        <div className={s('reset', 'search')}>
            <InputField
                name="filter"
                value={value}
                kind="filled"
                size="dense"
                label="Search apps"
                onChange={onChange}
            />
            <Icon
                name="settings"
                className={s('settings')}
                onClick={onSettingsClick}
            />
        </div>
    )
}

Search.propTypes = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    onSettingsClick: PropTypes.func.isRequired,
}

function Item({ name, path, img }) {
    return (
        <a href={path} className={s('reset', 'app')}>
            <img src={img} alt="app logo" className={s('reset')} />
            <div className={s('reset', 'name')}>{name}</div>
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
        <div className={s('reset', 'modules')}>
            {apps
                .filter(
                    ({ name }) =>
                        filter.length > 0
                            ? name.toLowerCase().includes(filter.toLowerCase())
                            : true
                )
                .map(({ name, path, img }, idx) => (
                    <Item
                        key={`app-${name}-${idx}`}
                        name={name}
                        path={path}
                        img={img}
                    />
                ))}
        </div>
    )
}

export default class Apps extends React.Component {
    state = {
        show: false,
        filter: '',
    }

    componentDidMount() {
        document.addEventListener('click', this.onDocClick)
    }

    componentWillUnmount() {
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

    onChange = (_, filter) => this.setState({ filter })

    onSettingsClick = () =>
        gotoURL(`${this.props.baseURL}/dhis-web-menu-management`)

    render() {
        return (
            <div
                className={s('reset', 'apps')}
                ref={c => (this.elContainer = c)}
            >
                <Icon name="apps" onClick={this.onToggle} />
                {this.state.show && (
                    <div
                        className={s('reset', 'contents')}
                        ref={c => (this.elApps = c)}
                    >
                        <Card width="416px" height="301px">
                            <div className={s('reset')}>
                                <Search
                                    value={this.state.filter}
                                    onChange={this.onChange}
                                    onSettingsClick={this.onSettingsClick}
                                />
                                <List
                                    apps={this.props.apps}
                                    filter={this.state.filter}
                                />
                            </div>
                        </Card>
                    </div>
                )}
            </div>
        )
    }
}

Apps.propTypes = {
    baseURL: PropTypes.string.isRequired,
}
