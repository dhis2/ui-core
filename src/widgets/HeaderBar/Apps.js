import React from 'react'
import PropTypes from 'prop-types'

import Card from '../../core/Card'
import Icon from '../../core/Icon'
import InputField from '../../core/InputField'
import { gotoURL, isPointInRect } from '../../utils'

import cx from 'classnames'
import styles from './styles.js'

import css from 'styled-jsx/css'

const appIcon = css.resolve`
    i {
        cursor: pointer;
    }
`

function Search({ value, onChange, onSettingsClick, onIconClick }) {
    return (
        <div className={cx('search')}>
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
            <style jsx>{styles}</style>
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

function Item({ name, path, img }) {
    return (
        <a href={path} className={cx('app')}>
            <img src={img} alt="app logo" className={cx()} />
            <div className={cx('name')}>{name}</div>
            <style jsx>{styles}</style>
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
        <div className={cx('modules')}>
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
                    />
                ))}
            <style jsx>{styles}</style>
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

    onIconClick = () => this.setState({ filter: '' })

    render() {
        return (
            <div className={cx('apps')} ref={c => (this.elContainer = c)}>
                <Icon
                    name="apps"
                    onClick={this.onToggle}
                    className={appIcon.className}
                />
                {this.state.show && (
                    <div
                        className={cx('contents')}
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
                            />
                        </Card>
                    </div>
                )}
                {appIcon.styles}
                <style jsx>{styles}</style>
            </div>
        )
    }
}

Apps.propTypes = {
    baseURL: PropTypes.string.isRequired,
}
