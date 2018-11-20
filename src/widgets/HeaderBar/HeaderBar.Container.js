import React from 'react'
import PropTypes from 'prop-types'
import HeaderBar from './HeaderBar.Component'
import { get, post, getAction, serverURL } from '../../utils'

function appIconPath(path) {
    if (path.startsWith('http:') || path.startsWith('https:')) {
        return path
    }

    return `${serverURL}/api/${path}`
}

function appPath(path) {
    if (path.startsWith('http:') || path.startsWith('https:')) {
        return path
    }

    return `${serverURL}/api/${path}`
}

class HeaderBarContainer extends React.Component {
    state = {
        type: 'blue',
        instanceName: '',
        messages: {
            count: 0,
        },
        interpretations: {
            count: 0,
        },
        apps: [],
        profile: {
            name: '',
            email: '',
            src: '',
        },
    }

    componentDidMount() {
        Promise.all([
            get('system/info').then(r => r.json()),
            getAction(`dhis-web-commons/menu/getModules.action?_=${Date.now()}`)
                .then(r => r.text())
                .then(r => JSON.parse(r))
                .then(r =>
                    r.modules.filter(m => typeof m.displayName !== 'undefined')
                ),
            get('me/dashboard').then(r => r.json()),
            get('me.json').then(r => r.json()),
        ])
            .then(([info, apps, unread, me]) => {
                return post('i18n', JSON.stringify(apps.map(a => a.name)))
                    .then(r => r.json())
                    .then(i18n => {
                        return {
                            instanceName: info.systemName,
                            messages: {
                                count: unread.unreadMessageConversations,
                            },
                            interpretations: {
                                count: unread.unreadInterpretations,
                            },
                            apps: apps.map(a => ({
                                name: i18n[a.name] || a.name,
                                path: appPath(a.defaultAction),
                                img: appIconPath(a.icon),
                            })),
                            profile: {
                                name: me.name,
                                email: me.email,
                            },
                        }
                    })
            })
            .then(res => this.setState(res))
            .catch(e =>
                console.error(
                    'HeaderBar failed to mount because of API errors.',
                    e
                )
            )
    }

    render() {
        const { type, messages, interpretations, apps, profile } = this.state
        return (
            <HeaderBar
                baseURL={serverURL}
                type={type}
                instanceName={this.state.instanceName}
                appName={this.props.appName}
                apps={apps}
                profile={profile}
                messages={messages}
                interpretations={interpretations}
            />
        )
    }
}

HeaderBarContainer.propTypes = {
    appName: PropTypes.string.isRequired,
}

export { HeaderBarContainer }
export default HeaderBarContainer
