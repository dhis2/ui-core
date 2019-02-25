import React from 'react'
import PropTypes from 'prop-types'

import Card from '../../core/Card'
import Icon from '../../core/Icon'
import InputField from '../../core/InputField'

import { gotoURL } from '../../utils/url.js'
import { isPointInRect } from '../../utils/math.js'
import { escapeRegExp } from '../../utils/regex.js'
import memoize from '../../utils/memoize.js'
import cx, { rx } from './styles.js'

const createAppNameFilter = filter => ({ name }) =>
    filter.length > 0
        ? name.toLowerCase().match(escapeRegExp(filter.toLowerCase()))
        : true

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

function Item({ name, path, img, focused, idx }) {
    return (
        <a
            href={path}
            className={rx('app', focused ? 'selected' : null)}
            tabIndex={idx === 0 ? '-1' : null}
        >
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

function List({ apps, filter, selectedIndex }) {
    return (
        <div className={rx('modules')}>
            {apps.map(({ name, path, img }, idx) => (
                <Item
                    key={`app-${name}-${idx}`}
                    name={name}
                    path={path}
                    img={img}
                    focused={idx === selectedIndex}
                    idx={idx}
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
        selectedIndex: 0,
    }

    componentDidMount() {
        document.addEventListener('click', this.onDocClick)
        document.addEventListener('keyup', this.onKeyUp)
        document.addEventListener('keydown', this.onKeyDown)
    }

    componentWillUnmount() {
        document.removeEventListener('click', this.onDocClick)
        document.removeEventListener('keyup', this.onKeyUp)
        document.removeEventListener('keydown', this.onKeyDown)
    }

    onKeyDown = evt => {
        // This prevents tabbing though the app while the search is open
        const isTabKey = (evt.keyCode === 9) | (evt.key === 'Tab')
        if (this.state.show && isTabKey) {
            evt.preventDefault()
        }
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

    onToggle = () =>
        this.setState({
            show: !this.state.show,
            hasTabbed: false,
            selectedIndex: 0,
        })

    onChange = (_, filter) =>
        this.setState({ filter, hasTabbed: false, selectedIndex: 0 })

    onSettingsClick = () =>
        gotoURL(`${this.props.baseURL}/dhis-web-menu-management`)

    onIconClick = () =>
        this.setState({ filter: '', hasTabbed: false, selectedIndex: 0 })

    onKeyUp = evt => {
        if (!this.state.show) {
            return
        }
        const isEnterKey = evt.keyCode === 13 || evt.key === 'Enter'
        const isTabKey = evt.keyCode === 9 || evt.key === 'Tab'

        if (isEnterKey) {
            return this.handleEnterClick(evt)
        } else if (isTabKey) {
            evt.preventDefault()
            const apps = this.filterApps(this.props.apps, this.state.filter)
            if (evt.shiftKey) {
                if (this.state.selectedIndex > 0) {
                    this.setState(state => ({
                        selectedIndex: state.selectedIndex - 1,
                    }))
                }
            } else {
                if (this.state.selectedIndex < apps.length - 1) {
                    this.setState(state => ({
                        selectedIndex: state.selectedIndex + 1,
                    }))
                }
            }
        }
    }

    handleEnterClick(evt) {
        const selectedApp = this.filterApps(this.props.apps, this.state.filter)[
            this.state.selectedIndex
        ]
        if (selectedApp) {
            window.location = selectedApp.path
        }
    }

    filterApps = memoize((list, filter) => {
        const byNameFilter = createAppNameFilter(filter)
        return list.filter(byNameFilter)
    })

    render() {
        const filteredApps = this.filterApps(this.props.apps, this.state.filter)

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
                                apps={filteredApps}
                                selectedIndex={this.state.selectedIndex}
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
