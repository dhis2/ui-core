import React from 'react'
import PropTypes from 'prop-types'
import Card from '../../core/Card'
import Icon from '../../core/Icon'
import TextField from '../../core/Input/TextField'
import { isPointInRect } from '../../utils'
import s from './styles'

function Search({ value, onChange }) {
    return (
        <div className={s('search')}>
            <TextField label="Search apps" value={value} onChange={onChange} />
            <Icon name="settings" className={s('settings')} />
        </div>
    )
}

Search.propTypes = {
    value: PropTypes.string,
    onChange: PropTypes.func,
}

function Item({ name, path, img }) {
    return (
        <a href={path} className={s('app')}>
            <img src={img} />
            <div className={s('name')}>{name}</div>
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
        <div className={s('modules')}>
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
            <div className={s('apps')} ref={c => (this.elContainer = c)}>
                <Icon name="apps" onClick={this.onToggle} />
                {this.state.show && (
                    <div className={s('contents')} ref={c => (this.elApps = c)}>
                        <Card width="416px" height="301px">
                            <Search
                                value={this.state.filter}
                                onChange={this.onChange}
                            />
                            <List
                                apps={this.props.apps}
                                filter={this.state.filter}
                            />
                        </Card>
                    </div>
                )}
            </div>
        )
    }
}
