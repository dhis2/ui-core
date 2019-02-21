import React from 'react'
import PropTypes from 'prop-types'

import Card from '../../core/Card'
import Icon from '../../core/Icon'
import InputField from '../../core/InputField'

import { gotoURL } from '../../utils/url.js'
import { isPointInRect } from '../../utils/math.js'

import cx, { rx } from './styles.js'

const createAppNameFilter = filter => ({ name }) =>
    filter.length > 0 ? name.toLowerCase().match(filter.toLowerCase()) : true

function Search({ value, onChange, onSettingsClick, onIconClick }) {
    return (
        <div className={rx('search')}>
            <InputField
                value={value}
                name="filter"
                kind="filled"
                size="dense"
                focus={true}
                label="Search apps"
                onChange={onChange}
                trailIcon="cancel"
                onTrailIconClick={onIconClick}
            />
            <Icon
                name="settings"
                className={cx('settings')}
                onClick={onSettingsClick}
            />
        </div>
    )
}

Search.defaultProps = {
    onIconClick: null,
}

Search.propTypes = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    onSettingsClick: PropTypes.func.isRequired,
    onIconClick: PropTypes.func,
}

function Item({ name, path, img, focused }) {
    return (
        <a href={path} className={rx('app', focused ? 'selected' : null)}>
            <img src={img} alt="app logo" className={rx()} />
            <div className={rx('name')}>{name}</div>
        </a>
    )
}

Item.propTypes = {
    name: PropTypes.string,
    path: PropTypes.string,
    img: PropTypes.string,
}

function List({ apps, filter, firstFocused }) {
    return (
        <div className={rx('modules')} tabIndex="-1">
            {apps
                .filter(({ name }) => {
                    return filter.length > 0
                        ? name.toLowerCase().match(filter.toLowerCase())
                        : true
                })
                .map(({ name, path, img }, idx) => (
                    <Item
                        key={`app-${name}-${idx}`}
                        name={name}
                        path={path}
                        img={img}
                        focused={firstFocused && idx === 0}
                    />
                ))}
        </div>
    )
}

export default class Apps extends React.Component {
    state = {
        show: false,
        filter: '',
        hasTabbed: false,
    }

    componentDidMount() {
        document.addEventListener('click', this.onDocClick)
        document.addEventListener('keyup', this.onKeyPress)
    }

    componentWillUnmount() {
        document.removeEventListener('click', this.onDocClick)
        document.addEventListener('keyup', this.onKeyPress)
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
                this.setState({ show: false, hasTabbed: false })
            }
        }
    }

    onToggle = () => this.setState({ show: !this.state.show, hasTabbed: false })

    onChange = (_, filter) => this.setState({ filter, hasTabbed: false })

    onSettingsClick = () =>
        gotoURL(`${this.props.baseURL}/dhis-web-menu-management`)

    onIconClick = () => this.setState({ filter: '', hasTabbed: false })

    onKeyPress = evt => {
        const isEnterPress = evt.keyCode === 13 || evt.key === 'Enter'
        const isTabKey = (evt.keyCode === 9) | (evt.key === 'Tab')
        if (isEnterPress) {
            return this.handleEnterClick(evt)
        } else if (isTabKey) {
            this.setState({ hasTabbed: true })
        }
    }

    handleEnterClick(evt) {
        // We don't know what app is in focus if the user has tabbed since last search change, so we ignore it
        if (!this.state.show || this.state.hasTabbed) {
            return
        }
        // Else we want to follow the link of the first app, as a shortcut
        const byNameFilter = createAppNameFilter(this.state.filter)
        const firstApp = this.props.apps.filter(byNameFilter)[0]
        if (firstApp) {
            window.location = firstApp.path
        }
    }

    render() {
        return (
            <div className={rx('apps')} ref={c => (this.elContainer = c)}>
                <Icon name="apps" onClick={this.onToggle} />
                {this.state.show && (
                    <div
                        className={rx('contents')}
                        ref={c => (this.elApps = c)}
                    >
                        <Card>
                            <Search
                                value={this.state.filter}
                                onChange={this.onChange}
                                onSettingsClick={this.onSettingsClick}
                                onIconClick={this.onIconClick}
                            />
                            <List
                                apps={this.props.apps}
                                filter={this.state.filter}
                                firstFocused={!this.state.hasTabbed}
                            />
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
