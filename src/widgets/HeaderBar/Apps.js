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

const isEnterKey = evt => evt.keyCode === 13 || evt.key === 'Enter'
const isTabKey = evt => evt.keyCode === 9 || evt.key === 'Tab'
const isEsc = evt => evt.keyCode === 27 || evt.key === 'Escape'
const isUpArrow = evt => evt.keyCode === 38 || evt.key === 'ArrowUp'
const isDownArrow = evt => evt.keyCode === 40 || evt.key === 'ArrowDown'

function Search({ value, onChange, onSettingsClick, onIconClick, inputRef }) {
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
                ref={inputRef}
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
        selectedIndex: 0,
    }

    constructor(props) {
        super(props)
        this.searchRef = React.createRef()
    }

    componentWillUnmount() {
        // We remove listeners here as well as when closing the overlay,
        // just in case the component is nmounted without didUpdate catching it
        this.removeEventListeners()
    }

    componentDidUpdate(prevProps, prevState) {
        const isShown = this.state.show
        const didChange = prevState.show !== isShown
        // Component is long lived, so we add listeners only when apps menu is opened
        if (didChange) {
            if (isShown) {
                document.addEventListener('click', this.handleDocClick)
                document.addEventListener('keyup', this.handleKeyUp)
                document.addEventListener('keydown', this.onKeyDown)
            } else {
                this.removeEventListeners()
            }
        }
    }

    removeEventListeners() {
        document.removeEventListener('click', this.handleDocClick)
        document.removeEventListener('keyup', this.handleKeyUp)
        document.removeEventListener('keydown', this.onKeyDown)
    }

    onKeyDown = evt => {
        // When tabbing we remove the "simulated" focus, and let native-tabbing take control
        if (isTabKey(evt) && this.state.selectedIndex !== -1) {
            this.setState({ selectedIndex: -1 })
        }
        if (isUpArrow(evt) || isDownArrow(evt)) {
            // prevent moving arrow in searchbox
            evt.preventDefault()
        }
    }

    handleDocClick = evt => {
        if (this.elContainer && this.elApps) {
            const target = { x: evt.clientX, y: evt.clientY }
            const apps = this.elApps.getBoundingClientRect()
            const container = this.elContainer.getBoundingClientRect()

            if (
                !isPointInRect(target, apps) &&
                !isPointInRect(target, container)
            ) {
                this.handleClose()
            }
        }
    }

    handleToggle = () =>
        this.setState({
            show: !this.state.show,
            selectedIndex: 0,
        })

    handleSearchChange = (_, filter) =>
        this.setState({ filter, selectedIndex: 0 })

    handleSettingsClick = () =>
        gotoURL(`${this.props.baseURL}/dhis-web-menu-management`)

    handleIconClick = () => this.setState({ filter: '', selectedIndex: 0 })

    handleKeyUp = evt => {
        if (isEsc(evt)) {
            this.handleClose(evt)
        } else if (this.searchRef.current.isFocused()) {
            // we enable these escape-hatches only when focused
            if (isEnterKey(evt)) {
                this.handleEnterClick(evt)
            } else if (isUpArrow(evt) || isDownArrow(evt)) {
                evt.preventDefault()
                this.handleAppNavigation(evt, isUpArrow(evt))
            }
        }
    }

    handleClose(evt) {
        this.setState({ show: false })
    }

    handleAppNavigation = (evt, backwards = false) => {
        const apps = this.filterApps(this.props.apps, this.state.filter)
        if (backwards) {
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

    handleEnterClick = evt => {
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
                <Icon name="apps" onClick={this.handleToggle} />
                {this.state.show && (
                    <div
                        className={rx('contents')}
                        ref={c => (this.elApps = c)}
                    >
                        <Card>
                            <Search
                                value={this.state.filter}
                                onChange={this.handleSearchChange}
                                onSettingsClick={this.handleSettingsClick}
                                onIconClick={this.handleIconClick}
                                inputRef={this.searchRef}
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
